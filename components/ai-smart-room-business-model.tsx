"use client"

import { motion } from "framer-motion"
import { DollarSign, Users, Briefcase, TrendingUp } from 'lucide-react'

const businessModelItems = [
  {
    icon: DollarSign,
    title: "学习平板销售",
    description: "从思维海洋品牌方批量购入学习平板等硬件产品，以零售价格销售给家长，赚取差价。"
  },
  {
    icon: Users,
    title: "督学费用",
    description: "提供督学服务，现场有老师负责监督学生学习，并根据学习数据制定个性化学习计划。"
  },
  {
    icon: Briefcase,
    title: "订阅制收费",
    description: "提供会员服务，根据学生的使用时长和科目收取定期的会员费用。"
  },
  {
    icon: TrendingUp,
    title: "体验制收费",
    description: "作为学习设备的体验中心，促进产品销售，同时提供学习中心服务和长期订阅。"
  }
]

export function AISmartRoomBusinessModel() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI智习室商业模式
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {businessModelItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <item.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

