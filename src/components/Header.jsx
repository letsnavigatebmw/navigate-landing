export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <a href="https://letsnavigatenow.com/" className="flex items-center hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Navigate" height="32" className="h-8" />
        </a>
        <nav className="flex items-center gap-8 ml-12">
          <a href="https://letsnavigatenow.com/pricingplans/" className="text-slate-400 hover:text-white transition-colors text-sm">
            Pricing
          </a>
          <a href="#" className="text-white hover:text-slate-300 transition-colors text-sm">
            Property Report
          </a>
        </nav>
      </div>
    </header>
  )
}
