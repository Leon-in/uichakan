import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from "next/link"

const topics = [
  { title: "听力", description: "提高英语听力理解能力" },
  { title: "口语", description: "练习日常对话和公共演讲" },
  { title: "阅读", description: "增强阅读理解和分析能力" },
  { title: "写作", description: "掌握各类英语写作技巧" },
]

export default function EnglishSubjectPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-yellow-500 text-white" variant="secondary">英语</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">开启英语学习之旅</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  提升英语技能，拓展国际视野
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
              <Link href="/subjects/english/conversation">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  进入英语会话练习
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

