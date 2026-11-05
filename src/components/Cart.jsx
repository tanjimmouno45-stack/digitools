export default function Cart({ cart, onRemove, onCheckout }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="max-w-3xl mx-auto border border-slate-200 rounded-xl p-5">
      <h3 className="font-bold text-sm mb-4">Your Cart</h3>

      {cart.length === 0 ? (
        <p className="text-center text-sm text-slate-400 py-10">Your cart is empty. Add some products!</p>
      ) : (
        <>
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-slate-500">${item.price}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-xs font-medium text-rose-500 hover:underline">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-sm mt-5 mb-3 px-1">
            <span className="text-slate-500">Total:</span>
            <span className="font-bold">${total}</span>
          </div>

          <button
            onClick={onCheckout}
            className="btn btn-sm w-full bg-brand hover:bg-purple-700 text-white border-none rounded-full"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
}
