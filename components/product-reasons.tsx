"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    id: "content",
    title: "好内容",
    details: [
      "8000万精品题库",
      "50万分钟精品课程",
      "12000分钟知识点视频"
    ],
    color: "bg-gradient-to-br from-pink-50 to-rose-50",
    image: "https://siweihaiyang-1327461466.cos.ap-guangzhou.myqcloud.com/官网学习机图片/主图2改2.jpg"
  },
  {
    id: "quality",
    title: "强品质",
    details: [
      "11.6寸大屏幕",
      "整机管控应用管理",
      "多层护眼技术",
      "未来纸对眼屏",
      "专利超广角AR镜"
    ],
    color: "bg-gradient-to-br from-amber-50 to-yellow-50",
    image: "https://siweihaiyang-1327461466.cos.ap-guangzhou.myqcloud.com/官网学习机图片/主图3.jpg"
  },
  {
    id: "ai",
    title: "AI精准学",
    details: [
      "精准定位知识漏洞",
      "省妈神器作业批改",
      "AI双语作文批改",
      "AI错题本"
    ],
    color: "bg-gradient-to-br from-blue-50 to-cyan-50",
    image: "https://siweihaiyang-1327461466.cos.ap-guangzhou.myqcloud.com/官网学习机图片/主图4.jpg"
  },
  {
    id: "control",
    title: "强管控",
    details: [
      "实时查看孩子情况",
      "时长时段全管控",
      "应用管控 安全上网",
      "管控学习学情报告"
    ],
    color: "bg-gradient-to-br from-purple-50 to-pink-50",
    image: "https://siweihaiyang-1327461466.cos.ap-guangzhou.myqcloud.com/官网学习机图片/主图5改.jpg"
  }
]

export function ProductReasons() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          选择我们的4大理由
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason) => (
            <Card
              key={reason.id}
              className={cn(
                "group relative overflow-hidden transition-all duration-300",
                "hover:shadow-lg"
              )}
              onMouseEnter={() => setActiveId(reason.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <CardContent className="p-0">
                <div className="relative w-full h-[200px] md:h-[160px] lg:h-[180px]">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                
                <div className="p-6 relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={cn(
                      "absolute inset-0 opacity-0 transition-opacity duration-300",
                      reason.color,
                      activeId === reason.id && "opacity-100"
                    )}
                  />
                  
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                    
                    <AnimatePresence>
                      {activeId === reason.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="space-y-2">
                            {reason.details.map((detail, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-sm text-gray-600 flex items-center space-x-2"
                              >
                                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

