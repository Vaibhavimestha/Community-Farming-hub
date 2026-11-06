"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function BuyerMarketplace() {
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-[#1b4332]">
        Explore Marketplace
      </h1>

      <input
        placeholder="Search fresh products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-4 border rounded-xl mt-6 bg-white"
      />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-16 text-gray-500">
          No matching products found.
        </p>
      )}
    </div>
  );
}