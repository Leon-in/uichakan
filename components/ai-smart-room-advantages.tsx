"use client"

import { motion } from "framer-motion"
import { CheckCircle, Star, Zap, Rocket, Target, Users, RefreshCwIcon as Refresh, MapPin, TrendingUp } from 'lucide-react'

const advantages = [
  {
    icon: Star,
    title: "先进的教育理念",
    description: "融合前沿AI技术与教育服务，引领教育创新"
  },
  {
    icon: Zap,
    title: "灵活的课程设置",
    description: "根据市场需求灵活调整课程组合，满足多样化学习需求"
  },
  {
    icon: Users,
    title: "完善的师资培训",
    description: "持续提升教师专业水平，确保教学质量"
  },
  {
    icon: Rocket,
    title: "智能化的教学平台",
    description: "高效的教学管理工具，提升学习效果"
  },
  {
    icon: Target,
    title: "强大的市场支持",
    description: "全面的市场推广策略，助力品牌发展"
  },
  {
    icon: Refresh,
    title: "持续的技术升级",
    description: "保持教育技术前沿，不断优化学习体验"
  },
  {
    icon: MapPin,
    title: "区域独占权",
    description: "保障市场利益，避免同质化竞争"
  },
  {
    icon: TrendingUp,
    title: "多元化的盈利模式",
    description: "增加投资回报，实现可持续发展"
  }
]

export function AISmartRoomAdvantages() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          我们的优势
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <advantage.icon className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

