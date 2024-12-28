"use client"

import { useEffect, useRef, useState, Fragment } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ChevronRight, Mail } from 'lucide-react'

const milestones = [
  {
    year: 2024,
    title: "AI智习室项目启动",
    description: "推出革命性的智能学习空间解决方案"
  }
]


function CountUpAnimation({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const inView = useInView(countRef)
  
  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(target.replace(/,/g, ""))
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [target, duration, inView])

  return <span ref={countRef}>{count.toLocaleString()}</span>
}

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://siweihaiyang-1327461466.cos.ap-guangzhou.myqcloud.com/官网学习机图片/hero_codeium_dream_bigger.jpg"
            alt="About Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative container px-4 text-center text-white"
          >
            <Badge 
              variant="outline" 
              className="mb-4 border-white/20 text-white backdrop-blur-sm"
            >
              关于我们
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              用科技改变教育
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-8">
              思维海洋致力于通过人工智能技术革新教育方式，
              为每一位学习者提供个性化的学习体验
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white backdrop-blur-sm hover:bg-white/20"
            >
              了解更多
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>


        {/* Mission Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  思维海洋致力于通过创新的人工智能技术，为每一位学习者提供个性化的教育解决方案。我们相信，科技的力量可以让教育变得更加公平、高效和有趣。
                </p>
                <p className="text-lg text-muted-foreground">
                  通过持续创新和深耕教育领域，我们希望能够帮助更多学生实现自己的学习目标，释放潜能，成就未来。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video rounded-xl overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50" ref={containerRef}>
          <div className="container px-4">
            <motion.div
              style={{ y, opacity }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">发展历程</h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-l-transparent"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <span className="text-sm text-primary font-semibold">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">加入我们</h2>
              <p className="text-lg text-muted-foreground mb-8">
                如果你也对教育科技充满热情，欢迎加入思维海洋，
                一起用科技的力量改变教育的未来。
              </p>
              <Button size="lg">
                查看职位空缺
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

