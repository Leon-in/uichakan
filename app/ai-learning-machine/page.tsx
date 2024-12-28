import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ProductReasons } from "@/components/product-reasons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const features = [
  {
    title: "专业好内容",
    description: "8000万精品题库，50万分钟精品课程，12000分钟知识点视频"
  },
  {
    title: "紧跟新课标",
    description: "全面覆盖各年级学科内容，紧跟教育部最新课标要求"
  },
  {
    title: "自研好方法",
    description: "基于AI技术的个性化学习方案，提供精准教学指导"
  }
]

export default function AiLearningMachinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                思维海洋AI学习机
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                专业好内容｜紧跟新课标｜自研好方法
              </p>
              <div className="grid gap-6 md:grid-cols-3 mt-12">
                {features.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Reasons */}
        <ProductReasons />

        {/* Additional Product Details */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Image
                src="https://siweihaiyang-1327461466.cos.ap-guangzhou.myqcloud.com/官网学习机图片/学习机新2改3.jpg"
                alt="AI学习机详细展示"
                width={1200}
                height={800}
                className="rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

