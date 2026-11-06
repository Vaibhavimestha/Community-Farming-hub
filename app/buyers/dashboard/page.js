"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StatCard from "@/components/StatCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  ShoppingBasket,
  Package,
  ShoppingCart,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function BuyerDashboard() {
  return (
    <div className="mt-8 space-y-8">

      <div className="bg-[#1b4332] text-white rounded-2xl p-8">
        <p className="text-[#e9c46a]">YOUR FARM-TO-HOME EXPERIENCE</p>
        <h1 className="text-3xl font-bold mt-3">Discover Freshness!</h1>
        <p className="text-gray-200 mt-3">
          Explore fresh products directly from local farmers.
        </p>
        <Link href="/buyer/marketplace" className="inline-flex bg-[#e9c46a] text-[#1b4332] px-5 py-3 rounded-xl font-bold mt-6">
          Explore Products <ArrowRight size={17} className="ml-2"/>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard title="Available Products" value="120+" icon={ShoppingBasket} color="bg-green-100 text-green-700"/>
        <StatCard title="My Orders" value="05" icon={Package} color="bg-blue-100 text-blue-700"/>
        <StatCard title="Cart Items" value="03" icon={ShoppingCart} color="bg-yellow-100 text-yellow-700"/>
        <StatCard title="Saved Farmers" value="08" icon={Heart} color="bg-pink-100 text-pink-700"/>
      </div>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1b4332]">
            Recommended Products
          </h2>
          <Link href="/buyer/marketplace" className="text-[#40916c] text-sm font-bold">
            View all
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.slice(0, 3).map(p => (
            <ProductCard key={p.id} product={p}/>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="font-bold text-xl text-[#1b4332]">
          Recent Orders
        </h2>
        <p className="text-gray-500 text-sm mt-4">
          Your demo orders will appear here after checkout.
        </p>
        <Link href="/buyer/orders" className="text-[#40916c] text-sm font-bold mt-4 inline-block">
          View My Orders →
        </Link>
      </section>

    </div>
  );
}