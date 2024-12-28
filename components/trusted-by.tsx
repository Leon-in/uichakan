import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function TrustedBy() {
  return (
    <section className="container py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">加盟申请</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">姓名</label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">邮箱</label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">电话</label>
            <Input type="tel" id="phone" name="phone" required />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">所在城市</label>
            <Input type="text" id="city" name="city" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">留言</label>
            <Textarea id="message" name="message" rows={4} />
          </div>
          <div>
            <Button type="submit" className="w-full">
              提交申请
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

