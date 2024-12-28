import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FlaskRoundIcon as Flask, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from "next/link"

const topics = [
  { title: "物理", description: "探索自然界的基本规律" },
  { title: "化学", description: "了解物质的组成、性质和变化" },
  { title: "生物", description: "研究生命的奥秘和生态系统" },
  { title: "地球科学", description: "认识我们的星球和宇宙" },
]

export default function ScienceSubjectPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-green-500 text-white" variant="secondary">科学</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">探索科学世界</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  激发科学探索精神，培养批判性思维
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
              <Link href="/subjects/science/experiments">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  查看科学实验项目
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

