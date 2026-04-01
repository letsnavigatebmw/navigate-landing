export default function SectionLabel({ label, title, subtitle }) {
  return (
    <div className="mb-16">
      <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">{label}</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>
      {subtitle && <p className="text-lg text-slate-400 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
