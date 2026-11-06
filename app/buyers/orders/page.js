"use client";

import { useEffect, useState } from "react";

export default function BuyerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("gt_orders") || "[]"));
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-[#1b4332]">My Orders</h1>
      <p className="text-gray-500 mt-2">Your frontend demo order history.</p>

      <div className="mt-7 space-y-5">
        {orders.length ? orders.map(order => (
          <div className="card" key={order.id}>
            <div className="flex justify-between flex-wrap gap-3">
              <h2 className="font-bold text-[#1b4332]">{order.id}</h2>
              <span className="bg-[#e8f5e9] text-green-700 rounded-full px-3 py-1 text-xs">
                {order.status}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-3">{order.date}</p>

            {order.items.map(item => (
              <div key={item.id} className="flex justify-between mt-4 text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}

            <div className="border-t mt-5 pt-4 flex justify-between font-bold">
              <span>Total</span><span>₹{order.total}</span>
            </div>
          </div>
        )) : (
          <div className="card text-center p-12 text-gray-500">
            No orders yet. Your demo orders will appear here.
          </div>
        )}
      </div>
    </div>
  );
}