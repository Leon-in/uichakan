"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AiModelSection() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <section id="ai-model" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">思维海洋AI大模型</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              体验下一代人工智能，探索无限可能
            </p>
          </div>
          <Card className="w-full max-w-4xl mx-auto">
            <CardContent className="p-0">
              <Tabs defaultValue="chat" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="chat">在线体验</TabsTrigger>
                  <TabsTrigger value="features">功能特点</TabsTrigger>
                </TabsList>
                <TabsContent value="chat" className="p-4">
                  <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'h-[600px]'}`}>
                    <iframe 
                      src="https://a.siweihaiyang.cn" 
                      className="w-full h-full border-0"
                      title="思维海洋AI聊天"
                    />
                    <button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="absolute top-2 right-2 p-2 bg-white rounded-md shadow-sm"
                    >
                      {isFullscreen ? '退出全屏' : '全屏'}
                    </button>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="p-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="font-bold">自然语言理解</h3>
                      <p className="text-sm text-gray-500">
                        先进的语言模型，准确理解用户意图
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">知识库集成</h3>
                      <p className="text-sm text-gray-500">
                        海量知识储备，快速精准响应
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">多场景应用</h3>
                      <p className="text-sm text-gray-500">
                        教育、商业、科研等多领域支持
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">持续学习进化</h3>
                      <p className="text-sm text-gray-500">
                        模型不断优化，性能持续提升
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

