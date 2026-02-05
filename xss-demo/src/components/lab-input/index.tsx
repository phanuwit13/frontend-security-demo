import { useState } from 'react'

const LabInput = ({
  onSubmit,
  isSafe,
}: {
  onSubmit: (html: string) => void
  isSafe: boolean
}) => {
  const [input, setInput] = useState("<img src=x onerror=alert('Hacked!')>")

  const handlePost = (input: string) => {
    onSubmit(input)
  }

  const gradientFrom = isSafe ? 'from-emerald-500' : 'from-rose-500'
  const gradientTo = isSafe ? 'to-teal-600' : 'to-pink-600'
  const icon = isSafe ? '✓' : '⚠'
  const statusText = isSafe ? 'Secure Implementation' : 'Vulnerable Implementation'

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br ${gradientFrom} ${gradientTo} text-white text-lg font-bold shadow-lg`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            {statusText}
          </h3>
          <p className="text-xs text-slate-500">
            {isSafe ? 'Input is sanitized before rendering' : 'Raw HTML injection enabled'}
          </p>
        </div>
      </div>

      {/* Input Field */}
      <div className="relative">
        <input
          className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-mono text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100 transition-all duration-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your payload here..."
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => handlePost(input)}
          className={`flex-1 rounded-xl bg-linear-to-r ${gradientFrom} ${gradientTo} px-6 py-3.5 font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-98`}
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            POST {isSafe ? 'Secure' : 'Vulnerable'}
          </span>
        </button>
        <button
          onClick={() => {
            handlePost('')
            setInput('')
          }}
          className="rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0"
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default LabInput
