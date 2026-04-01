import { Check, X } from 'lucide-react'

export default function Pricing() {
  const features = [
    { name: 'Ownership Records', standard: true, comprehensive: true },
    { name: 'Contact Information', standard: true, comprehensive: true },
    { name: 'Property Details', standard: true, comprehensive: true },
    { name: 'Market Analysis', standard: false, comprehensive: true },
    { name: 'Comparable Sales', standard: false, comprehensive: true },
    { name: 'Price History', standard: false, comprehensive: true },
  ]

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">PRICING</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Simple & Transparent Pricing</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No subscriptions. No long-term contracts. Pay once, get instant access to property insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Standard */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 relative">
            <div className="absolute top-6 right-6 bg-purple-600/20 text-purple-400 text-xs font-semibold px-3 py-1 rounded-full">
              YOU'RE HERE
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Standard Report</h3>
            <p className="text-slate-400 text-sm mb-6">Essential property data</p>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-purple-400">$4.99</span>
              <p className="text-slate-500 text-sm mt-2">One-time payment</p>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-lg font-semibold mb-8 transition">
              Get Standard Report
            </button>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  {feature.standard ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                  )}
                  <span className={feature.standard ? 'text-white' : 'text-slate-600'}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Comprehensive */}
          <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Comprehensive Report</h3>
            <p className="text-slate-400 text-sm mb-6">Everything you need for serious prospecting</p>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-purple-400">$19.99</span>
              <p className="text-slate-500 text-sm mt-2">One-time payment</p>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-lg font-semibold mb-8 transition">
              Get Comprehensive Report
            </button>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-white">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
