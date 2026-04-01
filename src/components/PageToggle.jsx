export default function PageToggle({ currentPage, setCurrentPage }) {
  return (
    <div className="bg-slate-900 border-b-2 border-purple-700 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="inline-flex border-2 border-purple-600 rounded-full overflow-hidden">
          <button
            onClick={() => setCurrentPage('standard')}
            className={`px-9 py-3 font-bold text-sm transition ${
              currentPage === 'standard'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-white hover:bg-slate-700'
            }`}
          >
            Standard Report — $4.99
          </button>
          <button
            onClick={() => setCurrentPage('comprehensive')}
            className={`px-9 py-3 font-bold text-sm transition ${
              currentPage === 'comprehensive'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-white hover:bg-slate-700'
            }`}
          >
            Comprehensive Report — $19.99
          </button>
        </div>
      </div>
    </div>
  )
}
