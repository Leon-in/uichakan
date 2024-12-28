"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Loader2 } from 'lucide-react'

export function AiSmartRoom() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI智习室
        </motion.h2>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 min-h-[400px]"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <Loader2 className="w-8 h-8 animate-spin text-indigo-400" />
            </div>
          )}
          
          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-4">
              <div className="text-gray-400 mb-4">
                暂时无法加载3D展示
              </div>
              <button
                onClick={() => {
                  setHasError(false)
                  setIsLoading(true)
                }}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                重试
              </button>
            </div>
          ) : (
            <iframe
              src="https://vr.justeasy.cn/view/p1y7254971w96866-1725729108.html"
              className="w-full h-full border-0"
              title="AI智习室3D展示"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
          
          <motion.button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className={`absolute top-4 right-4 px-4 py-2 bg-white rounded-md shadow-lg text-sm font-medium transition-all hover:bg-gray-50 ${
              isFullscreen ? 'fixed z-50' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isFullscreen ? '退出全屏' : '全屏'}
          </motion.button>
        </motion.div>
        
        {isFullscreen && !hasError && (
          <motion.div 
            className="fixed inset-0 bg-white z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <iframe
              src="https://vr.justeasy.cn/view/p1y7254971w96866-1725729108.html"
              className="w-full h-full border-0"
              title="AI智习室3D展示全屏"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

