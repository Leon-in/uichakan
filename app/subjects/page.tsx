"use client"

import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Calculator, FlaskRoundIcon as Flask, Music, Globe, Palette, BookMarked } from 'lucide-react'
import Link from "next/link"

const subjects = [
  {
    icon: BookOpen,
    title: "语文",
    description: "培养语言表达和文学素养",
    color: "from-red-500/10 to-pink-500/10",
    href: "/subjects/chinese"
  },
  {
    icon: Calculator,
    title: "数学",
    description: "提升逻辑思维和解题能力",
    color: "from-blue-500/10 to-cyan-500/10",
    href: "/subjects/math"
  },
  {
    icon: Globe,
    title: "英语",
    description: "掌握国际交流的重要工具",
    color: "from-yellow-500/10 to-orange-500/10",
    href: "/subjects/english"
  },
  {
    icon: Flask,
    title: "科学",
    description: "探索自然奥秘和科学规律",
    color: "from-green-500/10 to-emerald-500/10",
    href: "/subjects/science"
  },
  {
    icon: Code,
    title: "编程",
    description: "培养计算思维和创新能力",
    color: "from-purple-500/10 to-indigo-500/10",
    href: "/subjects/coding"
  },
  {
    icon: Palette,
    title: "美术",
    description: "发展艺术素养和创造力",
    color: "from-pink-500/10 to-rose-500/10",
    href: "/subjects/art"
  },
  {
    icon: Music,
    title: "音乐",
    description: "培养音乐素养和艺术感知",
    color: "from-indigo-500/10 to-blue-500/10",
    href: "/subjects/music"
  },
  {
    icon: BookMarked,
    title: "综合素养",
    description: "全面提升核心素养",
    color: "from-cyan-500/10 to-teal-500/10",
    href: "/subjects/comprehensive"
  }
]

export default function SubjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">全学科覆盖</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">探索您的学习之旅</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  选择您感兴趣的学科，开启智能学习之旅
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={subject.href}>
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4`}>
                          <subject.icon className="w-6 h-6" />
                        </div>
                        <CardHeader className="p-0">
                          <CardTitle className="text-xl mb-2">{subject.title}</CardTitle>
                        </CardHeader>
                        <p className="text-sm text-gray-500">{subject.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

