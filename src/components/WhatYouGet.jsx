import { Building2, Users, MapPin, TrendingUp, FileText, Lock } from 'lucide-react'

export default function WhatYouGet() {
  const features = [
    { icon: Building2, label: 'Property Details', desc: 'Full ownership & property info' },
    { icon: Users, label: 'Owner Contact', desc: 'Direct contact information' },
    { icon: MapPin, label: 'Address Data', desc: 'Verified addresses & locations' },
    { icon: TrendingUp, label: 'Price History', desc: 'Historical pricing trends' },
    { icon: FileText, label: 'Market Analysis', desc: 'Comparable sales data' },
    { icon: Lock, label: 'Verified Data', desc: 'Accurate & current records' },
  ]

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">WHAT YOU GET</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Everything You Need, at a Glance</h2>
          <p className="text-slate-400 text-lg">
            Comprehensive property data in one instant report. No waiting. No manual research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.label}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
