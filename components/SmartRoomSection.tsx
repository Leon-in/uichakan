export default function SmartRoomSection() {
  return (
    <section id="smart-room" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">AI智习室</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <iframe
            src="https://vr.justeasy.cn/view/p1y7254971w96866-1725729108.html"
            className="w-full h-[600px] border-0"
            title="AI智习室3D展示"
          />
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">AI智习室特点</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>智能环境控制，营造最佳学习氛围</li>
            <li>个性化学习助手，实时解答疑问</li>
            <li>多媒体互动设备，提升学习体验</li>
            <li>数据分析和反馈系统，持续优化学习效果</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

