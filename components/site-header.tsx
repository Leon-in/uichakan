"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const solutions = [
  {
    title: "AI大模型",
    href: "/ai-model",
    description: "体验下一代人工智能，探索无限可能"
  },
  {
    title: "AI学习机",
    href: "/ai-learning-machine",
    description: "智能学习助手，个性化教育解决方案"
  },
  {
    title: "AI智习室",
    href: "/solutions/smart-room",
    description: "打造智能化学习空间，提升学习效率"
  }
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.div
        className={`bg-white/80 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                思维海洋
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <NavigationMenu>
                <NavigationMenuList className="space-x-8">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="bg-transparent hover:bg-gray-50 px-4"
                    >
                      解决方案
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {solutions.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="bg-transparent hover:bg-gray-50 px-4">
                        关于我们
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="bg-transparent hover:bg-gray-50 px-4">
                        联系我们
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink className="bg-transparent hover:bg-gray-50 px-4">
                        博客
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                  登录
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90">
                  免费体验
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-xl font-bold">菜单</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-2 px-4">
                  <div className="space-y-2">
                    <div className="font-medium px-2 py-1">解决方案</div>
                    {solutions.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-2 py-1 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <Link href="/about" className="block px-2 py-1 hover:text-gray-900">
                    关于我们
                  </Link>
                  <Link href="/contact" className="block px-2 py-1 hover:text-gray-900">
                    联系我们
                  </Link>
                  <Link href="/blog" className="block px-2 py-1 hover:text-gray-900">
                    博客
                  </Link>
                </nav>
              </div>

              <div className="p-4 border-t">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full">
                    登录
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90">
                    免费体验
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

