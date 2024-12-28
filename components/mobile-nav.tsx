"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  {
    title: "解决方案",
    href: "#",
    children: [
      { title: "AI大模型", href: "/ai-model" },
      { title: "AI学习机", href: "/ai-learning-machine" },
      { title: "AI智习室", href: "/solutions/smart-room" },
    ],
  },
  { title: "关于我们", href: "/about" },
  { title: "联系我们", href: "/contact" },
  { title: "博客", href: "/blog" },
]

export function MobileNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80">
        <SheetHeader>
          <SheetTitle>导航菜单</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-1">
          {navItems.map((item) => (
            <div key={item.title} className="space-y-1">
              {item.children ? (
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveDropdown(
                      activeDropdown === item.title ? null : item.title
                    )}
                    className="flex items-center justify-between w-full py-2 text-left"
                  >
                    {item.title}
                  </button>
                  {activeDropdown === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 hover:text-gray-900"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

