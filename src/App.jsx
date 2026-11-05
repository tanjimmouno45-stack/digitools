import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import productsData from "./data/products.json";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductsSection from "./components/ProductsSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((p) => p.id === product.id)) {
      toast.info(`${product.name} is already in your cart`);
      return;
    }
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    const item = cart.find((p) => p.id === id);
    setCart((prev) => prev.filter((p) => p.id !== id));
    toast.error(`${item?.name} removed from cart`);
  };

  const checkout = () => {
    if (cart.length === 0) {
      toast.warn("Your cart is empty");
      return;
    }
    setCart([]);
    toast.success("Checkout successful! Thank you for your purchase.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <ProductsSection
        products={productsData}
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}
