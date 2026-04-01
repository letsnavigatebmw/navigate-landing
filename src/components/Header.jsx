export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="11.5" stroke="#9088f0" strokeWidth="2.2"/>
            <circle cx="13" cy="13" r="6.2" stroke="#9088f0" strokeWidth="1.6"/>
            <path d="M10.5 13c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5" stroke="#9088f0" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="13" cy="13" r="1.2" fill="#9088f0"/>
          </svg>
          <span className="text-lg font-bold text-purple-400">navigate</span>
        </div>
      </div>
    </header>
  )
}
