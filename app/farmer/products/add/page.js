"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    category: "Vegetables",
    description: "",
    price: "",
    quantity: "",
    unit: "kg",
    harvestDate: "",
  });

  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800"
  );

  function submit(e) {
    e.preventDefault();

    const product = {
      ...form,
      id: Date.now().toString(),
      price: Number(form.price),
      quantity: Number(form.quantity),
      farmer: "Ramesh Gowda",
      location: "Karnataka",
      badge: "Fresh",
      image,
    };

    const items = JSON.parse(
      localStorage.getItem("gt_farmer_products") || "null"
    ) || [];

    items.push(product);

    localStorage.setItem("gt_farmer_products", JSON.stringify(items));

    router.push("/farmer/products");
  }

  return (
    <div className="mt-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-[#1b4332]">Add New Product</h1>
      <p className="text-gray-500 mt-2">Create a new farm product listing.</p>

      <form onSubmit={submit} className="card mt-7 grid sm:grid-cols-2 gap-5">

        <div className="sm:col-span-2">
          <label className="font-semibold">Product Name</label>
          <input required value={form.name}
            onChange={e => setForm({...form, name:e.target.value})}
            className="w-full border rounded-xl p-4 mt-2"/>
        </div>

        <div>
          <label className="font-semibold">Category</label>
          <select value={form.category}
            onChange={e => setForm({...form, category:e.target.value})}
            className="w-full border rounded-xl p-4 mt-2">
            <option>Vegetables</option>
            <option>Leafy Vegetables</option>
            <option>Fruits</option>
            <option>Grains</option>
            <option>Seeds</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Price (₹)</label>
          <input type="number" min="1" required value={form.price}
            onChange={e => setForm({...form, price:e.target.value})}
            className="w-full border rounded-xl p-4 mt-2"/>
        </div>

        <div>
          <label className="font-semibold">Available Quantity</label>
          <input type="number" min="1" required value={form.quantity}
            onChange={e => setForm({...form, quantity:e.target.value})}
            className="w-full border rounded-xl p-4 mt-2"/>
        </div>

        <div>
          <label className="font-semibold">Unit</label>
          <select value={form.unit}
            onChange={e => setForm({...form, unit:e.target.value})}
            className="w-full border rounded-xl p-4 mt-2">
            <option>kg</option>
            <option>dozen</option>
            <option>bunch</option>
            <option>box</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="font-semibold">Description</label>
          <textarea required rows="4" value={form.description}
            onChange={e => setForm({...form, description:e.target.value})}
            className="w-full border rounded-xl p-4 mt-2"/>
        </div>

        <div>
          <label className="font-semibold">Harvest Date</label>
          <input type="date" value={form.harvestDate}
            onChange={e => setForm({...form, harvestDate:e.target.value})}
            className="w-full border rounded-xl p-4 mt-2"/>
        </div>

        <div>
          <label className="font-semibold">Product Image URL</label>
          <input type="url" value={image}
            onChange={e => setImage(e.target.value)}
            className="w-full border rounded-xl p-4 mt-2"/>
        </div>

        <button className="primary-btn sm:col-span-2">
          Save Product
        </button>

      </form>
    </div>
  );
}