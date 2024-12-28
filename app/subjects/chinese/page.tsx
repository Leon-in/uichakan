import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from "next/link"

const topics = [
  { title: "现代文阅读", description: "提升文本理解和分析能力" },
  { title: "古代诗文", description: "领略中国古典文学的魅力" },
  { title: "写作技巧", description: "掌握各类文体的写作方法" },
  { title: "语言知识", description: "巩固语法、修辞等基础知识" },
]

export default function ChineseSubjectPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="m-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回
        </Button>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-red-500 text-white" variant="secondary">语文</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">探索语言的魅力</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  通过阅读、写作和语言知识的学习，提升您的语文素养
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {topics.map((topic, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 mb-4">{topic.description}</p>
                    <Button variant="outline">
                      开始学习
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/subjects/chinese/resources">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                  浏览更多学习资源
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

