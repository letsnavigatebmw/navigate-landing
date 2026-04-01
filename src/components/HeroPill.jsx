export default function HeroPill({ label, price }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-purple-600/50 rounded-2xl bg-purple-600/20">
      <span className="text-xs font-bold uppercase tracking-wide text-purple-300">{label}</span>
      <span className="bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-lg">${price}</span>
    </div>
  )
}
