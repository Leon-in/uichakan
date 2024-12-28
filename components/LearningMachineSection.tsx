import Image from 'next/image'

export default function LearningMachineSection() {
  const images = [
    '/learning-machine-1.jpg',
    '/learning-machine-2.jpg',
    '/learning-machine-3.jpg',
    '/learning-machine-4.jpg',
    '/learning-machine-5.jpg',
  ]

  return (
    <section id="learning-machine" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">思维海洋AI学习机</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={src} alt={`AI学习机图片 ${index + 1}`} width={400} height={300} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">AI学习机特性 {index + 1}</h3>
                <p className="text-gray-600">这里是关于AI学习机特性{index + 1}的详细描述。</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

