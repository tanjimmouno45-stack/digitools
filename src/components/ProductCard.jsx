const tagStyles = {
  bestseller: "bg-orange-100 text-orange-600",
  popular: "bg-purple-100 text-purple-600",
  new: "bg-green-100 text-green-600",
};

const periodLabel = { monthly: "/Mo", yearly: "/Yr", "one-time": "/One-Time" };

export default function ProductCard({ product, inCart, onAdd }) {
  const { name, description, price, period, tag, tagType, features, icon } = product;

  return (
    <div className="card bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
      <div className="card-body p-5 gap-3">
        <div className="flex items-start justify-between">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-lg">{icon}</div>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagStyles[tagType]}`}>{tag}</span>
        </div>

        <h3 className="font-bold text-sm">{name}</h3>
        <p className="text-xs text-slate-500">{description}</p>

        <p>
          <span className="text-xl font-extrabold">${price}</span>
          <span className="text-xs text-slate-400">{periodLabel[period]}</span>
        </p>

        <ul className="space-y-1">
          {features.map((f) => (
            <li key={f} className="text-xs text-slate-600 flex gap-2">
              <span className="text-green-500">✓</span> {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => onAdd(product)}
          disabled={inCart}
          className="btn btn-sm w-full bg-brand hover:bg-purple-700 text-white border-none rounded-full disabled:bg-green-500 disabled:text-white"
        >
          {inCart ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}
