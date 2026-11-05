const plans = [
  {
    name: "Starter", desc: "Perfect for getting started", price: 0, cta: "Get Started Free", popular: false,
    features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
  },
  {
    name: "Pro", desc: "Best for professionals", price: 29, cta: "Start Pro Trial", popular: true,
    features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
  },
  {
    name: "Enterprise", desc: "For teams and businesses", price: 99, cta: "Contact Sales", popular: false,
    features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "API access", "Custom training"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-5xl mx-auto px-4 py-14">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold">Simple, Transparent Pricing</h2>
        <p className="text-sm text-slate-500 mt-2">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-xl p-6 flex flex-col border ${
              p.popular ? "bg-brand text-white border-transparent shadow-xl md:scale-105" : "bg-slate-50 border-slate-200"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-200 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-bold">{p.name}</h3>
            <p className={`text-xs ${p.popular ? "text-white/80" : "text-slate-500"}`}>{p.desc}</p>
            <p className="my-4">
              <span className="text-3xl font-extrabold">${p.price}</span>
              <span className={`text-xs ${p.popular ? "text-white/80" : "text-slate-400"}`}>/Month</span>
            </p>
            <ul className="space-y-2 flex-1 mb-6">
              {p.features.map((f) => (
                <li key={f} className="text-xs flex gap-2">
                  <span className={p.popular ? "text-white" : "text-green-500"}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`btn btn-sm rounded-full border-none ${
                p.popular ? "bg-white text-brand hover:bg-slate-100" : "bg-brand text-white hover:bg-purple-700"
              }`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
