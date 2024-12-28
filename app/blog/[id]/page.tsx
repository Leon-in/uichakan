"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// 使用与 page.tsx 相同的 blogPosts 数据

export default function BlogPost({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])

  useEffect(() => {
    // 在实际应用中，这里会从API获取数据
    const currentPost = blogPosts.find(p => p.id === parseInt(params.id))
    setPost(currentPost)
    
    // 获取相关文章（同类别的其他文章）
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3)
      setRelatedPosts(related)
    }
  }, [params.id])

  if (!post) return null

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="relative">
          {/* Hero Section */}
          <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl"
                >
                  <Badge className="mb-4">{post.category}</Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-white/80">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="prose prose-lg max-w-none">
                  {/* 文章内容将从CMS获取，这里使用示例内容 */}
                  <p className="lead">{post.excerpt}</p>
                  <h2>引言</h2>
                  <p>
                    随着人工智能技术的���速发展，教育行业正在经历前所未有的变革。
                    AI技术不仅能够提供个性化的学习体验，还能够帮助教师更好地了解
                    学生的学习需求和进展。
                  </p>
                  <h2>AI教育的优势</h2>
                  <ul>
                    <li>个性化学习路径</li>
                    <li>实时反馈和评估</li>
                    <li>智能题库和资源推荐</li>
                    <li>多维度学情分析</li>
                  </ul>
                  <p>
                    在未来，AI技术将继续深化在教育领域的应用，为师生带来更多
                    可能性。我们期待看到更多创新的教育解决方案涌现。
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline">
                      <Tag className="w-4 h-4 mr-2" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Share & Actions */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      分享
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="w-4 h-4 mr-2" />
                      收藏
                    </Button>
                  </div>
                  <Link href="/blog">
                    <Button variant="ghost" size="sm">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      返回列表
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Sidebar */}
              <aside className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-4">相关文章</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                        <div className="group flex gap-4 items-start">
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

