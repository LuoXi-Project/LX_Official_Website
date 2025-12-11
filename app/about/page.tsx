import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Github, Video, MessageCircle, Heart, Users, Target, Rocket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary mb-4">关于我们</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">洛曦</h1>
            <p className="text-xl text-muted-foreground">专注于AI技术创新的团队</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-card rounded-2xl border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                我们的故事
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                洛曦是一支专注于AI技术创新与落地的团队。我们将最前沿的人工智能技术转化为实用的产品与解决方案，帮助创作者和企业获得智能、高效、个性化的体验。从AI
                Vtuber到数字人，从直播工具到智能助手，产品矩阵覆盖直播的各个环节。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">组织简介</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  洛曦致力于将AI技术应用于直播、内容创作与互动场景，持续输出易用、可靠的产品形态。
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">创始人介绍</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Love丶伊卡洛斯：CEO，聚焦AI产品架构与研发；不蠢不蠢：数字人算法负责人，专注算法研发与优化。
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">我们的愿景</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  让AI成为直播与内容生态的核心驱动力，持续以开源与产品化推动场景落地，成为行业的先行者与引领者。
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">技术栈</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "PyTorch",
                  "FastAPI",
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "OpenAI",
                  "Claude",
                  "讯飞星火",
                  "通义千问",
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary text-muted-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">联系方式</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="https://github.com/Ikaros-521" target="_blank">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Github className="w-5 h-5" /> GitHub
                  </Button>
                </Link>
                <Link href="https://space.bilibili.com/3709626" target="_blank">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Video className="w-5 h-5" /> B站主页
                  </Button>
                </Link>
                <Link href="https://pd.qq.com/s/hff4u66vd" target="_blank">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <MessageCircle className="w-5 h-5" /> QQ频道
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground mt-4">商务咨询QQ: 327209194</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
