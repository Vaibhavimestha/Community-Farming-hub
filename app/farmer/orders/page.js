"use client";

import { useEffect, useState } from "react";

export default function FarmerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("gt_orders") || "[]"));
  }, []);

  function updateStatus(id, status) {
    const updated = orders.map(o =>
      o.id === id ? { ...o, status } : o
    );

    setOrders(updated);
    localStorage.setItem("gt_orders", JSON.stringify(updated));
  }

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-[#1b4332]">Manage Orders</h1>
      <p className="text-gray-500 mt-2">Demo orders placed by buyers.</p>

      <div className="space-y-5 mt-8">
        {orders.length ? orders.map(order => (
          <div className="card" key={order.id}>
            <div className="flex justify-between flex-wrap gap-3">
              <h2 className="font-bold text-[#1b4332]">{order.id}</h2>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>

            {order.items.map(item => (
              <p key={item.id} className="mt-3 text-sm text-gray-600">
                {item.name} × {item.quantity} — ₹{item.price * item.quantity}
              </p>
            ))}

            <div className="flex justify-between items-center flex-wrap gap-3 mt-5">
              <b>Total: ₹{order.total}</b>
              <select value={order.status}
                onChange={e => updateStatus(order.id, e.target.value)}
                className="border p-3 rounded-xl">
                <option>Demo Order Placed</option>
                <option>Processing</option>
                <option>Ready for Pickup</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        )) : (
          <div className="card text-center p-12 text-gray-500">
            No demo orders available yet.
          </div>
        )}
      </div>
    </div>
  );
}