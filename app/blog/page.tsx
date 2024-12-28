"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Search } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "教育部发文推进教育新基建，AI教育迎来新机遇",
    excerpt: "教育部近日印发《关于推进教育新型基础设施建设构建高质量教育支撑体系的指导意见》，明确提出要推进人工智能、大数据等技术在教育领域的创新应用...",
    date: "2023-12-20",
    author: "思维海洋研究院",
    category: "政策解读",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 2,
    title: "2023年中国教育信息化发展报告：AI助教市场规模突破百亿",
    excerpt: "据最新研究报告显示，2023年中国AI教育市场规模达到123亿元，同比增长45.6%。AI助教、智能学习设备等产品正在改变传统教育模式...",
    date: "2023-12-15",
    author: "教育科技研究中心",
    category: "行业报告",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  思维海洋博客
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  探索教育科技前沿，洞察未来学习趋势
                </p>
              </motion.div>

              <div className="w-full max-w-2xl mx-auto mt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="搜索文章..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative aspect-video">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <Badge className="mb-2">{post.category}</Badge>
                        <h3 className="text-xl font-bold mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
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

