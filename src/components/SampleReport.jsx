import { Copy } from 'lucide-react'

export default function SampleReport() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">See What You'll Receive</h2>
          <p className="text-slate-400 text-lg">
            Instant, detailed reports delivered straight to your inbox. All the data you need, formatted for action.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
          {/* Report Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Standard Property Report</h3>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition text-white">
              <Copy className="w-4 h-4" />
              Copy
            </button>
          </div>

          {/* Report Content */}
          <div className="p-8 space-y-6">
            {/* Property Address */}
            <div>
              <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Property Address</p>
              <p className="text-white text-lg font-semibold">1234 Sunset Boulevard, Los Angeles, CA 90028</p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 py-6 border-y border-slate-800">
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Estimated Value</p>
                <p className="text-white text-2xl font-bold">$1.43M</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Last Sale Price</p>
                <p className="text-white text-2xl font-bold">$1.1M</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Year Built</p>
                <p className="text-white text-2xl font-bold">1995</p>
              </div>
            </div>

            {/* Property Details */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: 'Square Feet', value: '3,450 sq ft' },
                { label: 'Lot Size', value: '0.32 acres' },
                { label: 'Bedrooms', value: '4' },
                { label: 'Bathrooms', value: '3.5' },
                { label: 'Garage', value: '2-car attached' },
                { label: 'Property Type', value: 'Single Family Home' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-slate-800/50">
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Owner Info (Sample) */}
            <div className="bg-slate-800/30 rounded-lg p-6 mt-6">
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">Owner Information</p>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-500 text-sm">Owner Name</p>
                  <p className="text-white font-semibold">John Anderson</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Contact</p>
                  <p className="text-white font-semibold">(213) 555-0147</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="text-white font-semibold">j.anderson@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition">
            Get Your First Report Now
          </button>
        </div>
      </div>
    </section>
  )
}
