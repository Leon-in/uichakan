import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cpu, Layout } from 'lucide-react'

const features = [
  {
    title: "AI大模型",
    description: "强大的AI引擎，为教育场景提供智能支持",
    icon: Brain,
    items: ["自然语言理解", "知识图谱构建", "个性化推荐"]
  },
  {
    title: "AI学习机",
    description: "智能硬件设备，打造沉浸式学习体验",
    icon: Cpu,
    items: ["智能交互界面", "实时学习反馈", "多媒体课程内容"]
  },
  {
    title: "AI智习室",
    description: "智能化学习空间，提升学习效率",
    icon: Layout,
    items: ["环境智能控制", "多设备协同", "数据分析反馈"]
  }
]

export function Features() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <Badge className="rounded-full">产品特色</Badge>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          全方位的智能教育解决方案
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          从AI大模型到智能学习空间，我们提供完整的教育科技生态系统
        </p>
      </div>

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <svg
                      className=" h-4 w-4 !fill-primary"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.114 0L11 15.25Zm4.807-5.998a.75.75 0 0 0-1.114-1.004l1.114 1.004Zm-7.614 3l2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.364 2.5 4.25-4.75-1.114-1.004-4.25 4.75 1.114 1.004Z" />
                    </svg>
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

