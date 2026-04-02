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
      quote: "I purchased the comprehensive report and spoke to a Navigate sales rep and it unlocked so much more value — I was able to spot signals that I otherwise would have missed.",
      author: "Brooke Winner",
      title: "The Beverly Hills Estates",
      initials: "BW"
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
      {/* HERO + FORM (Above Fold) */}
      <section className="pt-16 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <HeroPill label="Standard Report" price="4.99" />
          <HeroHeading>
            Get the Property Insights<br />
            You Need—<em className="text-purple-400 not-italic">In Seconds</em>
          </HeroHeading>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            A fast, reliable snapshot of any property. Ownership, value, and market activity, so you can prospect smarter and move faster.
          </p>
        </div>

        {/* Form (High Priority) */}
        <div className="max-w-2xl mx-auto mb-8">
          <IntakeForm 
            buttonText="Get Report — $4.99"
            defaultChecked={false}
          />
          <p className="text-xs text-slate-500 text-center mt-4">✓ Delivered in 5-10 minutes · ✓ PDF format · ✓ No subscription</p>
        </div>
      </section>

      {/* SOCIAL PROOF - Multiple Testimonials */}
      <section className="py-12 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-purple-400 mb-8">Trusted by agents, teams & investors</p>
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

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* WHAT'S INCLUDED (Simplified) */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              Need more? See Comprehensive Report ($19.99) →
            </button>
          </div>
        </div>
      </section>

      {/* SAMPLE REPORT */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">See What You'll Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-sm text-slate-400 mb-4">A clean, professional PDF delivered to your inbox within minutes. Everything you need to qualify the property and move forward.</p>
              <ul className="space-y-3 text-slate-300 text-sm">
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

            {/* Right: Mock Report */}
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

      {/* PRICING */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
              features={comprehensiveFeatures}
              actionText="Compare →"
              onAction={() => setCurrentPage('comprehensive')}
            />
          </div>
        </div>
      </section>

      {/* FAQ / OBJECTION HANDLING */}
      <section className="py-16 px-4 sm:px-6">
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
          <p className="text-sm text-slate-300">If your report doesn't deliver the insights you expected within 7 days, we'll refund your purchase. No questions asked.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <IntakeForm 
            buttonText="Get Report — $4.99"
            defaultChecked={false}
          />
          <p className="text-xs text-slate-500 mt-4">Delivered in minutes · No subscription · Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
