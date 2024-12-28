"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import { BrowserPreview } from "@/components/browser-preview"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '10s' }}
        />
      </div>

      <div className="container relative pt-12 md:pt-20 lg:pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr,600px] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
                <span className="text-sm font-medium text-indigo-700">
                  思维海洋
                </span>
              </motion.div>
              
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                >
                  <span className="block mt-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    开启新时代教育的
                    <br />
                    新章程
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto lg:mx-0"
                >
                  从AI大模型到智能学习空间，开启智慧教育新纪元。
                </motion.p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="https://a.siweihaiyang.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 rounded-md shadow-xl group w-full sm:w-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex items-center">
                  立即体验
                  <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
              </motion.a>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 w-full sm:w-auto"
              >
                免费演示
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block"
          >
            <BrowserPreview />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

