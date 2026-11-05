import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

export default function ProductsSection({ products, cart, onAdd, onRemove, onCheckout }) {
  const [tab, setTab] = useState("products"); // default: products

  const tabClass = (active) =>
    `btn btn-sm rounded-full px-6 border-none ${
      active ? "bg-brand text-white hover:bg-purple-700" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
    }`;

  return (
    <section id="products" className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold">Premium Digital Tools</h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
        <div className="flex justify-center gap-2 mt-5">
          <button className={tabClass(tab === "products")} onClick={() => setTab("products")}>Products</button>
          <button className={tabClass(tab === "cart")} onClick={() => setTab("cart")}>Cart ({cart.length})</button>
        </div>
      </div>

      {tab === "products" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} inCart={cart.some((c) => c.id === p.id)} onAdd={onAdd} />
          ))}
        </div>
      ) : (
        <Cart cart={cart} onRemove={onRemove} onCheckout={onCheckout} />
      )}
    </section>
  );
}
