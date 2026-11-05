const columns = [
  { title: "Product", items: ["Features", "Pricing", "Templates", "Integrations"] },
  { title: "Company", items: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", items: ["Documentation", "Help Center", "Community", "Contact"] },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <h3 className="text-xl font-extrabold text-white">DigiTools</h3>
          <p className="text-xs text-slate-400 mt-3 max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <h4 className="text-white text-xs font-bold mb-3">{c.title}</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white text-xs font-bold mb-3">Social Links</h4>
          <div className="flex gap-2">
            {["f", "in", "𝕏"].map((s) => (
              <a key={s} href="#" className="w-6 h-6 rounded-full bg-white text-slate-900 text-[10px] font-bold flex items-center justify-center">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pt-5 border-t border-slate-700 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-slate-500">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
