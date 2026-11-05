export default function Banner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span className="inline-block text-[11px] font-semibold text-brand bg-purple-100 px-3 py-1 rounded-full mb-5">
          ✨ New: AI Powered Tools Available
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-sm text-slate-500 mt-4 max-w-md">
          Access premium AI tools, design assets, templates, and productivity software—all in one place.
          Start building faster today.
        </p>
        <div className="flex gap-3 mt-6">
          <a href="#products" className="btn btn-sm bg-brand hover:bg-purple-700 text-white border-none rounded-full px-5">
            Explore Products
          </a>
          <button className="btn btn-sm btn-outline border-brand text-brand hover:bg-brand hover:border-brand rounded-full px-5">
            ▷ Watch Demo
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        {/* Replace this URL with any banner image or put one in /public and use "/banner.png" */}
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
          alt="AI workflow"
          className="rounded-2xl w-full max-w-md h-72 object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
