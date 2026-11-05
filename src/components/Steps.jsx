const steps = [
  { n: "01", icon: "👤", title: "Create Account", text: "Sign up for free in seconds. No credit card required to get started." },
  { n: "02", icon: "📦", title: "Choose Products", text: "Browse our catalog and select the tools that fit your workflow." },
  { n: "03", icon: "🚀", title: "Start Creating", text: "Download and start using your premium tools instantly." },
];

export default function Steps() {
  return (
    <section id="features" className="bg-slate-50 py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Get Started In 3 Steps</h2>
          <p className="text-sm text-slate-500 mt-2">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-white border border-slate-200 rounded-xl p-6 text-center">
              <span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-brand text-white text-[10px] font-bold flex items-center justify-center">
                {s.n}
              </span>
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-sm">{s.title}</h3>
              <p className="text-xs text-slate-500 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
