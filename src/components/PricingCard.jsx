import { Check, X } from 'lucide-react'

export default function PricingCard({ 
  label, 
  price, 
  description, 
  features, 
  featured, 
  actionText,
  onAction
}) {
  return (
    <div className={`rounded-2xl p-8 ${featured ? 'border-2 border-purple-600 bg-slate-800' : 'border border-slate-700 bg-slate-900'}`}>
      {featured && (
        <div className="inline-block bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-lg mb-4">
          You're here
        </div>
      )}
      
      <p className="text-xs font-bold uppercase text-purple-400 mb-3">{label}</p>
      <h3 className="text-3xl font-bold mb-2 text-white">${price}</h3>
      <p className="text-sm text-slate-300 mb-6">{description}</p>

      {actionText && (
        <button
          onClick={onAction}
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg mb-6 transition"
        >
          {actionText}
        </button>
      )}

      <div className="space-y-3">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
            {feature.included ? (
              <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
            ) : (
              <X className="w-4 h-4 text-slate-600 flex-shrink-0" />
            )}
            <span className={feature.included ? 'text-white' : 'text-slate-500'}>{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
