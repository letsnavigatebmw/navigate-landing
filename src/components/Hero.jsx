import { useState } from 'react'

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    reportType: 'standard'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <section className="pt-20 pb-32 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="text-xs bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full font-medium">
            STANDARD REPORT • $4.99
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
          Get the Property Insights<br />
          You Need —{' '}
          <span className="text-purple-400 underline decoration-purple-500 decoration-4 underline-offset-2">
            In Seconds
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Find ownership records, contact information, property details, and more. No subscriptions. No contracts. Pay once, get instant access.
        </p>

        {/* Form Card */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
            />

            {/* Report Type */}
            <select
              value={formData.reportType}
              onChange={(e) => setFormData({...formData, reportType: e.target.value})}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
            >
              <option value="standard">Standard Report - $4.99</option>
              <option value="comprehensive">Comprehensive Report - $19.99</option>
            </select>

            {/* Address Field with CTA */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter property address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold whitespace-nowrap transition"
              >
                Get Report — $4.99
              </button>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-center gap-3 cursor-pointer text-slate-300">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm">Send property insights to my inbox</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer text-slate-300">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm">I want to connect with Navigate Sales Pro</span>
              </label>
            </div>

            <p className="text-xs text-slate-500 pt-2">
              By clicking "Get Report", you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>

        {/* Testimonial */}
        <div className="flex items-center gap-4 text-slate-300">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center font-bold">
            JM
          </div>
          <div>
            <p className="text-sm font-medium text-white">"Changed how I prospect in under 2 weeks"</p>
            <p className="text-xs text-slate-500">Jessica Martinez, Real Estate Agent</p>
          </div>
        </div>
      </div>
    </section>
  )
}
