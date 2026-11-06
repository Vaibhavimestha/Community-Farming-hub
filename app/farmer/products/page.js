"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Trash2, Pencil } from "lucide-react";
import { products as sampleProducts } from "@/data/products";

export default function FarmerProducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("gt_farmer_products") || "null");
    setItems(saved || sampleProducts.slice(0, 3));
  }, []);

  function save(updated) {
    setItems(updated);
    localStorage.setItem("gt_farmer_products", JSON.stringify(updated));
  }

  function remove(id) {
    save(items.filter(p => p.id !== id));
  }

  function edit(product) {
    const price = prompt("Enter new price:", product.price);
    if (price === null || !Number.isFinite(Number(price)) || Number(price) <= 0) return;

    save(items.map(p =>
      p.id === product.id ? { ...p, price: Number(price) } : p
    ));
  }

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-between gap-4 items-center">
        <h1 className="text-3xl font-bold text-[#1b4332]">My Products</h1>
        <Link href="/farmer/products/add" className="primary-btn">
          <Plus size={18}/> Add Product
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {items.map(p => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name}
              className="w-full h-44 object-cover rounded-xl"/>
            <h2 className="font-bold text-xl mt-4 text-[#1b4332]">{p.name}</h2>
            <p className="text-gray-500 mt-2">₹{p.price}/{p.unit}</p>
            <p className="text-sm text-gray-500 mt-2">
              Available: {p.quantity} {p.unit}
            </p>

            <div className="flex gap-3 mt-5">
              <button onClick={() => edit(p)}
                className="flex-1 bg-[#e8f5e9] text-[#1b4332] p-3 rounded-xl">
                <Pencil size={16} className="inline mr-2"/> Edit
              </button>
              <button onClick={() => remove(p.id)}
                className="bg-red-50 text-red-600 p-3 rounded-xl"
                aria-label="Delete product">
                <Trash2 size={18}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}