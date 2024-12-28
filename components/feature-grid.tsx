"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Sparkles, Users, Clock, School, ArrowUpCircle } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "AI智能助教",
    description: "24小时在线答疑解惑，智能分析学习进度",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Sparkles,
    title: "个性化学习",
    description: "基于AI算法，为每个学生定制专属学习方案",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Users,
    title: "全学科覆盖",
    description: "涵盖主要学科内容，紧跟教育部最新课标",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: Clock,
    title: "实时互动",
    description: "课堂互动、作业批改、学情分析一体化",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: School,
    title: "家校协同",
    description: "家长可实时了解学习情况，教师可远程指导",
    gradient: "from-red-500/20 to-rose-500/20"
  },
  {
    icon: ArrowUpCircle,
    title: "持续升级",
    description: "系统定期更新，内容持续优化",
    gradient: "from-indigo-500/20 to-violet-500/20"
  }
]

export function FeatureGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-white/80 backdrop-blur-sm">
      <div className="container px-4 md:px-6 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200/50">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="absolute top-0 left-0 w-full h-full bg-blue-500/10 rounded-xl blur-xl"
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.h3 
                    className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
                    animate={{
                      backgroundPosition: hoveredIndex === index ? ["0% 0%", "100% 100%"] : "0% 0%",
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    className="overflow-hidden mt-4"
                  >
                    <Button 
                      variant="ghost" 
                      className="text-blue-600 p-0 hover:text-blue-700"
                    >
                      了解更多
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            了解更多详情
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

