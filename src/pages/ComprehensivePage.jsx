import { useState } from 'react'
import HeroPill from '../components/HeroPill'
import HeroHeading from '../components/HeroHeading'
import IntakeForm from '../components/IntakeForm'
import PricingCard from '../components/PricingCard'
import SectionLabel from '../components/SectionLabel'
import Footer from '../components/Footer'

export default function ComprehensivePage({ setCurrentPage }) {
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
      quote: "For serious deal analysis, this is the only tool I trust. The financial data is comprehensive and the AI signals actually work.",
      author: "David Park",
      title: "Park Investments LLC",
      initials: "DP"
    },
    {
      quote: "Our whole investment team uses Navigate now. The equity and debt signals save us thousands in bad deals. Worth every penny.",
      author: "Lisa Thompson",
      title: "Thompson Capital Partners",
      initials: "LT"
    }
  ]

  const faqs = [
    {
      question: "How is this different from the Standard Report?",
      answer: "The Standard Report covers the basics (property, owner, value). The Comprehensive Report adds the financial picture: mortgage data, liens, full transaction history, and AI-powered investment signals to identify motivated sellers."
    },
    {
      question: "When should I use Standard vs Comprehensive?",
      answer: "Use Standard ($4.99) for initial prospecting and quick qualification. Use Comprehensive ($19.99) for serious analysis, investment decisions, or when you've identified a promising lead."
    },
    {
      question: "How fast is delivery?",
      answer: "Your report is delivered within 5-10 minutes of submitting the property address. You'll get a PDF email you can download, share with clients, or use in presentations."
    },
    {
      question: "Can I use this for investment underwriting?",
      answer: "Absolutely. This report is designed for investors. You get full equity, debt, lien data, transaction history, and AI opportunity signals—everything you need to underwrite a deal."
    },
    {
      question: "How accurate is the financial data?",
      answer: "We pull from recorded public documents and verified databases. All mortgage, lien, and equity data is cross-referenced and current. Each data point includes a confidence rating."
    }
  ]

  return (
    <div className="bg-slate-950">
      {/* ===== MOBILE LAYOUT (shown only on mobile, md:hidden) ===== */}

      {/* MOBILE: HERO (No Form - moved to bottom) */}
      <section className="block md:hidden pt-16 pb-12 px-40 mx-auto">
        <div className="text-center">
          <HeroPill label="Comprehensive Report" price="19.99" />
          <HeroHeading>
            See Everything<br />
            Behind the Property—<em className="text-purple-400 not-italic">In Seconds</em>
          </HeroHeading>
          <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8">
            Ownership, equity, debt, and opportunity. Fully mapped in one report designed for serious decision-making.
          </p>

          <button
            onClick={() => {
              const element = document.getElementById('order-form-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Get Full Report — $19.99
          </button>
        </div>
      </section>

      {/* MOBILE: SOCIAL PROOF */}
      <section className="block md:hidden py-12 px-40 bg-slate-900/50">
        <div className="mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-purple-400 mb-8">Trusted by investors, agents & teams</p>
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

      {/* MOBILE: WHY COMPREHENSIVE */}
      <section className="block md:hidden py-16 px-40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-purple-400 font-bold uppercase tracking-widest mb-4">Why Comprehensive Matters</p>
          <h2 className="text-2xl font-bold mb-6 text-white">
            The Difference <em className="text-purple-400 not-italic">Is Depth</em>
          </h2>
          <p className="text-slate-300 text-sm">
            Most property tools show surface-level data. This report reveals the full financial and ownership picture—equity, debt, liens, transaction history, and AI-powered opportunity signals—so you can act with precision, not guesswork.
          </p>
        </div>
      </section>

      {/* MOBILE: HOW IT WORKS */}
      <section className="block md:hidden py-16 px-40 bg-slate-900/50">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              { step: '1', title: 'Enter Address', desc: 'Type in any property address' },
              { step: '2', title: 'Full Analysis', desc: 'Complete financial & ownership picture (5-10 min)' },
              { step: '3', title: 'Make Decisions', desc: 'Use AI insights to underwrite & act' },
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

      {/* MOBILE: WHAT'S INCLUDED */}
      <section className="block md:hidden py-16 px-40">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">What's Included</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <p className="text-lg font-bold text-white mb-4">Financial Data</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Mortgage & loan details</li>
                <li>✓ Exact equity position</li>
                <li>✓ Liens & encumbrances</li>
                <li>✓ Full transaction history</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <p className="text-lg font-bold text-white mb-4">AI Signals</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Motivation scoring</li>
                <li>✓ Opportunity signals</li>
                <li>✓ Investment insights</li>
                <li>✓ Risk assessment</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentPage('standard')}
              className="text-purple-400 hover:text-purple-300 text-sm font-bold"
            >
              Need something simpler? Try Standard Report ($4.99) →
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('order-form-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block mx-auto mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition text-sm"
            >
              Get Full Report — $19.99
            </button>
          </div>
        </div>
      </section>

      {/* MOBILE: SAMPLE REPORT */}
      <section className="block md:hidden py-16 px-40 bg-slate-900/50">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">See What You'll Receive</h2>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <p className="text-sm text-slate-400 mb-4">A complete, investor-grade PDF delivered to your inbox within minutes. Everything you need to underwrite a deal and make smart offers.</p>
              <ul className="space-y-3 text-slate-300 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Property specs & ownership
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Valuation & market trends
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Mortgage & equity details
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Liens & encumbrances
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> AI opportunity scoring
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="bg-purple-600/30 border-b border-purple-600/50 px-6 py-3 flex justify-between items-center">
                <p className="font-semibold text-white text-xs">Comprehensive Property Report</p>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded">Full</span>
              </div>
              <div className="p-6 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="uppercase text-slate-500 font-bold mb-1">Est. Value</p>
                    <p className="text-white font-bold">$1.42M</p>
                  </div>
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="uppercase text-slate-500 font-bold mb-1">Equity</p>
                    <p className="text-white font-bold">$680K</p>
                  </div>
                </div>
                <div>
                  <p className="uppercase text-slate-500 font-bold mb-1">Mortgage Balance</p>
                  <p className="text-white font-semibold">$740,000 <span className="text-slate-500 text-xs">· 2 active loans</span></p>
                </div>
                <div>
                  <p className="uppercase text-slate-500 font-bold mb-1">Liens on Title</p>
                  <p className="text-red-400 font-semibold">1 lien · $24,500 <span className="bg-orange-900/40 text-orange-300 text-xs px-2 py-1 rounded">Contractor</span></p>
                </div>
                <div>
                  <p className="uppercase text-slate-500 font-bold mb-1">AI Signal</p>
                  <div className="bg-slate-800/50 rounded h-2 overflow-hidden mb-1">
                    <div className="bg-teal-500 h-full" style={{ width: '84%' }}></div>
                  </div>
                  <p className="text-teal-400 font-semibold">High motivation • equity-rich + lien</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE: PRICING */}
      <section className="block md:hidden py-16 px-40">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 gap-8">
            <PricingCard
              label="Standard Report"
              price="4.99"
              description="Fast property snapshot for prospecting."
              features={standardFeatures.slice(0, 4)}
              actionText="Compare →"
              onAction={() => setCurrentPage('standard')}
            />
            <PricingCard
              label="Comprehensive Report"
              price="19.99"
              description="Full financial & ownership intelligence."
              features={comprehensiveFeatures.slice(0, 3)}
              featured={true}
            />
          </div>
        </div>
      </section>

      {/* MOBILE: FAQ */}
      <section className="block md:hidden py-16 px-40 bg-slate-900/50">
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
          <p className="text-sm text-slate-300">If your report doesn't deliver the insights you need within 7 days, we'll refund your purchase. No questions asked.</p>
        </div>
      </section>

      {/* ===== DESKTOP LAYOUT (hidden on mobile, hidden md:block) ===== */}

      {/* DESKTOP: HERO */}
      <section className="hidden md:block pt-20 pb-16 px-40 mx-auto text-center">
        <HeroPill label="Comprehensive Report" price="19.99" />
        <HeroHeading>
          See Everything<br />
          Behind the Property—<em className="text-purple-400 not-italic">In Seconds</em>
        </HeroHeading>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
          Ownership, equity, debt, and opportunity. Fully mapped in one report designed for serious decision-making.
        </p>

        <button
          onClick={() => {
            const element = document.getElementById('order-form-section');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition text-lg mb-12"
        >
          Get Full Report — $19.99
        </button>

        <div className="mt-12 w-full bg-slate-900/50 border-l-4 border-purple-600 rounded-lg p-8 mx-40">
          <p className="italic text-slate-300 mb-4 ml-48">"I walked into my listing presentation with this instead of my usual MLS printouts—and you could feel the difference. It completely changed how the conversation went."</p>
          <div className="text-left ml-48">
            <p className="text-base font-bold text-purple-300 mb-1">Evan Dolmatsky</p>
            <p className="text-xs text-slate-500">Estates Director, The Beverly Hills Estates</p>
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-6">Investor-grade insights · On demand · No subscription</p>
      </section>


      {/* DESKTOP: PRICING */}
      <section className="hidden md:block py-20 px-40 bg-slate-900/50">
        <div className="mx-auto">
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


      {/* DESKTOP: WHY BAND */}
      <section className="hidden md:block py-20 px-6 text-center bg-slate-900">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Why it matters</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          The Difference <em className="text-purple-400 not-italic">Is Depth</em>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Most property tools show surface-level data. This report reveals the full financial and ownership picture, so you can act with precision, not guesswork.
        </p>
      </section>

      <div className="hidden md:block px-40"><div className="border-b border-slate-800"></div></div>

      {/* DESKTOP: TWO COLUMN SECTION */}
      <section className="hidden md:block py-16 sm:py-20 px-40">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-start">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">What you can do with it</p>
              <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">Make Better Decisions, Faster</h3>
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

            <div className="md:col-span-3">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Who it's for</p>
              <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">Built for High-Stakes Decisions</h3>
              <div className="grid grid-cols-2 gap-6">
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

      {/* DESKTOP: YOUR EDGE SECTION */}
      <section className="hidden md:block py-16 sm:py-20 px-40 bg-slate-900/30">
        <div className="mx-auto">
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

      <div className="hidden md:block px-40"><div className="border-b border-slate-800"></div></div>

      {/* DESKTOP: COMPARISON TABLE */}
      <section className="hidden md:block py-16 sm:py-20 px-40">
        <div className="mx-auto">
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

          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentPage('standard')}
              className="text-purple-400 hover:text-purple-300 font-bold text-sm"
            >
              Need something simpler? Try Standard Report ($4.99) →
            </button>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <button
                onClick={() => {
                  const element = document.getElementById('order-form-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition text-sm"
              >
                Order Comprehensive Report — $19.99 →
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden md:block px-40"><div className="border-b border-slate-800"></div></div>

      {/* DESKTOP: SAMPLE REPORT */}
      <section className="hidden md:block py-16 sm:py-20 px-40 bg-slate-900/30">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Sample report</p>
              <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-white">A Complete View, One Report</h3>
              <p className="text-slate-400">Delivered as a PDF directly to your inbox within minutes.</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="bg-purple-600/30 border-b border-purple-600/50 px-6 py-4 flex justify-between items-center">
                <p className="font-semibold text-white text-sm">Comprehensive Property Report</p>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded">Full</span>
              </div>

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

      {/* MOBILE: Offer Statement (above form on mobile) */}
      <section className="block md:hidden py-12 px-40 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Get the Comprehensive Report</h2>
          <p className="text-slate-300 mb-2">Full financial & ownership intelligence for serious decisions</p>
          <p className="text-3xl font-bold text-purple-400 mb-6">$19.99 per report</p>
          <p className="text-sm text-slate-400 mb-8">Use it for: Investment underwriting, motivated seller identification, deal analysis, risk assessment. Delivered in 5-10 minutes as a PDF.</p>
        </div>
      </section>

      {/* OFFER STATEMENT + FORM (Both Mobile & Desktop at Bottom) */}
      <section id="order-form-section" className="py-20 px-40 sm:px-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-3xl mx-auto">
          {/* DESKTOP: Offer Statement (only desktop, already shown on mobile above) */}
          <div className="hidden md:block mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Underwrite Smarter?</h2>
            <p className="text-lg text-slate-300 mb-2">Get the Comprehensive Report for just</p>
            <p className="text-4xl font-bold text-purple-400 mb-4">$19.99</p>
            <p className="text-slate-400 mb-8">Full financial & ownership intelligence. Use it to underwrite deals, identify motivated sellers, analyze risk, and make investment decisions with confidence. Delivered in 5-10 minutes as a PDF.</p>
          </div>

          {/* Form (shown on both mobile & desktop) */}
          <IntakeForm 
            buttonText="Get Full Report — $19.99"
            defaultChecked={true}
          />
          <p className="text-xs text-slate-500 text-center mt-4">✓ Delivered in 5-10 minutes · ✓ PDF format · ✓ No subscription · ✓ Instant download</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
