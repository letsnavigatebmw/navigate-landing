export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-500">
          navigate
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
            <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
              Standard Report — $4.99
            </span>
            <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
              Comprehensive Report — $19.99
            </span>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-medium transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
