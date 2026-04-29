import { useState } from 'react'
import HeroPill from '../components/HeroPill'
import HeroHeading from '../components/HeroHeading'
import IntakeForm from '../components/IntakeForm'
import PricingCard from '../components/PricingCard'
import SectionLabel from '../components/SectionLabel'
import Footer from '../components/Footer'

export default function StandardPage({ setCurrentPage }) {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

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

  const testimonials = [
    {
      quote: "I walked into my listing presentation with this instead of my usual MLS printouts—and you could feel the difference. It completely changed how the conversation went.",
      author: "Evan Dolmatsky",
      title: "Estates Director, The Beverly Hills Estates",
      initials: "ED"
    },
    {
      quote: "The Standard Report gives me everything I need for initial prospecting. Fast, accurate, and no fluff. This saves me hours every week.",
      author: "Marcus Chen",
      title: "Century 21 LA",
      initials: "MC"
    },
    {
      quote: "We were using three different tools before Navigate. Now we have everything in one place. The ROI paid for itself in the first month.",
      author: "Sarah Rodriguez",
      title: "Residential Investment Group",
      initials: "SR"
    }
  ]

  const faqs = [
    {
      question: "How fast will I get my report?",
      answer: "Your report is delivered within 5-10 minutes of submitting your property address. You'll get a PDF email you can download and share immediately."
    },
    {
      question: "What if I need more detail than the Standard Report provides?",
      answer: "Upgrade to the Comprehensive Report ($19.99) for full financial data, liens, mortgage details, and AI-powered investment signals. You can always compare both before deciding."
    },
    {
      question: "Do I need a subscription?",
      answer: "No subscriptions. Pay per report, only when you need it. Buy 1 report or 100—no hidden fees or lock-in agreements."
    },
    {
      question: "How accurate is the data?",
      answer: "We pull from public records and verified property databases. All data is cross-referenced and verified for accuracy. Every report includes a confidence rating."
    },
    {
      question: "Can I use this for investment analysis?",
      answer: "Absolutely. The Standard Report gives you ownership and valuation data. For deeper investment analysis with equity and debt signals, upgrade to the Comprehensive Report."
    }
  ]

  return (
    <div className="bg-slate-950">
      {/* ===== MOBILE LAYOUT (shown only on mobile, md:hidden) ===== */}

      {/* MOBILE: HERO (No Form - moved to bottom) */}
      <section className="block md:hidden pt-16 pb-12 px-40 w-full">
        <div className="text-center">
          <HeroPill label="Standard Report" price="4.99" />
          <HeroHeading>
            Get the Property Insights<br />
            You Need—<em className="text-purple-400 not-italic">In Seconds</em>
          </HeroHeading>
          <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8">
            A fast, reliable snapshot of any property. Ownership, value, and market activity, so you can prospect smarter and move faster.
          </p>
          
          <button
            onClick={() => {
              const element = document.getElementById('order-form-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Get Report — $4.99
          </button>
        </div>
      </section>

      {/* MOBILE: SOCIAL PROOF */}
      <section className="block md:hidden py-12 px-40 bg-slate-900/50">
        <div className="w-full">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-purple-400 mb-8">Trusted by agents, teams & investors</p>
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <p className="text-sm text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-purple-300">{testimonial.author}</p>
                    <p className="text-xs text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE: HOW IT WORKS */}
      <section className="block md:hidden py-16 px-40">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              { step: '1', title: 'Enter Address', desc: 'Type in any property address' },
              { step: '2', title: 'Get Report', desc: 'Instant analysis in your inbox (5-10 min)' },
              { step: '3', title: 'Take Action', desc: 'Use insights to prospect smarter' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE: WHAT'S INCLUDED (Simplified - 3 col) */}
      <section className="block md:hidden py-16 px-40 bg-slate-900/50">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">What's Included</h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: '📋', title: 'Property Overview', desc: 'Address, specs, key details' },
              { icon: '👤', title: 'Ownership Data', desc: 'Current & historical owners' },
              { icon: '📊', title: 'Valuation & Market', desc: 'Estimated value & trends' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center">
                <p className="text-3xl mb-3">{item.icon}</p>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentPage('comprehensive')}
              className="text-purple-400 hover:text-purple-300 text-sm font-bold"
            >
              Need more? See Comprehensive Report →
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('order-form-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block mx-auto mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition text-sm"
            >
              Get Report — $4.99
            </button>
          </div>
        </div>
      </section>

      {/* MOBILE: SAMPLE REPORT */}
      <section className="block md:hidden py-16 px-40">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">See What You'll Receive</h2>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <p className="text-sm text-slate-400 mb-4">A clean, professional PDF delivered to your inbox within minutes. Everything you need to qualify the property and move forward.</p>
              <ul className="space-y-3 text-slate-300 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Property address & specs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Current owner & history
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Estimated value & trends
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Market activity & signals
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="bg-purple-600/30 border-b border-purple-600/50 px-6 py-3 flex justify-between items-center">
                <p className="font-semibold text-white text-xs">Standard Property Report</p>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded">PDF</span>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">Address</p>
                  <p className="text-white text-sm font-semibold">142 Harbour View Rd, Santa Monica CA</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="text-xs uppercase text-slate-500 font-bold mb-1">Est. Value</p>
                    <p className="text-white font-bold text-sm">$1.42M</p>
                  </div>
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="text-xs uppercase text-slate-500 font-bold mb-1">Last Sale</p>
                    <p className="text-white font-bold text-sm">$1.18M</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-500 font-bold mb-2">Owner</p>
                  <p className="text-white text-sm">J. & M. Whitmore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE: PRICING */}
      <section className="block md:hidden py-16 px-40 bg-slate-900/50">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 gap-8">
            <PricingCard
              label="Standard Report"
              price="4.99"
              description="Fast property snapshot for prospecting."
              features={standardFeatures.slice(0, 4)}
              featured={true}
            />
            <PricingCard
              label="Comprehensive Report"
              price="19.99"
              description="Full financial & ownership intelligence."
              features={comprehensiveFeatures.slice(0, 3)}
              actionText="Compare →"
              onAction={() => setCurrentPage('comprehensive')}
            />
          </div>
        </div>
      </section>

      {/* MOBILE: FAQ */}
      <section className="block md:hidden py-16 px-40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-slate-900/50 hover:bg-slate-900 transition"
                >
                  <p className="font-bold text-white text-sm">{faq.question}</p>
                  <span className={`text-purple-400 transition ${expandedFAQ === index ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-slate-900/30 border-t border-slate-700">
                    <p className="text-sm text-slate-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE: GUARANTEE */}
      <section className="block md:hidden py-12 px-40 bg-purple-600/10 border-t border-b border-purple-600/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-bold text-white mb-2">📋 100% Satisfaction Guarantee</p>
          <p className="text-sm text-slate-300">If your report doesn't deliver the insights you expected within 7 days, we'll refund your purchase. No questions asked.</p>
        </div>
      </section>

      {/* ===== DESKTOP LAYOUT (hidden on mobile, hidden md:block) ===== */}

      {/* DESKTOP: HERO */}
      <section className="hidden md:block pt-20 pb-16 px-40 w-full text-center">
        <HeroPill label="Standard Report" price="4.99" />
        <HeroHeading>
          Get the Property Insights<br />
          You Need—<em className="text-purple-400 not-italic">In Seconds</em>
        </HeroHeading>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
          A fast, reliable snapshot of any property. Ownership, value, and market activity, so you can prospect smarter and move faster.
        </p>

        <button
          onClick={() => {
            const element = document.getElementById('order-form-section');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition text-lg mb-12"
        >
          Get Report — $4.99
        </button>

        <div className="mt-12 w-full bg-slate-900/50 border-l-4 border-purple-600 rounded-lg p-8 mx-40">
          <p className="italic text-slate-300 mb-4">"I walked into my listing presentation with this instead of my usual MLS printouts—and you could feel the difference. It completely changed how the conversation went."</p>
          <div className="text-left ml-48">
            <p className="text-base font-bold text-purple-300 mb-1">Evan Dolmatsky</p>
            <p className="text-xs text-slate-500">Estates Director, The Beverly Hills Estates</p>
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-6">No subscription · Delivered in minutes · PDF format</p>
      </section>

      <div className="hidden md:block px-40"><div className="border-b border-slate-800"></div></div>

      {/* DESKTOP: PRICING */}
      <section className="hidden md:block py-20 px-40 bg-slate-900/50">
        <div className="w-full">
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

      <div className="hidden md:block px-40"><div className="border-b border-slate-800"></div></div>

      {/* DESKTOP: FEATURES */}
      <section className="hidden md:block py-20 px-40">
        <div className="w-full">
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

      <div className="hidden md:block px-40"><div className="border-b border-slate-800"></div></div>

      {/* DESKTOP: TWO COLUMN */}
      <section className="hidden md:block py-16 sm:py-20 px-40">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-start">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">What you can do with it</p>
              <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">Turn Insight Into Action</h3>
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

            <div className="md:col-span-3">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Who it's for</p>
              <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">Built for Speed and Scale</h3>
              <div className="grid grid-cols-2 gap-6">
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

      {/* DESKTOP: YOUR EDGE SECTION */}
      <section className="hidden md:block py-16 sm:py-20 px-40 bg-slate-900/30">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">Your Edge in Every Listing Presentation</h2>
              <ul className="space-y-6 text-slate-300">
                {[
                  {
                    title: 'Built for the Listing, Not Just the Data',
                    desc: 'Walk into every presentation with a clean, client-ready report that elevates how prepared and professional you look.'
                  },
                  {
                    title: 'Save Hours, Not Minutes',
                    desc: 'No more stitching together comps and data—get a complete, polished report in minutes and reclaim valuable time.'
                  },
                  {
                    title: 'Go Beyond MLS with Deeper Insight',
                    desc: 'Access ownership, equity, and positioning insights that help you lead a smarter, more strategic conversation.'
                  },
                  {
                    title: 'Stand Out When It Matters Most',
                    desc: 'While others show up with the same MLS printouts, you show up with something differentiated—giving you a real edge in winning the listing.'
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                The difference between walking in prepared vs. walking in blind isn't just confidence—it's results. Every agent who uses Navigate reports the same thing: conversations change. Sellers feel it. Buyers notice it. And your conversion rates show it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP: COMPARISON TABLE */}
      <section className="hidden md:block py-16 sm:py-20 px-40">
        <div className="w-full">
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

          <div className="mt-8 bg-purple-600/10 border border-purple-600/30 rounded-lg p-6 text-center">
            <p className="text-slate-300 text-sm mb-4">Looking for full financial and ownership intelligence? The Comprehensive Report uncovers what most platforms miss.</p>
            <button
              onClick={() => setCurrentPage('comprehensive')}
              className="text-purple-400 hover:text-purple-300 font-bold text-sm"
            >
              View Comprehensive — $19.99 →
            </button>
            <div className="mt-4 pt-4 border-t border-purple-600/30">
              <button
                onClick={() => {
                  const element = document.getElementById('order-form-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition text-sm"
              >
                Order Standard Report — $4.99 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP: SAMPLE REPORT */}
      <section className="hidden md:block py-16 sm:py-20 px-40 bg-slate-900/30">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Sample report</p>
              <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-white">See What You'll Receive</h3>
              <p className="text-slate-400">A clean PDF delivered straight to your inbox within minutes of submitting.</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="bg-purple-600/30 border-b border-purple-600/50 px-6 py-4 flex justify-between items-center">
                <p className="font-semibold text-white text-sm">Standard Property Report</p>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded">PDF</span>
              </div>

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

      {/* MOBILE: Offer Statement (above form on mobile) */}
      <section className="block md:hidden py-12 px-40 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Get the Standard Report</h2>
          <p className="text-slate-300 mb-2">Fast, accurate property snapshots for prospecting</p>
          <p className="text-3xl font-bold text-purple-400 mb-6">$4.99 per report</p>
          <p className="text-sm text-slate-400 mb-8">Use it for: Quick property qualification, prospect identification, market analysis. Delivered in 5-10 minutes as a PDF.</p>
        </div>
      </section>

      {/* OFFER STATEMENT + FORM (Both Mobile & Desktop at Bottom) */}
      <section id="order-form-section" className="py-20 px-40 sm:px-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-3xl mx-auto">
          {/* DESKTOP: Offer Statement (only desktop, already shown on mobile above) */}
          <div className="hidden md:block mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-lg text-slate-300 mb-2">Get the Standard Report for just</p>
            <p className="text-4xl font-bold text-purple-400 mb-4">$4.99</p>
            <p className="text-slate-400 mb-8">Fast property snapshots for prospecting. Use it to qualify leads, identify opportunities, and analyze your market. Delivered in 5-10 minutes as a PDF.</p>
          </div>

          {/* Form (shown on both mobile & desktop) */}
          <IntakeForm 
            buttonText="Get Report — $4.99"
            defaultChecked={false}
          />
          <p className="text-xs text-slate-500 text-center mt-4">✓ Delivered in 5-10 minutes · ✓ PDF format · ✓ No subscription · ✓ Instant download</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
