"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Github, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              产品
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              特性
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              价格
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              关于
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="https://github.com/Ikaros-521" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://pd.qq.com/s/hff4u66vd" target="_blank">
              <Button variant="ghost" size="icon">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">立即开始</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link href="#products" className="block text-muted-foreground hover:text-foreground">
              产品
            </Link>
            <Link href="#features" className="block text-muted-foreground hover:text-foreground">
              特性
            </Link>
            <Link href="#pricing" className="block text-muted-foreground hover:text-foreground">
              价格
            </Link>
            <Link href="/about" className="block text-muted-foreground hover:text-foreground">
              关于
            </Link>
            <Button className="w-full bg-primary text-primary-foreground">立即开始</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
