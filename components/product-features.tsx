"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const features = [
  {
    id: "content",
    title: "好内容",
    items: [
      "8000万精品题库",
      "50万分钟精品课程",
      "12000分钟知识点视频"
    ],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "quality",
    title: "强品质",
    items: [
      "11.6寸大屏幕",
      "多层护眼技术",
      "专利超广角AR镜"
    ],
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    id: "ai",
    title: "AI精准学",
    items: [
      "精准定位知识漏洞",
      "AI双语作文批改",
      "AI错题本"
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "control",
    title: "强管控",
    items: [
      "实时查看孩子情况",
      "应用管控 安全上网",
      "管控学习学情报告"
    ],
    color: "from-purple-500/20 to-pink-500/20"
  }
]

export function ProductFeatures() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          选择我们的4大理由
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="relative group cursor-pointer"
              onHoverStart={() => setActiveFeature(feature.id)}
              onHoverEnd={() => setActiveFeature(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`
                absolute inset-0 rounded-2xl 
                bg-gradient-to-br ${feature.color}
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              `} />
              
              <div className="relative p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                <div className="aspect-[4/3] relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://siweihaiyang-1327461466.cos.ap-guangzhou.myqcloud.com/官网学习机图片/学习机新2改3.jpg"
                    alt={feature.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                
                <AnimatePresence>
                  {activeFeature === feature.id && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {feature.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-sm text-gray-600"
                        >
                          • {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

