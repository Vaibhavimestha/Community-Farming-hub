
"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Tractor,
  Droplets,
  Sprout,
  Plus,
  Search,
  MapPin,
  CalendarDays,
  X,
  Wrench,
} from "lucide-react";

const initialEquipment = [
  {
    id: 1,
    name: "Farm Tractor",
    category: "Tractors",
    price: 1200,
    location: "Udupi",
    owner: "Ramesh",
    available: "Available now",
    icon: "tractor",
  },
  {
    id: 2,
    name: "Water Pump",
    category: "Irrigation",
    price: 400,
    location: "Kundapura",
    owner: "Suresh",
    available: "Available now",
    icon: "water",
  },
  {
    id: 3,
    name: "Seed Drill",
    category: "Planting",
    price: 700,
    location: "Mangalore",
    owner: "Mahesh",
    available: "Available now",
    icon: "seed",
  },
];

const icons = {
  tractor: Tractor,
  water: Droplets,
  seed: Sprout,
};

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState(initialEquipment);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    category: "Tractors",
    price: "",
    location: "",
    owner: "",
  });

  useEffect(() => {
    try {
      const savedEquipment = JSON.parse(
        localStorage.getItem("growEquipment") || "null"
      );
      const savedRequests = JSON.parse(
        localStorage.getItem("growEquipmentRequests") || "[]"
      );

      if (savedEquipment) {
        setEquipment([...initialEquipment, ...savedEquipment]);
      }

      setRequests(savedRequests);
    } catch {
      setEquipment(initialEquipment);
      setRequests([]);
    }
  }, []);

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  function handleAddEquipment(e) {
    e.preventDefault();

    const newItem = {
      ...form,
      id: Date.now(),
      price: Number(form.price),
      available: "Available now",
      icon: "tractor",
    };

    const updated = [...equipment, newItem];

    setEquipment(updated);
    localStorage.setItem(
      "growEquipment",
      JSON.stringify(updated.filter((item) => item.id !== 1 && item.id !== 2 && item.id !== 3))
    );

    setForm({
      name: "",
      category: "Tractors",
      price: "",
      location: "",
      owner: "",
    });

    setShowForm(false);
    setMessage("Equipment added successfully!");
  }

  function handleRequest(item) {
    const newRequest = {
      id: Date.now(),
      equipment: item.name,
      owner: item.owner,
      location: item.location,
      status: "Pending",
    };

    const updated = [...requests, newRequest];

    setRequests(updated);
    localStorage.setItem(
      "growEquipmentRequests",
      JSON.stringify(updated)
    );

    setMessage("Equipment request submitted successfully!");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF9F3]">
        <section className="bg-[#1B4332] text-white py-10">
          <div className="container-main">
            <p className="text-green-200 text-xs font-semibold uppercase tracking-wider">
              GrowTogether Community
            </p>

            <h1 className="text-3xl font-bold mt-2">
              Farm Equipment Sharing
            </h1>

            <p className="text-green-100 text-sm mt-3 max-w-xl">
              Share farming equipment with nearby farmers.
              Reduce costs and support your farming community.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="mt-5 bg-[#E9C46A] text-[#1B4332] rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2"
            >
              <Plus size={17} />
              List Your Equipment
            </button>
          </div>
        </section>

        <section className="container-main py-8">
          {message && (
            <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-5 text-sm flex justify-between">
              {message}
              <button onClick={() => setMessage("")}>
                <X size={16} />
              </button>
            </div>
          )}

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#1B4332]">
                Available Equipment
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Find tools and machinery shared by farmers.
              </p>
            </div>

            <div className="relative md:w-64">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={17}
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search equipment or location"
                className="form-input pl-10 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["All", "Tractors", "Irrigation", "Planting", "Harvesting"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold ${
                    category === item
                      ? "bg-[#1B4332] text-white"
                      : "bg-white text-gray-600 border"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredEquipment.map((item) => {
              const Icon = icons[item.icon] || Wrench;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-green-100 overflow-hidden"
                >
                  <div className="h-32 bg-[#E8F1E8] flex items-center justify-center">
                    <Icon size={55} className="text-[#40916C]" />
                  </div>

                  <div className="p-4">
                    <span className="text-xs text-green-700 font-semibold">
                      {item.category}
                    </span>

                    <h3 className="text-lg font-bold text-[#1B4332] mt-1">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-2">
                      Owner: {item.owner}
                    </p>

                    <p className="text-xs text-gray-500 mt-2 flex gap-1 items-center">
                      <MapPin size={14} />
                      {item.location}
                    </p>

                    <p className="text-xs text-green-700 mt-2">
                      {item.available}
                    </p>

                    <div className="border-t mt-4 pt-3 flex items-center justify-between">
                      <p className="font-bold text-[#1B4332]">
                        ₹{item.price}
                        <span className="text-xs text-gray-500 font-normal">
                          /day
                        </span>
                      </p>

                      <button
                        onClick={() => handleRequest(item)}
                        className="bg-[#1B4332] text-white px-3 py-2 rounded-lg text-xs"
                      >
                        Request
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12 text-gray-500 text-sm">
              No equipment found. Try another search.
            </div>
          )}

          <section className="mt-10 bg-white border rounded-xl p-5">
            <h2 className="text-lg font-bold text-[#1B4332]">
              My Equipment Requests
            </h2>

            {requests.length === 0 ? (
              <p className="text-sm text-gray-500 mt-3">
                You haven't requested any equipment yet.
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                {requests.map((request) => (
                  <div
                    key={request.id}
                    className="border rounded-lg p-3 flex justify-between gap-3"
                  >
                    <div>
                      <p className="font-semibold text-sm">
                        {request.equipment}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Owner: {request.owner} · {request.location}
                      </p>
                    </div>

                    <span className="text-xs text-yellow-700">
                      {request.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </section>
      </main>

      {showForm && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
          <form
            onSubmit={handleAddEquipment}
            className="bg-white rounded-xl p-5 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#1B4332]">
                List Your Equipment
              </h2>

              <button
                type="button"
                onClick={() => setShowForm(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <input
                required
                placeholder="Equipment name"
                className="form-input text-sm"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <select
                className="form-input text-sm"
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              >
                <option>Tractors</option>
                <option>Irrigation</option>
                <option>Planting</option>
                <option>Harvesting</option>
              </select>

              <input
                required
                type="number"
                min="1"
                placeholder="Rental price per day (₹)"
                className="form-input text-sm"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />

              <input
                required
                placeholder="Your location"
                className="form-input text-sm"
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
              />

              <input
                required
                placeholder="Owner name"
                className="form-input text-sm"
                value={form.owner}
                onChange={(e) =>
                  setForm({ ...form, owner: e.target.value })
                }
              />

              <button
                type="submit"
                className="green-button w-full"
              >
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      )}

      <Footer />
    </>
  );
}
