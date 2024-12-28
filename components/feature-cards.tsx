"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, UserSquare2, GraduationCap, MessageSquareShare, Users, ArrowUpCircle, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "AI智能助教",
    description: "24小时在线答疑解惑，智能分析学习进度",
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10"
  },
  {
    icon: UserSquare2,
    title: "个性化学习",
    description: "基于AI算法，为每个学生定制专属学习方案",
    gradient: "from-purple-500/10 via-pink-500/10 to-purple-500/10"
  },
  {
    icon: GraduationCap,
    title: "全学科覆盖",
    description: "涵盖主要学科内容，紧跟教育部最新课标",
    gradient: "from-amber-500/10 via-orange-500/10 to-amber-500/10"
  },
  {
    icon: MessageSquareShare,
    title: "实时互动",
    description: "课堂互动、作业批改、学情分析一体化",
    gradient: "from-green-500/10 via-emerald-500/10 to-green-500/10"
  },
  {
    icon: Users,
    title: "家校协同",
    description: "家长可实时了解学习情况，教师可远程指导",
    gradient: "from-rose-500/10 via-pink-500/10 to-rose-500/10"
  },
  {
    icon: ArrowUpCircle,
    title: "持续升级",
    description: "系统定期更新，内容持续优化",
    gradient: "from-indigo-500/10 via-violet-500/10 to-indigo-500/10"
  }
]

export function FeatureCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="container px-4 md:px-6">
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
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 p-6 shadow-lg transition-all duration-300">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 inline-block"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/80 to-white/50 flex items-center justify-center shadow-lg">
                      <feature.icon className="w-6 h-6 text-gray-800" />
                    </div>
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-bold mb-2 text-gray-800"
                    animate={{
                      color: hoveredIndex === index ? "#3B82F6" : "#1F2937",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4"
                      >
                        <Button 
                          variant="ghost" 
                          className="p-0 text-blue-600 hover:text-blue-700"
                        >
                          了解更多
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
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

