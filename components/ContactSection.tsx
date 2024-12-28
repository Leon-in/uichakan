export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">联系我们</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">姓名</label>
            <input type="text" id="name" className="w-full px-3 py-2 text-gray-700 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">邮箱</label>
            <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">留言</label>
            <textarea id="message" rows={4} className="w-full px-3 py-2 text-gray-700 rounded" required></textarea>
          </div>
          <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">提交</button>
        </form>
      </div>
    </section>
  )
}

