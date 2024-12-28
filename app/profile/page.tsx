"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Mail, Lock, User, Settings, Clock, Star } from 'lucide-react'

export default function ProfilePage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="secondary">个人中心</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                欢迎回来，张同学
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                管理您的账户设置和学习偏好
              </p>
            </div>

            <div className="mx-auto max-w-4xl mt-12">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="profile">个人资料</TabsTrigger>
                  <TabsTrigger value="preferences">学习偏好</TabsTrigger>
                  <TabsTrigger value="notifications">通知设置</TabsTrigger>
                  <TabsTrigger value="security">账户安全</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>个人资料</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>张</AvatarFallback>
                        </Avatar>
                        <Button variant="outline">更换头像</Button>
                      </div>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">姓名</Label>
                          <Input id="name" defaultValue="张同学" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">邮箱</Label>
                          <Input id="email" type="email" defaultValue="zhang@example.com" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="grade">年级</Label>
                          <Input id="grade" defaultValue="初中二年级" />
                        </div>
                      </div>
                      <Button>保存更改</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="preferences">
                  <Card>
                    <CardHeader>
                      <CardTitle>学习偏好设置</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>每日学习提醒</Label>
                            <div className="text-sm text-gray-500">
                              在设定时间提醒您开始学习
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>学习进度追踪</Label>
                            <div className="text-sm text-gray-500">
                              记录并分析您的学习数据
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>智能推荐</Label>
                            <div className="text-sm text-gray-500">
                              基于学习情况推荐合适的内容
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>通知设置</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>邮件通知</Label>
                            <div className="text-sm text-gray-500">
                              接收学习进度和重要通知
                            </div>
                          </div>
                          <Switch
                            checked={notifications.email}
                            onCheckedChange={(checked) =>
                              setNotifications({ ...notifications, email: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>推送通知</Label>
                            <div className="text-sm text-gray-500">
                              接收即时消息和提醒
                            </div>
                          </div>
                          <Switch
                            checked={notifications.push}
                            onCheckedChange={(checked) =>
                              setNotifications({ ...notifications, push: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>每周学习报告</Label>
                            <div className="text-sm text-gray-500">
                              接收每周学习数据统计
                            </div>
                          </div>
                          <Switch
                            checked={notifications.weekly}
                            onCheckedChange={(checked) =>
                              setNotifications({ ...notifications, weekly: checked })
                            }
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>账户安全</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="current-password">当前密码</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="new-password">新密码</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="confirm-password">确认新密码</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                      <Button>更新密码</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      累计学习时长
                    </CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">167.5小时</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      完成课程数
                    </CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24个</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      获得徽章
                    </CardTitle>
                    <Settings className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12个</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      学习天数
                    </CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45天</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

