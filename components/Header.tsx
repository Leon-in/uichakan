import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">思维海洋</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#ai-model" className="text-gray-600 hover:text-blue-600">AI大模型</a></li>
            <li><a href="#learning-machine" className="text-gray-600 hover:text-blue-600">AI学习机</a></li>
            <li><a href="#smart-room" className="text-gray-600 hover:text-blue-600">AI智习室</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">联系我们</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

