import { Bot, Cpu, Globe, Zap, Shield, Layers } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "多模型支持",
    description: "支持ChatGPT、Claude、讯飞星火、通义千问等20+主流大语言模型",
  },
  {
    icon: Cpu,
    title: "本地部署",
    description: "支持本地运行和云端部署，保护数据隐私，降低使用成本",
  },
  {
    icon: Globe,
    title: "多平台直播",
    description: "支持B站、抖音、快手等主流直播平台，一套系统多平台运营",
  },
  {
    icon: Zap,
    title: "实时响应",
    description: "毫秒级响应速度，流畅的实时语音对话和数字人驱动",
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "企业级安全保障，稳定运行，7×24小时不间断服务",
  },
  {
    icon: Layers,
    title: "模块化设计",
    description: "灵活的模块化架构，可根据需求自由组合功能模块",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">为什么选择洛曦AI</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            我们提供业界领先的AI直播解决方案，助力您的直播事业腾飞
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
