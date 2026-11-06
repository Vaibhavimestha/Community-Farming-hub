import Link from "next/link";
import StatCard from "@/components/StatCard";
import {
  Package,
  ShoppingBasket,
  IndianRupee,
  Sprout,
  Plus,
  ArrowRight,
} from "lucide-react";

export default function FarmerDashboard() {
  return (
    <div className="mt-8 space-y-8">

      <div className="bg-[#1b4332] text-white rounded-2xl p-8">
        <p className="text-[#e9c46a]">FARM MANAGEMENT</p>
        <h1 className="text-3xl font-bold mt-3">
          Welcome to Your Farm!
        </h1>
        <p className="text-gray-300 mt-3">
          Manage your products, orders and harvest activities.
        </p>
        <Link href="/farmer/products/add"
          className="inline-flex bg-[#e9c46a] text-[#1b4332] px-5 py-3 rounded-xl font-bold mt-6">
          <Plus size={18} className="mr-2"/> Add New Product
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard title="Listed Products" value="12" icon={Package} color="bg-green-100 text-green-700"/>
        <StatCard title="Active Listings" value="10" icon={ShoppingBasket} color="bg-blue-100 text-blue-700"/>
        <StatCard title="Demo Orders" value="28" icon={Sprout} color="bg-yellow-100 text-yellow-700"/>
        <StatCard title="Sample Revenue" value="₹18,500" icon={IndianRupee} color="bg-purple-100 text-purple-700"/>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="card">
          <h2 className="font-bold text-xl text-[#1b4332]">
            Quick Actions
          </h2>
          <div className="space-y-4 mt-6">
            <Link href="/farmer/products/add" className="flex justify-between p-4 bg-[#edf5ec] rounded-xl">
              Add Product <ArrowRight/>
            </Link>
            <Link href="/farmer/products" className="flex justify-between p-4 bg-[#edf5ec] rounded-xl">
              Manage Products <ArrowRight/>
            </Link>
            <Link href="/farmer/orders" className="flex justify-between p-4 bg-[#edf5ec] rounded-xl">
              View Orders <ArrowRight/>
            </Link>
            <Link href="/farmer/harvest" className="flex justify-between p-4 bg-[#edf5ec] rounded-xl">
              Manage Harvest <ArrowRight/>
            </Link>
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-xl text-[#1b4332]">Upcoming Harvest</h2>
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700"
            alt="Green agricultural field"
            className="w-full h-44 rounded-xl object-cover mt-5"
          />
          <p className="font-bold mt-4">Tomato Harvest</p>
          <p className="text-sm text-gray-500 mt-2">
            Expected quantity: 100 kg
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Planned date: 15 November 2026
          </p>
        </div>
      </div>

      <div className="card">
        <h2 className="font-bold text-xl text-[#1b4332]">Recent Activity</h2>
        <p className="text-gray-500 mt-4 text-sm">
          Your product listings and demo order activity will be displayed here.
        </p>
      </div>
    </div>
  );
}