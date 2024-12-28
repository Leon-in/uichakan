export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">思维海洋</h3>
            <p>智能创新，引领未来</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">联系方式</h3>
            <p>邮箱：info@siweihaiyang.com</p>
            <p>电话：+86 123 4567 8900</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">微信</a>
              <a href="#" className="hover:text-blue-400">微博</a>
              <a href="#" className="hover:text-blue-400">知乎</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 思维海洋. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}

