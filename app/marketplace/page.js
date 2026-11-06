"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Search, SlidersHorizontal } from "lucide-react";

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(500);

  const categories = [
    "All",
    "Vegetables",
    "Leafy Vegetables",
    "Fruits",
  ];

  const filtered = useMemo(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category) &&
      p.price <= maxPrice
    );

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [search, category, sort, maxPrice]);

  return (
    <>
      <Navbar/>

      <section className="bg-[#1b4332] text-white py-16">
        <div className="container-main">
          <p className="text-[#e9c46a] font-bold">FRESH FROM LOCAL FARMS</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            Explore Fresh Products
          </h1>
          <p className="text-gray-300 mt-4">
            Discover fresh agricultural products directly from farmers.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">

          <div className="bg-white rounded-2xl p-5 shadow-sm grid md:grid-cols-3 gap-4">

            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={19}/>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="border w-full rounded-xl pl-12 p-4"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-xl p-4"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border rounded-xl p-4"
            >
              <option value="default">Sort: Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>

            <div className="md:col-span-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2">
                  <SlidersHorizontal size={16}/> Maximum price
                </span>
                <span className="font-bold">₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min="25"
                max="500"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#40916c]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-5 py-3 rounded-full text-sm font-semibold ${
                  category === c
                    ? "bg-[#1b4332] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-10 mb-6">
            <h2 className="text-2xl font-bold text-[#1b4332]">
              Available Products
            </h2>
            <p className="text-gray-500">{filtered.length} products</p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl">
              <Search size={40} className="mx-auto text-gray-400"/>
              <h3 className="text-xl font-bold mt-4">No products found</h3>
              <p className="text-gray-500 mt-2">
                Try changing your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setMaxPrice(500);
                  setSort("default");
                }}
                className="primary-btn mt-5"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

      <Footer/>
    </>
  );
}