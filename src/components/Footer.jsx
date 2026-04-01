export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="11.5" stroke="#9088f0" strokeWidth="2.2"/>
              <circle cx="13" cy="13" r="6.2" stroke="#9088f0" strokeWidth="1.6"/>
              <path d="M10.5 13c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5" stroke="#9088f0" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="13" cy="13" r="1.2" fill="#9088f0"/>
            </svg>
            <span className="font-bold uppercase text-purple-400">Navigate</span>
          </div>
          <p className="text-sm text-slate-400">The real estate intelligence platform to understand, reach, and convert more opportunities.</p>
          <div className="flex gap-2 mt-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Terms</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
        </div>
        
        <div>
          <p className="text-xs font-bold uppercase text-slate-400 mb-4">Resources</p>
          <div className="space-y-2 text-sm text-slate-400">
            <a href="#" className="hover:text-white block">Contact Us</a>
            <a href="#" className="hover:text-white block">Support</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-slate-500">
          <p>© 2025 Navigate Way, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Twitter</a>
            <a href="#" className="hover:text-slate-300">LinkedIn</a>
            <a href="#" className="hover:text-slate-300">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
