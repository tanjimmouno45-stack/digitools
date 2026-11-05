export default function CTA() {
  return (
    <section className="bg-brand text-white text-center py-16 px-4">
      <h2 className="text-3xl font-extrabold">Ready To Transform Your Workflow?</h2>
      <p className="text-sm text-white/80 mt-3 max-w-md mx-auto">
        Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <a href="#products" className="btn btn-sm bg-white text-brand border-none rounded-full px-5 hover:bg-slate-100">
          Explore Products
        </a>
        <a href="#pricing" className="btn btn-sm btn-outline text-white border-white rounded-full px-5 hover:bg-white hover:text-brand">
          View Pricing
        </a>
      </div>
      <p className="text-xs text-white/70 mt-4">14-day free trial • No credit card required • Cancel anytime</p>
    </section>
  );
}
