"use client"

import { motion } from "framer-motion"
import { Brain, Cpu, Layout, Users, TrendingUp, Shield } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "个性化学习方案",
    description: "AI技术为每个学生定制个性化的教学方案和辅导内容，提高学习效率。"
  },
  {
    icon: Layout,
    title: "智能学习空间",
    description: "根据学生的学习习惯和偏好调整学习环境，创造舒适的学习氛围。"
  },
  {
    icon: Users,
    title: "智能辅导服务",
    description: "提供及时的学习辅导，帮助学生克服学习困难，提升学习效果。"
  },
  {
    icon: Cpu,
    title: "教育资源整合",
    description: "整合丰富的教育资源，包括教学视频、互动软件和AI精准学等。"
  },
  {
    icon: TrendingUp,
    title: "数据分析与反馈",
    description: "分析学习数据，提供个性化的学习反馈和建议，优化学习方法。"
  },
  {
    icon: Shield,
    title: "学习监督与管理",
    description: "实时监控学习状态，确保学习效果，提供全方位的学习管理。"
  }
]

export function AISmartRoomFeatures() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
          AI智习室特点
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

