import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, PlayCircle } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "ai-vtuber",
    name: "AI Vtuber",
    badge: "热门",
    price: "开源免费",
    tagline: "虚拟AI主播，支持20+大模型，本地/云端双模运行",
    points: ["多模型联动：ChatGPT、Claude、通义等", "多模态识别：屏幕/图像理解讲解", "本地/云端：随时切换部署形态"],
    link: "https://github.com/Ikaros-521/AI-Vtuber",
    video: "https://space.bilibili.com/3709626/lists/1422512",
    gradient: "from-purple-600/60 via-indigo-600/60 to-blue-600/60",
  },
  {
    id: "luoxi-ai",
    name: "洛曦AI",
    badge: "企业版",
    price: "¥150/月起",
    tagline: "AI无人直播系统，多账号多配置，一台电脑多平台",
    points: ["多用户多配置：同时多场景直播", "AI集成：对接主流LLM与TTS", "跨平台：Windows / Linux / macOS"],
    link: "https://pd.qq.com/s/f247aeq3j",
    video: "https://space.bilibili.com/3709626/lists/4391504",
    gradient: "from-amber-500/60 via-orange-500/60 to-red-500/60",
  },
  {
    id: "digital-human",
    name: "实时语音数字人",
    badge: "高清",
    price: "¥1000/年",
    tagline: "ASR + LLM + TTS + Wav2Lip 高清数字人，实时语音驱动",
    points: ["本地ASR：低延迟语音识别", "高清口型：Wav2Lip 256", "云部署方案：现成镜像快速上线"],
    link: "https://space.bilibili.com/3709626",
    video: "https://www.compshare.cn/images/Rihotreq9MRL?referral_code=CpxneZgXby6EOmUwLGr7hQ",
    gradient: "from-cyan-500/60 via-teal-500/60 to-emerald-500/60",
  },
  {
    id: "live2d",
    name: "实时语音 Live2D",
    badge: "源码",
    price: "¥1000",
    tagline: "实时语音驱动 Live2D，支持自定义模型替换与局域网访问",
    points: ["Live2D 驱动：高自由度模型替换", "语音链路：ASR + LLM + TTS", "局域网访问：同网段直接对话"],
    link: "https://space.bilibili.com/3709626",
    video: null,
    gradient: "from-pink-500/60 via-fuchsia-500/60 to-purple-500/60",
  },
  {
    id: "danmu-assistant",
    name: "直播弹幕助手",
    badge: "轻量",
    price: "¥5",
    tagline: "自动化弹幕发送，定时/关键词触发，支持多种窗口",
    points: ["定时任务：按序或随机读取文本", "关键词触发：变量替换话术", "兼容性：任意可粘贴发送的窗口"],
    link: "https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1&page=detailuniversal_detail&saleType=10&itemsId=11995985&loadingShow=1&noTitleBar=1&msource=merchant_share",
    video: null,
    gradient: "from-sky-500/60 via-blue-500/60 to-indigo-500/60",
  },
  {
    id: "printer",
    name: "直播辅助打印机",
    badge: "实用",
    price: "¥200/年",
    tagline: "入场欢迎、礼物答谢、关键词话术，Windows 一键运行",
    points: ["答谢话术：入场/礼物实时打印", "关键词触发：自定义变量替换", "整合包：Windows 一键运行"],
    link: "https://space.bilibili.com/3709626",
    video: null,
    gradient: "from-lime-500/60 via-green-500/60 to-emerald-500/60",
  },
  {
    id: "bot",
    name: "洛曦Bot",
    badge: "开源",
    price: "免费开源",
    tagline: "基于 Nonebot2 / OneBot V11 的 QQ 机器人，内置多插件",
    points: ["多插件：满足日常需求", "教程丰富：视频教学上手快", "跨平台：Windows / Linux / macOS"],
    link: "https://github.com/Ikaros-521/LX_Bot",
    video: "https://space.bilibili.com/3709626/channel/collectiondetail?sid=850321",
    gradient: "from-slate-500/60 via-gray-600/60 to-zinc-700/60",
  },
  {
    id: "captions",
    name: "洛曦 Web 字幕打印机",
    badge: "开源",
    price: "免费开源",
    tagline: "打字式动态字幕，支持 HTTP API 协作，多平台可用",
    points: ["HTTP API：可被其他程序驱动", "动态字幕：键入即显", "多平台：Windows / Linux / macOS"],
    link: "https://github.com/Ikaros-521/captions_printer",
    video: "https://www.bilibili.com/video/BV13h4y1e7z8/",
    gradient: "from-orange-500/60 via-amber-500/60 to-yellow-400/60",
  },
  {
    id: "travel",
    name: "洛曦云旅",
    badge: "新品",
    price: "免费开源",
    tagline: "AI 旅行攻略生成器，个性化行程规划，跨平台支持",
    points: ["AI定制行程：一键生成攻略", "多平台：Windows / Linux / macOS", "开源：社区共建"],
    link: "https://github.com/Ikaros-521/LX_SkyRoam_Agent",
    video: "https://www.bilibili.com/video/BV1XtCdBXEbf",
    gradient: "from-indigo-500/60 via-cyan-500/60 to-teal-500/60",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge className="bg-primary/20 text-primary mb-4">产品矩阵</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">全面、炫酷的产品展示</h1>
            <p className="text-lg text-muted-foreground">
              纵向滚动切换，每屏聚焦一个产品，支持链接与视频教程，便于快速了解与决策。
            </p>
          </div>
        </div>

        {/* 使用整页滚动，每个产品占一屏，避免嵌套滚动 */}
        <div className="snap-y snap-mandatory">
          {products.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className={`relative min-h-screen snap-start flex items-center justify-center px-4 sm:px-6 lg:px-12`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} blur-[60px] opacity-60`}
                aria-hidden
              />
              <div className="absolute inset-0 bg-card/70 backdrop-blur-2xl border-t border-border" aria-hidden />

              <div className="relative max-w-5xl w-full grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="secondary"
                      className={
                        product.badge === "热门"
                          ? "bg-primary/20 text-primary"
                          : product.badge === "企业版"
                            ? "bg-amber-200/40 text-amber-700"
                            : product.badge === "新品"
                              ? "bg-emerald-200/40 text-emerald-700"
                              : "bg-secondary text-muted-foreground"
                      }
                    >
                      {product.badge}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{product.price}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{product.name}</h2>
                  <p className="text-lg text-muted-foreground">{product.tagline}</p>

                  <div className="space-y-2">
                    {product.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 p-3 rounded-xl bg-background/60 border border-border/60"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2 flex-wrap">
                    <Link href={product.link} target="_blank">
                      <Button className="gap-2">
                        了解更多 <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    {product.video && (
                      <Link href={product.video} target="_blank">
                        <Button variant="outline" className="gap-2 border-border bg-transparent">
                          教程 / 演示 <PlayCircle className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-background/60 to-background/20 shadow-2xl">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-56 w-56 rounded-full bg-background/40 blur-3xl" aria-hidden />
                    </div>
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div className="p-6 text-center space-y-3">
                        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">LX</p>
                        <h3 className="text-2xl font-semibold text-foreground">Product Spotlight</h3>
                        <p className="text-muted-foreground">
                          每屏聚焦一个产品，滚动以浏览下一款。颜色随产品变化，保持沉浸与炫酷动效。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

