import { useState } from 'react'
import HeroPill from '../components/HeroPill'
import HeroHeading from '../components/HeroHeading'
import IntakeForm from '../components/IntakeForm'
import PricingCard from '../components/PricingCard'
import Footer from '../components/Footer'

export default function ComprehensivePage({ setCurrentPage }) {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const standardFeatures = [
    { name: 'Property overview', included: true },
    { name: 'Ownership snapshot', included: true },
    { name: 'Valuation insights', included: true },
    { name: 'Market trends', included: true },
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
      quote: "I purchased the comprehensive report and spoke to a Navigate sales rep and it unlocked so much more value — I was able to spot signals that I otherwise would have missed.",
      author: "Brooke Winner",
      title: "The Beverly Hills Estates",
      initials: "BW"
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
      {/* HERO + FORM (Above Fold) */}
      <section className="pt-16 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <HeroPill label="Comprehensive Report" price="19.99" />
          <HeroHeading>
            See Everything<br />
            Behind the Property—<em className="text-purple-400 not-italic">In Seconds</em>
          </HeroHeading>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Ownership, equity, debt, and opportunity. Fully mapped in one report designed for serious decision-making.
          </p>
        </div>

        {/* Form (High Priority) */}
        <div className="max-w-2xl mx-auto mb-8">
          <IntakeForm 
            buttonText="Get Full Report — $19.99"
            defaultChecked={true}
          />
          <p className="text-xs text-slate-500 text-center mt-4">✓ Delivered in 5-10 minutes · ✓ PDF format · ✓ No subscription</p>
        </div>
      </section>

      {/* SOCIAL PROOF - Multiple Testimonials */}
      <section className="py-12 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-purple-400 mb-8">Trusted by investors, agents & teams</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* WHY COMPREHENSIVE */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-purple-400 font-bold uppercase tracking-widest mb-4">Why Comprehensive Matters</p>
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-white">
            The Difference <em className="text-purple-400 not-italic">Is Depth</em>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Most property tools show surface-level data. This report reveals the full financial and ownership picture—equity, debt, liens, transaction history, and AI-powered opportunity signals—so you can act with precision, not guesswork.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* WHAT'S INCLUDED (Simplified) */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* SAMPLE REPORT */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">See What You'll Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-sm text-slate-400 mb-4">A complete, investor-grade PDF delivered to your inbox within minutes. Everything you need to underwrite a deal and make smart offers.</p>
              <ul className="space-y-3 text-slate-300 text-sm">
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

            {/* Right: Mock Report */}
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

      {/* PRICING */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PricingCard
              label="Standard Report"
              price="4.99"
              description="Fast property snapshot for prospecting."
              features={standardFeatures}
              actionText="Compare →"
              onAction={() => setCurrentPage('standard')}
            />
            <PricingCard
              label="Comprehensive Report"
              price="19.99"
              description="Full financial & ownership intelligence."
              features={comprehensiveFeatures}
              featured={true}
            />
          </div>
        </div>
      </section>

      {/* FAQ / OBJECTION HANDLING */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Common Questions</h2>
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

      {/* GUARANTEE / RISK REVERSAL */}
      <section className="py-12 px-4 sm:px-6 bg-purple-600/10 border-t border-b border-purple-600/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-bold text-white mb-2">📋 100% Satisfaction Guarantee</p>
          <p className="text-sm text-slate-300">If your report doesn't deliver the insights you need within 7 days, we'll refund your purchase. No questions asked.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Ready to Underwrite Smarter?</h2>
          <IntakeForm 
            buttonText="Get Full Report — $19.99"
            defaultChecked={true}
          />
          <p className="text-xs text-slate-500 mt-4">Delivered in minutes · No subscription · Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
