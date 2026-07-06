"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  GitCommitVertical,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  ArrowLeft,
} from "lucide-react"
import {
  type ChangeCategory,
  type ChangelogData,
  CATEGORY_META,
  CHANGELOG_GITHUB_URL,
  fetchChangelog,
} from "@/lib/changelog"

/** 分类显示顺序 */
const CATEGORY_ORDER: ChangeCategory[] = ["added", "improved", "fixed"]

/** 展平后的单条日志记录，用于时间线渲染 */
interface TimelineEntry {
  productId: string
  productName: string
  repo?: string
  version: string
  date: string
  changes: Partial<Record<ChangeCategory, string[]>>
}

type Status = "loading" | "success" | "error"

export default function ChangelogPage() {
  return (
    <Suspense fallback={<ChangelogFallback />}>
      <ChangelogContent />
    </Suspense>
  )
}

function ChangelogFallback() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-48 mx-auto bg-secondary rounded animate-pulse mb-4" />
        </div>
      </section>
      <Footer />
    </main>
  )
}

function ChangelogContent() {
  const searchParams = useSearchParams()
  // URL ?product=xxx 预选产品；"all" 或缺省表示全部
  const initialProduct = searchParams.get("product") ?? "all"

  const [data, setData] = useState<ChangelogData | null>(null)
  const [status, setStatus] = useState<Status>("loading")
  const [active, setActive] = useState<string>(initialProduct)

  const load = () => {
    setStatus("loading")
    fetchChangelog()
      .then((d) => {
        setData(d)
        setStatus("success")
      })
      .catch(() => setStatus("error"))
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 同步 URL query 变化（产品卡片跳转过来时）
  useEffect(() => {
    setActive(searchParams.get("product") ?? "all")
  }, [searchParams])

  /** 所有产品 id（用于筛选标签），按数据顺序 */
  const productIds = useMemo(() => {
    if (!data) return []
    return Object.keys(data.products)
  }, [data])

  /** 展平 + 排序（新日期在前；同日则按数据顺序）的时间线 */
  const timeline = useMemo<TimelineEntry[]>(() => {
    if (!data) return []
    const entries: TimelineEntry[] = []
    for (const [pid, p] of Object.entries(data.products)) {
      for (const v of p.versions) {
        entries.push({
          productId: pid,
          productName: p.name,
          repo: p.repo,
          version: v.version,
          date: v.date,
          changes: v.changes,
        })
      }
    }
    entries.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    return entries
  }, [data])

  /** 按选中产品过滤 */
  const visible = useMemo(() => {
    if (active === "all") return timeline
    return timeline.filter((e) => e.productId === active)
  }, [timeline, active])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题区 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <Badge className="bg-transparent text-primary border-none">版本更新</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              更新日志
            </h1>
            <p className="text-lg text-muted-foreground">
              汇总洛曦旗下所有软件的版本更新记录，数据来自独立日志仓库，实时同步。
            </p>
          </div>

          {/* 状态：加载中 */}
          {status === "loading" && <LoadingSkeleton />}

          {/* 状态：失败 */}
          {status === "error" && (
            <div className="bg-card rounded-2xl border border-border p-10 text-center">
              <AlertCircle className="w-10 h-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">更新日志加载失败</h3>
              <p className="text-muted-foreground text-sm mb-6">
                可能是 CDN 暂时不可达，你可以稍后重试，或直接前往日志仓库查看完整记录。
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button onClick={load} className="gap-2">
                  <RefreshCw className="w-4 h-4" /> 重新加载
                </Button>
                <Link href={CHANGELOG_GITHUB_URL} target="_blank">
                  <Button variant="outline" className="gap-2 border-border bg-transparent">
                    <ExternalLink className="w-4 h-4" /> 查看日志仓库
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* 状态：成功 */}
          {status === "success" && data && (
            <>
              {/* 产品筛选 */}
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                <FilterTag
                  active={active === "all"}
                  onClick={() => setActive("all")}
                  label="全部"
                  count={timeline.length}
                />
                {productIds.map((pid) => {
                  const p = data.products[pid]
                  const count = p.versions.length
                  if (count === 0) return null
                  return (
                    <FilterTag
                      key={pid}
                      active={active === pid}
                      onClick={() => setActive(pid)}
                      label={p.name}
                      count={count}
                    />
                  )
                })}
              </div>

              {/* 时间线 */}
              {visible.length === 0 ? (
                <div className="bg-card rounded-2xl border border-border p-10 text-center">
                  <p className="text-muted-foreground">该产品暂无更新记录。</p>
                  <Button
                    variant="ghost"
                    className="mt-4 gap-2"
                    onClick={() => setActive("all")}
                  >
                    <ArrowLeft className="w-4 h-4" /> 查看全部
                  </Button>
                </div>
              ) : (
                <div className="relative pl-8">
                  {/* 竖线 */}
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-border" aria-hidden />

                  <div className="space-y-6">
                    {visible.map((entry, i) => (
                      <TimelineEntryCard key={`${entry.productId}-${entry.version}-${i}`} entry={entry} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

/** 筛选标签 */
function FilterTag({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean
  onClick: () => void
  label: string
  count: number
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-colors border ${
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
      }`}
    >
      {label}
      <span className={`ml-2 text-xs ${active ? "opacity-80" : "opacity-60"}`}>{count}</span>
    </button>
  )
}

/** 时间线单条卡片 */
function TimelineEntryCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="relative">
      {/* 节点 */}
      <div className="absolute -left-[22px] top-5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" aria-hidden />

      <div className="bg-card rounded-2xl border border-border p-6">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-lg font-bold text-foreground">{entry.version}</span>
            <Badge variant="secondary" className="bg-primary/15 text-primary">
              {entry.productName}
            </Badge>
          </div>
          <span className="text-sm text-muted-foreground">{entry.date}</span>
        </div>

        <div className="space-y-3">
          {CATEGORY_ORDER.map((cat) => {
            const items = entry.changes[cat]
            if (!items || items.length === 0) return null
            const meta = CATEGORY_META[cat]
            return (
              <div key={cat}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
                  <span className={`text-sm font-medium ${meta.text}`}>{meta.label}</span>
                </div>
                <ul className="ml-4 space-y-1">
                  {items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {entry.repo && (
          <div className="mt-4 pt-4 border-t border-border/60">
            <Link
              href={`https://github.com/${entry.repo}`}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitCommitVertical className="w-3.5 h-3.5" />
              {entry.repo}
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

/** 加载骨架 */
function LoadingSkeleton() {
  return (
    <div className="relative pl-8">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-border" aria-hidden />
      <div className="space-y-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="bg-card rounded-2xl border border-border p-6 animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="h-5 w-24 bg-secondary rounded" />
              <div className="h-4 w-20 bg-secondary rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-3/4 bg-secondary rounded" />
              <div className="h-3 w-1/2 bg-secondary rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
