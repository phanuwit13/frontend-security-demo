import { useState } from 'react'
import RenderedOutput from '@/components/rendered-output'
import LabInput from '../lab-input'

const LabCard = ({ type }: { type: 'danger' | 'safe' }) => {
  const isSafe = type === 'safe'
  const [html, setHtml] = useState('')

  const handlePost = (html: string) => {
    setHtml(html)
  }

  const borderColor = isSafe ? 'border-emerald-200' : 'border-rose-200'
  const accentFrom = isSafe ? 'from-emerald-500' : 'from-rose-500'
  const accentTo = isSafe ? 'to-teal-500' : 'to-pink-500'

  return (
    <div className={`relative bg-white rounded-3xl border-2 ${borderColor} shadow-xl shadow-slate-200/50 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/50 overflow-hidden`}>
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${accentFrom} ${accentTo}`}></div>
      
      <LabInput onSubmit={handlePost} isSafe={isSafe} />

      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full bg-linear-to-r ${accentFrom} ${accentTo}`}></div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600">
            Rendered Output
          </h3>
        </div>
        <RenderedOutput html={html} isSafe={isSafe} />
      </div>
    </div>
  )
}

export default LabCard
