"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function BrowserWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      <div 
        className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-50 to-white 
        border-b border-gray-200/50 backdrop-blur-xl flex items-center px-4 gap-4"
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-full bg-gray-100/80 text-sm text-gray-500 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            siweihaiyang.com
          </div>
        </div>
      </div>
      <div className="relative mt-12 w-full h-[calc(100%-3rem)]">
        <Image
          src="/placeholder.svg?height=800&width=600"
          alt="AI学习平台界面"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1200px) 100vw, 50vw"
        />
      </div>
      <div className="absolute inset-0 border border-gray-200/50 rounded-2xl pointer-events-none" />
      <div className="absolute inset-0 shadow-2xl shadow-purple-500/10 rounded-2xl pointer-events-none" />
    </motion.div>
  )
}

