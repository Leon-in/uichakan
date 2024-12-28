"use client"

import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { AISmartRoomFeatures } from "@/components/ai-smart-room-features"
import { AISmartRoomAdvantages } from "@/components/ai-smart-room-advantages"
import { AISmartRoomComparison } from "@/components/ai-smart-room-comparison"
import { AISmartRoomBusinessModel } from "@/components/ai-smart-room-business-model"
import { FranchiseApplication } from "@/components/franchise-application"
import { motion } from "framer-motion"

export default function AiSmartRoomPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-b from-cyan-50 to-white overflow-hidden">
          <motion.div 
            className="container px-4 md:px-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                    思维海洋AI智习室
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                    开启智慧教育新纪元，打造未来学习空间
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#franchise-application">
                    <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                      加盟咨询
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline">了解更多</Button>
                </div>
              </div>
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  alt="AI智习室展示"
                  className="object-cover rounded-lg shadow-2xl"
                  height={400}
                  width={600}
                  src="/placeholder.svg"
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 opacity-30 blur-3xl"></div>
        </section>

        <AISmartRoomFeatures />
        <AISmartRoomAdvantages />
        <AISmartRoomComparison />
        <AISmartRoomBusinessModel />

        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">3D虚拟展示</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://vr.justeasy.cn/view/p1y7254971w96866-1725729108.html"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center mt-6 text-gray-600">
              通过3D虚拟展示，亲身体验AI智习室的先进设施和智能化学习环境
            </p>
          </div>
        </section>

        <FranchiseApplication />
      </main>
      <Footer />
    </div>
  )
}

