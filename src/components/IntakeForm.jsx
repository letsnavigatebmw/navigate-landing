import { useState } from 'react'

export default function IntakeForm({ onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    address: '',
    connectSalesRep: true,
  })
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const isComplete = 
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.includes('@') &&
    formData.profession &&
    formData.address.trim().length > 4

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isComplete) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxiAYsg1SCqy6DMmcjK7oCXqJdNveMqhNuA7RturrUGfKWaFu7kyI09YnfvkfmnH_OMjg/exec',
        {
          method: 'POST',
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            profession: formData.profession,
            address: formData.address,
            connectSalesRep: formData.connectSalesRep ? 'Yes' : 'No'
          }),
          mode: 'no-cors'
        }
      )

      setSuccess(true)
      if (onSubmit) onSubmit(formData)
    } catch (err) {
      setError('Failed to submit. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSuccess(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      address: '',
      connectSalesRep: true,
    })
  }

  if (success) {
    return (
      <div className="max-w-xl mx-auto mt-12 bg-slate-900 border border-purple-600/50 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-purple-600/20 border border-purple-600/50 rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
            <path d="M4.5 11l5 5 8-9" stroke="#9088f0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Report on its way</h3>
        <p className="text-slate-300">Your report will land in<br/><span className="text-purple-300 font-bold">{formData.email}</span> within minutes.</p>
        <button
          onClick={handleReset}
          className="mt-6 text-purple-400 hover:text-purple-300 text-sm font-semibold"
        >
          ← Get another report
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-slate-900/50 border border-purple-600/40 rounded-2xl p-8 space-y-5">
      <p className="text-sm font-semibold text-slate-300 mb-6">Fill in your details to receive your report</p>

      {/* Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-2">First name</label>
          <input
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Last name</label>
          <input
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Email address</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
        />
      </div>

      {/* Profession */}
      <div>
        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Profession</label>
        <select
          value={formData.profession}
          onChange={(e) => setFormData({...formData, profession: e.target.value})}
          className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
        >
          <option value="">Select your profession</option>
          <option>Realtor</option>
          <option>Lender</option>
          <option>Investor / Wholesaler</option>
          <option>Property Service Provider</option>
          <option>Other</option>
        </select>
      </div>

      {/* Inbox Callout */}
      <div className="flex gap-3 bg-teal-500/10 border border-teal-500/30 rounded-lg p-4">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
          <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#5dcaa5" strokeWidth="1.4"/>
          <path d="M1.5 5.5l6.5 4 6.5-4" stroke="#5dcaa5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <p className="font-bold text-sm text-teal-400">Delivered straight to your inbox</p>
          <p className="text-xs text-slate-400 mt-1">Your report arrives as a branded PDF within minutes of submitting.</p>
        </div>
      </div>

      {/* Sales Rep Checkbox */}
      <label className="flex gap-3 bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 cursor-pointer hover:bg-purple-600/15 transition">
        <input
          type="checkbox"
          checked={formData.connectSalesRep}
          onChange={(e) => setFormData({...formData, connectSalesRep: e.target.checked})}
          className="w-5 h-5 accent-purple-600 mt-0.5 cursor-pointer"
        />
        <div>
          <p className="font-bold text-sm text-purple-300">Connect with a Navigate Sales Rep to extract even more value from the report</p>
          <p className="text-xs text-slate-400 mt-1">We're here to help you spot the signals that help you <span className="font-bold text-white">WIN MORE LISTINGS</span></p>
        </div>
      </label>

      {/* Address Field & Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter a property address..."
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
          className="flex-1 bg-slate-800/50 border border-slate-700 rounded-full px-5 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
        />
        <button
          type="submit"
          disabled={!isComplete || loading}
          className={`px-6 py-3 sm:py-3 rounded-full font-bold min-h-[44px] flex items-center justify-center transition ${
            isComplete && !loading
              ? 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer shadow-lg shadow-purple-600/50'
              : 'bg-slate-700 text-slate-400 cursor-not-allowed'
          }`}
        >
          {loading ? 'Submitting...' : buttonText}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-300 text-sm p-3 rounded-lg">
          {error}
        </div>
      )}

      <p className="text-xs text-slate-500 text-center">Your information is kept private and never sold.</p>
    </form>
  )
}
