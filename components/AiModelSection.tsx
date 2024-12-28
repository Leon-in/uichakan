"use client"
import { useState } from 'react'

export default function AiModelSection() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <section id="ai-model" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">思维海洋AI大模型</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'h-[600px]'}`}>
            <iframe 
              src="https://a.siweihaiyang.cn" 
              className="w-full h-full border-0"
              title="思维海洋AI聊天"
            />
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isFullscreen ? '退出全屏' : '全屏'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

