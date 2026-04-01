import HeroPill from '../components/HeroPill'
import HeroHeading from '../components/HeroHeading'
import IntakeForm from '../components/IntakeForm'
import PricingCard from '../components/PricingCard'
import SectionLabel from '../components/SectionLabel'
import Footer from '../components/Footer'

export default function ComprehensivePage({ setCurrentPage }) {
  const standardFeatures = [
    { name: 'Property overview', included: true },
    { name: 'Ownership snapshot', included: true },
    { name: 'Valuation insights', included: true },
    { name: 'Market trends', included: true },
    { name: 'Mortgage data', included: false },
    { name: 'Liens & debt', included: false },
    { name: 'AI investment signals', included: false },
  ]

  const comprehensiveFeatures = [
    { name: 'Everything in Standard', included: true },
    { name: 'Mortgage & loan data', included: true },
    { name: 'Liens & debt obligations', included: true },
    { name: 'Full transaction history', included: true },
    { name: 'AI investment insights', included: true },
  ]

  return (
    <div className="bg-slate-950">
      {/* HERO */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto text-center">
        <HeroPill label="Comprehensive Report" price="19.99" />
        <HeroHeading>
          See Everything<br />
          Behind the Property—<em className="text-purple-400 not-italic">In Seconds</em>
        </HeroHeading>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
          Ownership, equity, debt, and opportunity. Fully mapped in one report designed for serious decision-making.
        </p>

        <IntakeForm 
          buttonText="Get Full Report — $19.99"
          defaultChecked={true}
        />

        {/* Testimonial */}
        <div className="mt-12 max-w-xl mx-auto bg-slate-900/50 border-l-4 border-purple-600 rounded-lg p-6">
          <p className="italic text-slate-300 mb-4">"I purchased the comprehensive report and spoke to a Navigate sales rep and it unlocked so much more value — I was able to spot signals that I otherwise would have missed."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white">BW</div>
            <div className="text-left">
              <p className="text-sm font-bold text-purple-300">Brooke Winner</p>
              <p className="text-xs text-slate-500">The Beverly Hills Estates</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-6">Investor-grade insights · On demand · No subscription</p>
      </section>

      <div className="border-b border-slate-800" />

      {/* PRICING */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionLabel 
            label="Pricing" 
            title="Simple & Transparent Pricing"
            subtitle="Pay only for what you need. No subscriptions, no commitments."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <PricingCard
              label="Standard Report"
              price="4.99"
              description="Fast property snapshot for prospecting and outreach."
              features={standardFeatures}
              actionText="View Standard →"
              onAction={() => setCurrentPage('standard')}
            />
            <PricingCard
              label="Comprehensive Report"
              price="19.99"
              description="Full financial and ownership intelligence for serious decisions."
              features={comprehensiveFeatures}
              featured={true}
            />
          </div>
        </div>
      </section>

      <div className="border-b border-slate-800" />

      {/* WHY BAND */}
      <section className="py-20 px-6 text-center bg-slate-900">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Why it matters</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          The Difference <em className="text-purple-400 not-italic">Is Depth</em>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Most property tools show surface-level data. This report reveals the full financial and ownership picture, so you can act with precision, not guesswork.
        </p>
      </section>

      <div className="border-b border-slate-800" />

      {/* TWO COLUMN SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">What you can do with it</p>
              <h3 className="text-4xl font-bold mb-8 text-white">Make Better Decisions, Faster</h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  'Identify motivated sellers through equity and debt signals',
                  'Structure smarter offers with full financial visibility',
                  'Prepare high-impact listing or buyer presentations',
                  'Uncover off-market opportunities others miss',
                  'Analyse risk before committing capital',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Who it's for</p>
              <h3 className="text-4xl font-bold mb-8 text-white">Built for High-Stakes Decisions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Agents', desc: 'Preparing listing presentations' },
                  { title: 'Investors', desc: 'Underwriting deals' },
                  { title: 'Buyers', desc: 'Evaluating with full context' },
                  { title: 'Lenders', desc: 'Full financial transparency' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel 
            label="Comparison"
            title="Standard vs Comprehensive"
          />

          <div className="overflow-x-auto border border-slate-700 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900/50 border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-300">Feature</th>
                  <th className="text-center py-4 px-6 text-sm font-bold text-slate-300">Standard — $4.99</th>
                  <th className="text-center py-4 px-6 text-sm font-bold text-slate-300">Comprehensive — $19.99</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Property overview', standard: true, comprehensive: true },
                  { name: 'Ownership snapshot', standard: true, comprehensive: true },
                  { name: 'Valuation insights', standard: true, comprehensive: true },
                  { name: 'Market trends', standard: true, comprehensive: true },
                  { name: 'Mortgage & loan data', standard: false, comprehensive: true },
                  { name: 'Liens & debt obligations', standard: false, comprehensive: true },
                  { name: 'Full transaction history', standard: false, comprehensive: true },
                  { name: 'AI investment insights', standard: false, comprehensive: true },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-slate-800 hover:bg-slate-900/30 transition">
                    <td className="py-3 px-6 text-slate-300 text-sm">{item.name}</td>
                    <td className="text-center py-3 px-6 text-purple-400 font-bold">{item.standard ? '✓' : '—'}</td>
                    <td className="text-center py-3 px-6 text-purple-400 font-bold">{item.comprehensive ? '✓' : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SAMPLE REPORT */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Sample report</p>
              <h3 className="text-4xl font-bold mb-4 text-white">A Complete View, One Report</h3>
              <p className="text-slate-400">Delivered as a PDF directly to your inbox within minutes.</p>
            </div>

            {/* Right: Mock Report */}
            <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-purple-600/30 border-b border-purple-600/50 px-6 py-4 flex justify-between items-center">
                <p className="font-semibold text-white text-sm">Comprehensive Property Report</p>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded">Full</span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="text-xs uppercase text-slate-500 font-bold mb-1">Est. value</p>
                    <p className="text-white font-bold">$1.42M</p>
                  </div>
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="text-xs uppercase text-slate-500 font-bold mb-1">Equity</p>
                    <p className="text-white font-bold">$680K</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">Mortgage balance</p>
                  <p className="text-white text-sm font-semibold">$740,000 <span className="text-slate-500 text-xs">· 2 active loans</span></p>
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">Liens on title</p>
                  <p className="text-red-400 text-sm font-semibold">1 lien · $24,500 <span className="bg-orange-900/40 text-orange-300 text-xs px-2 py-1 rounded ml-2">Contractor</span></p>
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">Ownership chain</p>
                  <p className="text-slate-400 text-xs">J. Whitmore · 2019 · $1.18M<br/>D. & C. Park · 2011 · $875K</p>
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">AI opportunity signal</p>
                  <div className="bg-slate-800/50 rounded h-2 mb-1 overflow-hidden">
                    <div className="bg-teal-500 h-full" style={{ width: '84%' }}></div>
                  </div>
                  <p className="text-teal-400 text-xs font-semibold">High motivation · equity-rich, lien present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
