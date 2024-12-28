"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const comparisonData = [
  { 
    aspect: "学习形式",
    traditional: "老师教学生听",
    aiSmartRoom: "督习老师给任务自主学习",
    category: "教学方式"
  },
  {
    aspect: "学习特点",
    traditional: "要我学",
    aiSmartRoom: "我要学",
    category: "教学方式"
  },
  {
    aspect: "学习内容",
    traditional: "按学习进度和计划",
    aiSmartRoom: "根据个体需要精准选择内容",
    category: "教学方式"
  },
  {
    aspect: "学习用时",
    traditional: "长",
    aiSmartRoom: "短",
    category: "效率"
  },
  {
    aspect: "个性化需求",
    traditional: "无法满足",
    aiSmartRoom: "完全个性化",
    category: "个性化"
  },
  {
    aspect: "拔高需求",
    traditional: "有一定作用",
    aiSmartRoom: "完全适用",
    category: "适应性"
  },
  {
    aspect: "补弱需求",
    traditional: "有一定作用",
    aiSmartRoom: "完全适用",
    category: "适应性"
  },
  {
    aspect: "课堂气氛",
    traditional: "严谨",
    aiSmartRoom: "自由",
    category: "学习环境"
  },
  {
    aspect: "学习组织",
    traditional: "学习小组式",
    aiSmartRoom: "学习小组式",
    category: "学习环境"
  },
  {
    aspect: "学习管理",
    traditional: "一班一面",
    aiSmartRoom: "千人千面",
    category: "管理方式"
  },
  {
    aspect: "学习鼓励",
    traditional: "无法次次精准到人",
    aiSmartRoom: "次次激励到每一个人",
    category: "反馈机制"
  },
  {
    aspect: "学习监督",
    traditional: "只能监督到捣乱课堂的",
    aiSmartRoom: "时时监督到每一个人",
    category: "监督方式"
  },
  {
    aspect: "学习反馈",
    traditional: "无法次次给每一位家长反馈",
    aiSmartRoom: "次次给每一位家长全方位反馈",
    category: "反馈机制"
  },
  {
    aspect: "学习获得感",
    traditional: "模糊",
    aiSmartRoom: "清晰",
    category: "学习体验"
  },
  {
    aspect: "学习提升",
    traditional: "当时看不见",
    aiSmartRoom: "次次看得见",
    category: "学习效果"
  },
  {
    aspect: "学习效率",
    traditional: "一般",
    aiSmartRoom: "显著",
    category: "效率"
  },
  {
    aspect: "性价比",
    traditional: "一般",
    aiSmartRoom: "非常高",
    category: "价值"
  }
]

const categories = Array.from(new Set(comparisonData.map(item => item.category)))

export function AISmartRoomComparison() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              传统课堂 VS 思维海洋AI督学
            </h2>
            <p className="mt-4 text-gray-500">
              深度对比分析，了解AI督学的革新优势
            </p>
          </motion.div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="mb-6">
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-1 text-lg font-semibold bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100"
                  >
                    {category}
                  </Badge>
                </div>

                <div className="grid gap-6">
                  {comparisonData
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <motion.div
                        key={item.aspect}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="grid md:grid-cols-[1fr,2fr,2fr] gap-4 p-6">
                            <div className="flex items-center">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {item.aspect}
                              </h3>
                            </div>
                            
                            <div className="relative">
                              <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                              <div className="relative p-4 bg-red-50/50 rounded-lg">
                                <p className="text-gray-800">{item.traditional}</p>
                              </div>
                            </div>

                            <div className="relative">
                              <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                              <div className="relative p-4 bg-green-50/50 rounded-lg">
                                <p className="text-gray-800">{item.aiSmartRoom}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600">
              通过AI技术赋能，思维海洋AI督学为学生提供更高效、更个性化的学习体验
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

