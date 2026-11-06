"use client";

import { useState } from "react";
import { Sprout, Plus } from "lucide-react";

export default function Harvest() {
  const [harvests, setHarvests] = useState([
    { id: 1, crop: "Tomatoes", date: "2026-11-15", quantity: "100 kg" },
    { id: 2, crop: "Spinach", date: "2026-11-20", quantity: "50 kg" },
  ]);

  const [crop, setCrop] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");

  function add(e) {
    e.preventDefault();
    setHarvests([...harvests, {
      id: Date.now(), crop, date, quantity
    }]);
    setCrop("");
    setDate("");
    setQuantity("");
  }

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-[#1b4332]">Harvest Management</h1>
      <p className="text-gray-500 mt-2">Plan your upcoming crop harvests.</p>

      <form onSubmit={add} className="card mt-7 grid sm:grid-cols-3 gap-4">
        <input required value={crop} onChange={e => setCrop(e.target.value)}
          placeholder="Crop name" className="border rounded-xl p-4"/>
        <input required type="date" value={date}
          onChange={e => setDate(e.target.value)}
          className="border rounded-xl p-4"/>
        <input required value={quantity}
          onChange={e => setQuantity(e.target.value)}
          placeholder="Expected quantity"
          className="border rounded-xl p-4"/>
        <button className="primary-btn sm:col-span-3">
          <Plus size={18}/> Add Harvest
        </button>
      </form>

      <div className="grid md:grid-cols-2 gap-5 mt-8">
        {harvests.map(h => (
          <div className="card flex gap-4 items-center" key={h.id}>
            <div className="bg-[#e8f5e9] p-4 rounded-xl">
              <Sprout className="text-[#1b4332]" size={27}/>
            </div>
            <div>
              <h2 className="font-bold text-[#1b4332]">{h.crop}</h2>
              <p className="text-sm text-gray-500 mt-1">Date: {h.date}</p>
              <p className="text-sm text-gray-500">Quantity: {h.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}