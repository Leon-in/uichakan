import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">联系我们</h1>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">联系方式</h2>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <span>珠海市香洲区唐家湾镇哈工大路1号</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <span>0756-1234567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <span>contact@siweihaiyang.com</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">营业时间</h2>
                  <div>
                    <p>周一至周五: 9:00 - 18:00</p>
                    <p>周六至周日: 休息</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">关注我们</h2>
                  <div className="flex space-x-4">
                    <Button variant="outline">微信</Button>
                    <Button variant="outline">微博</Button>
                    <Button variant="outline">知乎</Button>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">给我们留言</h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">姓名</label>
                      <Input id="name" placeholder="请输入您的姓名" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">邮箱</label>
                      <Input id="email" placeholder="请输入您的邮箱" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">主题</label>
                    <Input id="subject" placeholder="请输入留言主题" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">留言内容</label>
                    <Textarea id="message" placeholder="请输入您的留言内容" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600">
                    提交留言
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">公司位置</h2>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4410533086!2d113.5862!3d22.3568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIxJzI0LjUiTiAxMTPCsDM1JzEwLjMiRQ!5e0!3m2!1sen!2sus!4v1625120000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

