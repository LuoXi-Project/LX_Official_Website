import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">AI 驱动的下一代直播解决方案</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            用 <span className="text-primary">AI</span> 重新定义
            <br />
            虚拟直播体验
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            洛曦AI提供完整的AI虚拟主播、数字人、直播辅助工具解决方案， 让您的直播更智能、更高效、更精彩
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://github.com/Ikaros-521/LX_AI" target="_blank">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                立即开始 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://space.bilibili.com/3709626/lists/4391504" target="_blank">
              <Button size="lg" variant="outline" className="gap-2 border-border hover:bg-secondary bg-transparent">
                <Play className="w-4 h-4" /> 观看教程
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "支持的LLM" },
              { value: "10+", label: "产品矩阵" },
              { value: "50K+", label: "GitHub Stars" },
              { value: "24/7", label: "全天候支持" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
