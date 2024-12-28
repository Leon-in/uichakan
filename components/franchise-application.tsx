"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Wallet, ArrowRight, CheckCircle2 } from 'lucide-react'

const investmentRanges = [
  "30-50万",
  "50-100万",
  "100-200万",
  "200万以上"
] as const

const formSchema = z.object({
  step1: z.object({
    name: z.string().min(2, { message: "姓名至少需要2个字符" }),
    email: z.string().email({ message: "请输入有效的邮箱地址" }),
    phone: z.string().regex(/^1[3-9]\d{9}$/, { message: "请输入有效的手机号码" }),
  }),
  step2: z.object({
    city: z.string().min(2, { message: "请输入所在城市" }),
    investmentRange: z.enum(investmentRanges, {
      required_error: "请选择投资范围",
    }),
    experience: z.string().optional(),
  }),
  step3: z.object({
    message: z.string().optional(),
    timeline: z.string().min(1, { message: "请选择计划开业时间" }),
  }),
})

const benefits = [
  {
    icon: Building2,
    title: "优质店址选择",
    description: "专业团队协助选址，确保优质商圈"
  },
  {
    icon: Users,
    title: "全程开店指导",
    description: "从筹备到开业的全方位支持"
  },
  {
    icon: Wallet,
    title: "可观投资回报",
    description: "成熟的盈利模式，快速回本"
  }
]

export function FranchiseApplication() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      step1: { name: "", email: "", phone: "" },
      step2: { city: "", experience: "" },
      step3: { message: "", timeline: "" },
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      setShowSuccess(true)
      toast({
        title: "申请已提交",
        description: "我们的团队将尽快与您联系。",
      })
    } catch (error) {
      toast({
        title: "提交失败",
        description: "请稍后重试或直接联系我们。",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    const currentStepData = form.getValues(`step${step}`)
    const stepSchema = formSchema.shape[`step${step}`]
    
    try {
      await stepSchema.parseAsync(currentStepData)
      setStep(s => Math.min(s + 1, 3))
    } catch (error) {
      // Form validation will handle the error display
    }
  }

  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  return (
    <section id="franchise-application" className="w-full py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">商业合作</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            加入思维海洋，共创教育未来
          </h2>
          <p className="mt-4 text-gray-500">
            填写以下申请表，开启您的教育事业新篇章
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Application Form */}
          <div className="relative">
            <Card className="relative backdrop-blur-sm bg-white/60 shadow-xl">
              <CardHeader>
                <CardTitle>加盟申请</CardTitle>
                <CardDescription>
                  请填写下列信息，我们将尽快与您联系
                </CardDescription>
                <Progress 
                  value={step * 33.33} 
                  className="mt-4"
                />
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {!showSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          {step === 1 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="space-y-4"
                            >
                              <FormField
                                control={form.control}
                                name="step1.name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>姓名</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="step1.email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>邮箱</FormLabel>
                                    <FormControl>
                                      <Input {...field} type="email" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="step1.phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>手机号码</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </motion.div>
                          )}

                          {step === 2 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="space-y-4"
                            >
                              <FormField
                                control={form.control}
                                name="step2.city"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>意向城市</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="step2.investmentRange"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>投资预算</FormLabel>
                                    <Select 
                                      onValueChange={field.onChange} 
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="选择投资范围" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {investmentRanges.map((range) => (
                                          <SelectItem key={range} value={range}>
                                            {range}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="step2.experience"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>教育行业经验（选填）</FormLabel>
                                    <FormControl>
                                      <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </motion.div>
                          )}

                          {step === 3 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="space-y-4"
                            >
                              <FormField
                                control={form.control}
                                name="step3.timeline"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>计划开业时间</FormLabel>
                                    <Select 
                                      onValueChange={field.onChange} 
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="选择计划开业时间" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="1-3">1-3个月内</SelectItem>
                                        <SelectItem value="4-6">4-6个月内</SelectItem>
                                        <SelectItem value="7-12">7-12个月内</SelectItem>
                                        <SelectItem value="12+">1年以上</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="step3.message"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>其他留言（选填）</FormLabel>
                                    <FormControl>
                                      <Textarea {...field} rows={4} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </motion.div>
                          )}

                          <div className="flex justify-between mt-6 pt-4 border-t">
                            {step > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                onClick={prevStep}
                              >
                                上一步
                              </Button>
                            )}
                            {step < 3 ? (
                              <Button
                                type="button"
                                className="ml-auto"
                                onClick={nextStep}
                              >
                                下一步
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            ) : (
                              <Button 
                                type="submit"
                                className="ml-auto bg-gradient-to-r from-blue-600 to-indigo-600"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "提交中..." : "提交申请"}
                              </Button>
                            )}
                          </div>
                        </form>
                      </Form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">申请已提交成功！</h3>
                      <p className="text-gray-500 mb-6">
                        感谢您的申请，我们的团队将在24小时内与您联系。
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setShowSuccess(false)
                          setStep(1)
                          form.reset()
                        }}
                      >
                        提交新的申请
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-500">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-0">
              <CardHeader>
                <CardTitle>为什么选择思维海洋？</CardTitle>
                <CardDescription>
                  加入思维海洋，您将获得：
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  专业的品牌形象和市场知名度
                </p>
                <p className="flex items-center text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  成熟的运营体系和管理模式
                </p>
                <p className="flex items-center text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  持续的技术支持和培训服务
                </p>
                <p className="flex items-center text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  优质的教育资源和课程体系
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

