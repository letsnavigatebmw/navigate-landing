import { Check, X } from 'lucide-react'

export default function Comparison() {
  const features = [
    { name: 'Ownership Records', standard: true, comprehensive: true },
    { name: 'Contact Information', standard: true, comprehensive: true },
    { name: 'Property Details', standard: true, comprehensive: true },
    { name: 'Market Analysis', standard: false, comprehensive: true },
    { name: 'Price History (5 years)', standard: false, comprehensive: true },
    { name: 'Comparable Properties', standard: false, comprehensive: true },
    { name: 'Tax Records', standard: false, comprehensive: true },
    { name: 'Lien Information', standard: false, comprehensive: true },
    { name: 'Email Delivery', standard: true, comprehensive: true },
  ]

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">COMPARISON</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Standard vs Comprehensive</h2>
          <p className="text-slate-400 text-lg">
            Choose the package that fits your prospecting needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-4 px-4 font-semibold text-white">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-white">Standard</th>
                <th className="text-center py-4 px-4 font-semibold text-white">Comprehensive</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-900/30 transition">
                  <td className="py-4 px-4 text-slate-300">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {feature.standard ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-600 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <button className="bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-lg font-semibold transition">
            Get Standard Report — $4.99
          </button>
          <button className="bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-lg font-semibold transition">
            Get Comprehensive Report — $19.99
          </button>
        </div>
      </div>
    </section>
  )
}
