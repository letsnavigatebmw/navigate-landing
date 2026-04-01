import HeroPill from '../components/HeroPill'
import HeroHeading from '../components/HeroHeading'
import IntakeForm from '../components/IntakeForm'
import PricingCard from '../components/PricingCard'
import SectionLabel from '../components/SectionLabel'
import Footer from '../components/Footer'

export default function StandardPage({ setCurrentPage }) {
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
        <HeroPill label="Standard Report" price="4.99" />
        <HeroHeading>
          Get the Property Insights<br />
          You Need—<em className="text-purple-400 not-italic">In Seconds</em>
        </HeroHeading>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
          A fast, reliable snapshot of any property. Ownership, value, and market activity, so you can prospect smarter and move faster.
        </p>

        <IntakeForm 
          buttonText="Get Report — $4.99"
          defaultChecked={false}
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

        <p className="text-xs text-slate-500 mt-6">No subscription · Delivered in minutes · PDF format</p>
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
              featured={true}
            />
            <PricingCard
              label="Comprehensive Report"
              price="19.99"
              description="Full financial and ownership intelligence for serious decisions."
              features={comprehensiveFeatures}
              actionText="View Comprehensive →"
              onAction={() => setCurrentPage('comprehensive')}
            />
          </div>
        </div>
      </section>

      <div className="border-b border-slate-800" />

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel 
            label="What you get" 
            title="Everything You Need, at a Glance"
            subtitle="Streamlined to give you immediate clarity without overwhelming detail."
          />

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: '📋', title: 'Property overview', desc: 'Address, specs, and key characteristics' },
              { icon: '👤', title: 'Ownership snapshot', desc: 'Current owner and history' },
              { icon: '📊', title: 'Valuation insights', desc: 'Estimated value and last sale price' },
              { icon: '⏰', title: 'Market activity', desc: 'Sales history and trend signals' },
              { icon: '🏠', title: 'Property features', desc: 'Physical attributes and details' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <p className="text-2xl mb-3">{item.icon}</p>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-b border-slate-800" />

      {/* TWO COLUMN SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">What you can do with it</p>
              <h3 className="text-4xl font-bold mb-8 text-white">Turn Insight Into Action</h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  'Identify and qualify prospects instantly',
                  'Walk into conversations with confidence',
                  'Spot pricing opportunities in your market',
                  'Prioritise which properties are worth your time',
                  'Build smarter, more targeted outreach',
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
              <h3 className="text-4xl font-bold mb-8 text-white">Built for Speed and Scale</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Agents', desc: 'Prospecting without wasted calls' },
                  { title: 'Teams', desc: 'Running outbound at scale' },
                  { title: 'Investors', desc: 'Screening properties quickly' },
                  { title: 'Lenders', desc: 'Fast, reliable property context' },
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

      {/* SAMPLE REPORT */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Sample report</p>
              <h3 className="text-4xl font-bold mb-4 text-white">See What You'll Receive</h3>
              <p className="text-slate-400">A clean PDF delivered straight to your inbox within minutes of submitting.</p>
            </div>

            {/* Right: Mock Report */}
            <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-purple-600/30 border-b border-purple-600/50 px-6 py-4 flex justify-between items-center">
                <p className="font-semibold text-white text-sm">Standard Property Report</p>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded">PDF</span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">Address</p>
                  <p className="text-white text-sm font-semibold">142 Harbour View Rd, Santa Monica CA <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded ml-2">Verified</span></p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="text-xs uppercase text-slate-500 font-bold mb-1">Est. value</p>
                    <p className="text-white font-bold">$1.42M</p>
                  </div>
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="text-xs uppercase text-slate-500 font-bold mb-1">Last sale</p>
                    <p className="text-white font-bold">$1.18M</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">Owner</p>
                  <p className="text-white text-sm">J. & M. Whitmore</p>
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">Specs</p>
                  <p className="text-slate-400 text-xs">4 bed · 3 bath · 2,340 sqft · Built 1987</p>
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
