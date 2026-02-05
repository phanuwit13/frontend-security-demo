import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import LabCard from '@/components/lab-card'

export const Route = createFileRoute('/')({
  component: App,
})

export default function App() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  
  const payloads = [
    {
      label: 'Image',
      code: "<img src='https://i.pinimg.com/736x/bf/6e/29/bf6e296386c67b027cd3d234e3c6efa4.jpg' alt='cat meme' />",
    },
    { 
      label: 'Image Error', 
      code: "<img src=x onerror=alert('Hacked!')>" 
    },
    {
      label: 'Button Click',
      code: "<button class='bg-red-500 text-white p-1' onclick=alert('XSS')>Click</button>",
    },
  ]

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg shadow-violet-500/30 mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Security Demo
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-linear-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent">
            XSS Security Lab
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Interactive demonstration of Cross-Site Scripting vulnerabilities and prevention techniques
          </p>
        </div>

        {/* Payload Cards */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
            <h2 className="text-slate-700 text-sm font-bold uppercase tracking-widest">
              Sample Payloads
            </h2>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {payloads.map((p, i) => (
              <button
                key={i}
                onClick={() => handleCopy(p.code, i)}
                className="group relative bg-white p-6 rounded-2xl text-left border border-slate-200 hover:border-violet-300 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-linear-to-br from-violet-50 to-fuchsia-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-600">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                      {p.label}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                      copiedIndex === i 
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-violet-100 group-hover:text-violet-700'
                    }`}>
                      {copiedIndex === i ? '✓ Copied!' : 'Copy'}
                    </span>
                  </div>
                  <code className="text-xs text-slate-700 font-mono block leading-relaxed break-all bg-slate-50 p-3 rounded-lg border border-slate-100 group-hover:border-violet-200 transition-colors">
                    {p.code}
                  </code>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lab Cards */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
            <h2 className="text-slate-700 text-sm font-bold uppercase tracking-widest">
              Interactive Demo
            </h2>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <LabCard type="danger" />
            <LabCard type="safe" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Built to demonstrate security best practices in web development
          </div>
        </div>
      </div>
    </div>
  )
}
