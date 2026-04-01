import { ArrowRight } from 'lucide-react'

export default function TakeAction() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">WHAT YOU CAN DO WITH IT</p>
          <h3 className="text-4xl font-bold mb-8">Turn Insight Into Action</h3>
          
          <ul className="space-y-4">
            {[
              'Identify decision-makers before reaching out',
              'Build targeted prospect lists in minutes',
              'Personalize outreach with verified data',
              'Track property market activity in real-time',
              'Close deals faster with better intel',
              'Automate your prospecting workflow',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">WHY IT'S FAST</p>
          <h3 className="text-4xl font-bold mb-8">Built for Speed and Scale</h3>
          
          <div className="space-y-6">
            {[
              { title: 'Instant Delivery', desc: 'Get reports in seconds, not days' },
              { title: 'Automated Processing', desc: 'No manual data entry required' },
              { title: 'Batch Operations', desc: 'Process thousands of addresses at once' },
              { title: 'API Access', desc: 'Integrate with your existing tools' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
