function InfoRow({
  label,
  value,
  highlight = false,
  mono = false,
}: {
  label: string
  value: React.ReactNode
  highlight?: boolean
  mono?: boolean
}) {
  return (
    <div className="flex justify-between items-start py-2">
      <span className="text-sm text-slate-600">{label}</span>
      <span
        className={`text-sm font-medium text-right ${
          highlight ? 'text-blue-600 font-semibold' : 'text-slate-900'
        } ${mono ? 'font-mono' : ''}`}
      >
        {value}
      </span>
    </div>
  )
}

export default InfoRow