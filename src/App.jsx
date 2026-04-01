import { useState } from 'react'
import Header from './components/Header'
import PageToggle from './components/PageToggle'
import StandardPage from './pages/StandardPage'
import ComprehensivePage from './pages/ComprehensivePage'

function App() {
  const [currentPage, setCurrentPage] = useState('standard')

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />
      <PageToggle currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'standard' ? (
        <StandardPage setCurrentPage={setCurrentPage} />
      ) : (
        <ComprehensivePage setCurrentPage={setCurrentPage} />
      )}
    </div>
  )
}

export default App
