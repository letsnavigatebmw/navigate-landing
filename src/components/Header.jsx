export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="px-40 py-4 flex items-center justify-between gap-8">
        <a href="https://letsnavigatenow.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <img src="/logo.png" alt="Navigate" className="h-12 w-auto" />
        </a>
        
        <div className="flex items-center gap-3 flex-1 justify-center">
          <a href="#" className="border border-purple-500 bg-purple-600/10 hover:bg-purple-600/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition">
            Standard Report — $4.99
          </a>
          <a href="#" className="border border-purple-500 bg-purple-600/10 hover:bg-purple-600/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition">
            Comprehensive Report — $19.99
          </a>
        </div>
        
        <nav className="flex items-center gap-8 flex-shrink-0">
          <a href="https://letsnavigatenow.com/pricingplans/" className="text-slate-400 hover:text-white transition-colors text-sm">
            Pricing
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
            Property Report
          </a>
        </nav>
      </div>
    </header>
  )
}
