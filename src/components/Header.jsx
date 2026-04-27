export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <nav className="flex items-center gap-8">
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
