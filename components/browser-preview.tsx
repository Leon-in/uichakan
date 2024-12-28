"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, Minimize2, MessageSquare, Grid, GraduationCap, User, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Link from 'next/link'

const educationSuggestions = [
  {
    icon: "🎓",
    title: "中国古代四大发明",
    description: "探索中国传统科技成就",
    color: "from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100"
  },
  {
    icon: "🧮",
    title: "数学思维训练",
    description: "培养逻辑推理能力",
    color: "from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100"
  },
  {
    icon: "🔬",
    title: "科学实验探究",
    description: "激发科学探索精神",
    color: "from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100"
  },
  {
    icon: "📝",
    title: "作文写作指导",
    description: "提升语言表达能力",
    color: "from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100"
  }
]

const navItems = [
  { icon: MessageSquare, label: "智能对话", href: "#" },
  { icon: Grid, label: "学科导航", href: "/subjects" },
  { icon: GraduationCap, label: "学习报告", href: "/report" },
  { icon: User, label: "个人中心", href: "/profile" }
]

export function BrowserPreview() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [messageCount, setMessageCount] = useState(0)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Array<{type: 'user' | 'assistant', content: string}>>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Toggle fullscreen for the chat container only
  const toggleFullscreen = async () => {
    if (!chatContainerRef.current) return
    
    try {
      if (!document.fullscreenElement) {
        await chatContainerRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error("Error toggling fullscreen:", err)
    }
  }

  // Update fullscreen state when exiting via Esc key
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Handle message submission
  const handleSubmitMessage = () => {
    if (messageCount >= 5) {
      setShowLoginDialog(true)
      return
    }
    if (inputValue.trim()) {
      setMessages(prev => [...prev, { type: 'user', content: inputValue }])
      setMessageCount(prev => prev + 1)
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'assistant',
          content: "作为您的智能学习助手，我很高兴为您提供帮助。让我们一起探索知识的海洋！"
        }])
      }, 1000)
      
      setInputValue("")
    }
  }

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`
      relative w-full max-w-[90vw] md:max-w-[600px] lg:max-w-[800px] mx-auto
      transition-all duration-500 ease-in-out
    `}>
      <motion.div
        ref={chatContainerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-xl overflow-hidden shadow-2xl"
      >
        {/* Browser toolbar */}
        <div className="relative h-12 flex items-center px-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
          <div className="flex gap-2 absolute left-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 flex items-center gap-2 text-sm border border-blue-100/50">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              思维海洋AI教育助手
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-gray-500 hover:text-gray-700"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          </Button>
        </div>

        {/* Content area */}
        <div className={`${
          isFullscreen ? 'h-[calc(100vh-3rem)]' : 'h-[600px] md:h-[700px]'
        } relative bg-gradient-to-b from-white to-blue-50/30 overflow-hidden`}>
          <AnimatePresence>
            {isLoading ? (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-white"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse" />
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin border-t-transparent" />
                  </div>
                  <p className="text-gray-500 animate-pulse">正在启动AI教育助手...</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col p-4"
              >

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
                  {messages.length === 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {educationSuggestions.map((suggestion, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`
                            p-4 rounded-xl cursor-pointer
                            bg-gradient-to-br ${suggestion.color}
                            hover:scale-[1.02] transition-all duration-300
                            border border-gray-100 shadow-sm hover:shadow-md
                          `}
                          onClick={() => {
                            setInputValue(suggestion.title)
                            handleSubmitMessage()
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{suggestion.icon}</span>
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-700">{suggestion.title}</span>
                              <span className="text-sm text-gray-500">{suggestion.description}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`
                              max-w-[80%] rounded-xl px-4 py-2 shadow-sm
                              ${message.type === 'user' 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-white border border-gray-100'}
                            `}
                          >
                            {message.content}
                          </div>
                        </motion.div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>

                {/* Input area */}
                <div className="relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="请输入您的问题..."
                    className="w-full bg-white border-gray-200 text-gray-700 pl-4 pr-24 py-6 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmitMessage()
                      }
                    }}
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-sm text-gray-400">
                      {5 - messageCount}/5次
                    </span>
                    <Button
                      size="icon"
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={handleSubmitMessage}
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Navigation */}
                <motion.nav 
                  className="flex justify-around items-center mt-4 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs">{item.label}</span>
                    </Link>
                  ))}
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>需要登录</DialogTitle>
            <DialogDescription>
              您已使用完5次免费体验机会。登录后可享受完整的AI教育助手服务，包括：
              <ul className="mt-2 space-y-1 text-sm">
                <li>• 无限次AI对话</li>
                <li>• 个性化学习建议</li>
                <li>• 专业教育资源</li>
                <li>• 学习进度追踪</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => setShowLoginDialog(false)}>
              稍后再说
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
              onClick={() => window.location.href = "/login"}
            >
              立即登录
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

