/**
 * 更新日志数据层
 *
 * 数据来源：独立的日志仓库 Ikaros-521/LX_Changelog，通过 jsDelivr CDN 实时拉取。
 * 仓库更新后无需重新构建官网，jsDelivr 缓存刷新（几分钟）后官网自动展示新内容。
 *
 * 仓库地址：https://github.com/Ikaros-521/LX_Changelog
 */

/** 日志仓库拥有者/名称，用于拼接 CDN 地址与兜底跳转 */
export const CHANGELOG_REPO = "Ikaros-521/LX_Changelog"

/** 日志仓库默认分支 */
const CHANGELOG_BRANCH = "main"

/** CDN 拉取地址（jsDelivr，国内有节点） */
export const CHANGELOG_RAW_URL = `https://cdn.jsdelivr.net/gh/${CHANGELOG_REPO}@${CHANGELOG_BRANCH}/changelog.json`

/** 兜底直跳地址：拉取失败时引导用户去 GitHub 查看 */
export const CHANGELOG_GITHUB_URL = `https://github.com/${CHANGELOG_REPO}`

/** 变更分类 */
export type ChangeCategory = "added" | "improved" | "fixed"

/** 单个版本的变更记录 */
export interface ChangelogVersion {
  /** 版本号，如 v2.5.0 */
  version: string
  /** 发布日期 YYYY-MM-DD */
  date: string
  /** 分类变更条目，三类均可缺省或为空数组 */
  changes: Partial<Record<ChangeCategory, string[]>>
}

/** 单个产品的日志 */
export interface ProductChangelog {
  /** 产品中文名 */
  name: string
  /** 可选：开源仓库 owner/repo，用于页面跳转 */
  repo?: string
  /** 版本列表，新的在前 */
  versions: ChangelogVersion[]
}

/** 完整日志数据 */
export interface ChangelogData {
  products: Record<string, ProductChangelog>
}

/** 分类元信息：标签文案 + 配色（用于 UI 渲染） */
export const CATEGORY_META: Record<
  ChangeCategory,
  { label: string; dot: string; text: string; badge: string }
> = {
  added: {
    label: "新增",
    dot: "bg-emerald-500",
    text: "text-emerald-500",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
  improved: {
    label: "优化",
    dot: "bg-blue-500",
    text: "text-blue-500",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
  fixed: {
    label: "修复",
    dot: "bg-orange-500",
    text: "text-orange-500",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
}

/**
 * 拉取更新日志。
 * 加 ?t=<timestamp> 破浏览器缓存，确保拿到 jsDelivr 最新内容。
 * 失败时抛出 Error，由调用方处理（展示重试 + 兜底链接）。
 */
export async function fetchChangelog(): Promise<ChangelogData> {
  const res = await fetch(`${CHANGELOG_RAW_URL}?t=${Date.now()}`)
  if (!res.ok) {
    throw new Error(`加载失败（${res.status}）`)
  }
  return (await res.json()) as ChangelogData
}
