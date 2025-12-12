import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Star } from "lucide-react"

const products = [
  {
    slug: "luoxi-ai",
    name: "洛曦AI",
    description: "AI无人直播系统，支持多用户登录、多配置运行、一台电脑多平台直播",
    price: "¥150/月 ¥1000/年",
    badge: "企业版",
    stars: 5,
    features: ["用户管理", "配置管理", "多平台支持"],
    link: "https://pd.qq.com/s/f247aeq3j",
    videoLink: "https://space.bilibili.com/3709626/lists/4391504",
    deployLink: null,
  },
  {
    slug: "ai-vtuber",
    name: "AI Vtuber",
    description: "结合最先进技术的虚拟AI主播，支持ChatGPT、Claude等20+大语言模型，本地云端双部署",
    price: "开源免费",
    badge: "热门",
    stars: 5,
    features: ["多模型支持", "多模态识别", "本地部署"],
    link: "https://github.com/Ikaros-521/AI-Vtuber",
    videoLink: "https://space.bilibili.com/3709626/lists/1422512",
    deployLink: null,
  },
  {
    slug: "digital-human",
    name: "实时语音数字人",
    description: "集成ASR语音识别、LLM大模型、TTS语音合成，Wav2Lip 256高清数字人实时生成",
    price: "¥100/月 ¥1000/年 源码¥5000",
    badge: "高清",
    stars: 5,
    features: ["实时语音", "高清数字人", "本地部署", "云部署"],
    link: "https://space.bilibili.com/3709626",
    videoLink: "https://www.bilibili.com/video/BV1iyndzpEVz",
    deployLink: "https://www.compshare.cn/images/Rihotreq9MRL?referral_code=CpxneZgXby6EOmUwLGr7hQ",
  },
  {
    slug: "danmu-assistant",
    name: "直播弹幕助手",
    description: "自动化弹幕发送，支持定时任务和关键词触发，广泛适用于各种聊天窗口",
    price: "¥5",
    badge: "轻量",
    stars: 3,
    features: ["自动发送", "定时任务", "广泛适用"],
    link: "https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1&page=detailuniversal_detail&saleType=10&itemsId=11995985&loadingShow=1&noTitleBar=1&msource=merchant_share",
    videoLink: "https://www.bilibili.com/video/BV11Ry5YBEUo/",
    deployLink: null,
  },
  {
    slug: "travel",
    name: "洛曦云旅",
    description: "智能旅游攻略生成器，基于AI的智能旅游攻略生成系统，提供个性化旅行方案",
    price: "免费开源",
    badge: "新品",
    stars: 5,
    features: ["AI攻略", "个性化", "多平台"],
    link: "https://github.com/Ikaros-521/LX_SkyRoam_Agent",
    videoLink: "https://www.bilibili.com/video/BV1XtCdBXEbf",
    deployLink: null,
  },
  {
    slug: "printer",
    name: "直播辅助打印机",
    description: "入场欢迎、礼物答谢、关键词话术触发，支持变量替换，Windows整合包一键运行",
    price: "¥200/年",
    badge: "实用",
    stars: 3,
    features: ["入场欢迎", "礼物答谢", "关键词触发"],
    link: "https://space.bilibili.com/3709626",
    videoLink: null,
    deployLink: null,
  },
  {
    slug: "bot",
    name: "洛曦Bot",
    description: "基于Nonebot2 OneBot V11开发的QQ机器人，内置多种插件满足基本需求",
    price: "免费开源",
    badge: "开源",
    stars: 4,
    features: ["QQ机器人", "多插件", "视频教学"],
    link: "https://github.com/Ikaros-521/LX_Bot",
    videoLink: "https://space.bilibili.com/3709626/channel/collectiondetail?sid=850321",
    deployLink: null,
  },
  {
    slug: "captions",
    name: "洛曦Web字幕打印机",
    description: "通过打字方式在Web实现动态字幕显示效果，支持HTTP API协同工作",
    price: "免费开源",
    badge: "开源",
    stars: 3,
    features: ["动态字幕", "HTTP API", "多平台"],
    link: "https://github.com/Ikaros-521/captions_printer",
    videoLink: "https://www.bilibili.com/video/BV13h4y1e7z8/",
    deployLink: null,
  },
  {
    slug: "live2d",
    name: "实时语音Live2D",
    description: "实时语音驱动Live2D模型，支持自定义模型更换，局域网内直接访问对话",
    price: "源码¥1000",
    badge: "源码",
    stars: 4,
    features: ["Live2D", "自定义模型", "局域网访问"],
    link: "https://space.bilibili.com/3709626",
    videoLink: null,
    deployLink: null,
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">产品矩阵</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">从虚拟主播到直播工具，全方位满足您的直播需求</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge
                  variant="secondary"
                  className={`${
                    product.badge === "热门"
                      ? "bg-primary/20 text-primary"
                      : product.badge === "企业版"
                        ? "bg-accent/20 text-accent"
                        : product.badge === "新品"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {product.badge}
                </Badge>
                <div className="flex gap-0.5">
                  {Array.from({ length: product.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.map((feature, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="text-lg font-bold text-primary mb-4">{product.price}</div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                <Link href={`/products#${product.slug}`} className="flex-1 min-w-[120px]">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-1">
                    了解更多 <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
                {product.link && (
                  <Link href={product.link} target="_blank">
                    <Button variant="outline" size="sm" className="border-border hover:bg-secondary bg-transparent">
                      官网/下载
                    </Button>
                  </Link>
                )}
                {product.videoLink && (
                  <Link href={product.videoLink} target="_blank">
                    <Button variant="ghost" size="sm" className="border-border hover:bg-secondary bg-transparent">
                      教程
                    </Button>
                  </Link>
                )}
                {product.deployLink && (
                  <Link href={product.deployLink} target="_blank">
                    <Button variant="ghost" size="sm" className="border-border hover:bg-secondary bg-transparent">
                      部署
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
