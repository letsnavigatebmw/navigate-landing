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

      <Footer />
    </div>
  )
}
