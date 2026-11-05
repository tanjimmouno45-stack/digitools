const links = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="navbar max-w-6xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm px-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
              {links.map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <a href="#" className="text-xl font-extrabold text-brand">DigiTools</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-7 text-xs font-medium text-slate-700">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-brand">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <div className="indicator">
            {cartCount > 0 && (
              <span className="indicator-item badge badge-xs bg-brand text-white border-none">{cartCount}</span>
            )}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3a1 1 0 00.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <a className="text-xs font-medium hidden sm:block cursor-pointer">Login</a>
          <button className="btn btn-sm bg-brand hover:bg-purple-700 text-white border-none rounded-full px-5">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
