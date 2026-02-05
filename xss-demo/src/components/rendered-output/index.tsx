import DOMPurify from 'isomorphic-dompurify';


interface RenderedOutputProps {
  html: string
  isSafe: boolean
}

const RenderedOutput = ({ html, isSafe }: RenderedOutputProps) => {
  if (!html)
    return (
      <div className="text-slate-300 italic text-xs">Waiting for post...</div>
    )

  const content = isSafe ? DOMPurify.sanitize(html) : html

  return (
    <div
      className={`min-h-[120px] rounded-lg border-2 border-dashed p-4 overflow-auto ${
        isSafe
          ? 'border-emerald-200 bg-emerald-50/30'
          : 'border-red-200 bg-red-50/30'
      }`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default RenderedOutput
