"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ShoppingCart, MapPin, CheckCircle } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === String(id));
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  if (!product) {
    return <div className="p-10">Product not found.</div>;
  }

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("gt_cart") || "[]");
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("gt_cart", JSON.stringify(cart));
    setMessage("Product added to your demo cart!");
  }

  return (
    <div className="mt-8">

      <Link href="/buyer/marketplace" className="text-[#40916c]">
        ← Back to Marketplace
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6 bg-white p-5 md:p-8 rounded-2xl">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[350px] object-cover rounded-2xl"
        />

        <div className="py-3">
          <span className="bg-[#e8f5e9] text-[#1b4332] px-4 py-2 rounded-full text-sm">
            {product.badge}
          </span>

          <h1 className="text-4xl font-bold text-[#1b4332] mt-7">
            {product.name}
          </h1>

          <p className="text-3xl font-bold mt-5">
            ₹{product.price}
            <span className="text-base font-normal text-gray-500">
              / {product.unit}
            </span>
          </p>

          <p className="text-gray-500 leading-7 mt-5">
            {product.description}
          </p>

          <p className="flex gap-2 mt-5 text-gray-600">
            <MapPin size={18}/> {product.location}
          </p>

          <p className="flex gap-2 mt-3 text-green-700">
            <CheckCircle size={18}/> {product.quantity} {product.unit} available
          </p>

          <p className="mt-4 text-gray-600">
            Farmer: <b>{product.farmer}</b>
          </p>

          <div className="flex gap-4 mt-8 items-center">
            <input
              type="number"
              min="1"
              max={product.quantity}
              value={quantity}
              onChange={e => setQuantity(
                Math.min(product.quantity, Math.max(1, Number(e.target.value)))
              )}
              className="border rounded-xl p-3 w-24"
            />

            <button onClick={addToCart} className="primary-btn">
              <ShoppingCart size={18}/> Add to Cart
            </button>
          </div>

          {message && <p className="text-green-700 mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
}