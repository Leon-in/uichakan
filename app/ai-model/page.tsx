import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function AiModelPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600">
                    思维海洋AI大模型
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    探索无限可能，体验下一代人工智能的强大能力
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-indigo-600 to-blue-600">
                    立即体验
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">了解更多</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
                  <Image
                    alt="AI Model Visualization"
                    className="object-cover"
                    fill
                    src="/placeholder.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">AI大模型特点</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "自然语言理解",
                  description: "先进的语言模型，准确理解用户意图，实现流畅的人机对话。"
                },
                {
                  title: "知识库集成",
                  description: "海量知识储备，快速精准响应各类查询，提供全面准确的信息。"
                },
                {
                  title: "多场景应用",
                  description: "适用于教育、商业、科研等多个领域，灵活应对不同需求。"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center mb-4">
                    <svg
                      className=" text-white w-6 h-6"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">体验AI大模型</h2>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  alt="AI Model Demo"
                  className="object-cover"
                  fill
                  src="/placeholder.svg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    观看演示视频
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

