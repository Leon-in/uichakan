import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from "next/link"

const topics = [
  { title: "代数", description: "掌握方程式和函数的奥秘" },
  { title: "几何", description: "探索空间和形状的规律" },
  { title: "概率统计", description: "理解数据分析和预测方法" },
  { title: "三角函数", description: "学习周期性函数及其应用" },
]

export default function MathSubjectPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-blue-500 text-white" variant="secondary">数学</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">数学的无限可能</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  探索数学世界，培养逻辑思维和问题解决能力
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
              <Link href="/subjects/math/practice">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  进入数学练习区
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

