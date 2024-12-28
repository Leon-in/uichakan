"use client"

import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const studyData = [
  { date: "周一", minutes: 120, score: 85 },
  { date: "周二", minutes: 90, score: 82 },
  { date: "周三", minutes: 150, score: 88 },
  { date: "周四", minutes: 100, score: 86 },
  { date: "周五", minutes: 180, score: 90 },
  { date: "周六", minutes: 200, score: 92 },
  { date: "周日", minutes: 160, score: 89 }
]

const subjects = [
  { name: "语文", progress: 75, score: 88 },
  { name: "数学", progress: 82, score: 92 },
  { name: "英语", progress: 68, score: 85 },
  { name: "科学", progress: 70, score: 87 }
]

export default function ReportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="secondary">学习报告</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                您的学习进展
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                详细了解您的学习情况和进步轨迹
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">总览</TabsTrigger>
                <TabsTrigger value="subjects">学科分析</TabsTrigger>
                <TabsTrigger value="time">时间分析</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>本周学习概况</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={studyData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="minutes" 
                            stroke="#8884d8" 
                            name="学习时长(分钟)"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="score" 
                            stroke="#82ca9d"
                            name="得分" 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subjects">
                <Card>
                  <CardHeader>
                    <CardTitle>各学科进展</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {subjects.map((subject, index) => (
                        <motion.div 
                          key={subject.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">{subject.name}</span>
                            <span className="text-gray-500">{subject.score}分</span>
                          </div>
                          <Progress value={subject.progress} />
                          <p className="text-sm text-gray-500">
                            课程进度: {subject.progress}%
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="time">
                <Card>
                  <CardHeader>
                    <CardTitle>学习时间分析</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-3">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">
                              本周总学习时长
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">16.5小时</div>
                            <p className="text-xs text-green-500 mt-1">
                              较上周增长12%
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">
                              日均学习时长
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">2.4小时</div>
                            <p className="text-xs text-muted-foreground mt-1">
                              符合推荐时长
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">
                              专注度评分
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">91分</div>
                            <p className="text-xs text-green-500 mt-1">
                              优秀水平
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

