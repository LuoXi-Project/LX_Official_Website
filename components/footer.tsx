import Image from "next/image"
import Link from "next/link"
import { Github, MessageCircle, Video } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="洛曦 logo"
                width={32}
                height={32}
                className="rounded-lg"
                priority
              />
              <span className="text-xl font-bold text-foreground">洛曦</span>
            </Link>
            <p className="text-muted-foreground text-sm">专注于AI技术创新</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">产品</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/Ikaros-521/AI-Vtuber"
                  className="hover:text-foreground transition-colors"
                >
                  AI Vtuber
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  洛曦AI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  实时语音数字人
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  直播弹幕助手
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">资源</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="https://space.bilibili.com/3709626" className="hover:text-foreground transition-colors">
                  视频教程
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Ikaros-521" className="hover:text-foreground transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://pd.qq.com/s/hff4u66vd" className="hover:text-foreground transition-colors">
                  QQ频道
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">联系我们</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Ikaros-521"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </Link>
              <Link
                href="https://pd.qq.com/s/hff4u66vd"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground" />
              </Link>
              <Link
                href="https://space.bilibili.com/3709626"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Video className="w-5 h-5 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 洛曦. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">QQ: 327209194</p>
        </div>
      </div>
    </footer>
  )
}
