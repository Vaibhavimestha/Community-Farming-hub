"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2, Minus, Plus, ShoppingBasket } from "lucide-react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("gt_cart") || "[]"));
  }, []);

  function update(items) {
    setCart(items);
    localStorage.setItem("gt_cart", JSON.stringify(items));
  }

  function change(id, amount) {
    update(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.min(item.quantity + amount, item.availableQuantity ?? item.quantity + amount) }
        : item
    ));
  }

  function remove(id) {
    update(cart.filter(item => item.id !== id));
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  function checkout() {
    if (!cart.length) return;

    const orders = JSON.parse(localStorage.getItem("gt_orders") || "[]");

    const newOrder = {
      id: "GT" + Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleDateString(),
      status: "Demo Order Placed",
    };

    orders.push(newOrder);
    localStorage.setItem("gt_orders", JSON.stringify(orders));
    localStorage.removeItem("gt_cart");
    setCart([]);
    router.push("/buyer/orders");
  }

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-[#1b4332]">My Cart</h1>

      {!cart.length ? (
        <div className="bg-white rounded-2xl text-center p-16 mt-8">
          <ShoppingBasket size={50} className="mx-auto text-[#40916c]"/>
          <h2 className="text-xl font-bold mt-5">Your cart is empty</h2>
          <Link href="/buyer/marketplace" className="primary-btn mt-6">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-7 mt-8">

          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="card flex gap-4 items-center">
                <img src={item.image} alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover"/>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1b4332]">{item.name}</h3>
                  <p className="text-sm text-gray-500">₹{item.price}/{item.unit}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button onClick={() => change(item.id, -1)}>
                      <Minus size={16}/>
                    </button>
                    {item.quantity}
                    <button onClick={() => change(item.id, 1)}>
                      <Plus size={16}/>
                    </button>
                  </div>
                </div>

                <button onClick={() => remove(item.id)}
                  className="text-red-500" aria-label="Remove product">
                  <Trash2/>
                </button>
              </div>
            ))}
          </div>

          <div className="card h-fit">
            <h2 className="font-bold text-xl text-[#1b4332]">Order Summary</h2>
            <div className="flex justify-between mt-6 text-gray-500">
              <span>Subtotal</span><span>₹{total}</span>
            </div>
            <div className="border-t mt-5 pt-5 flex justify-between font-bold">
              <span>Total</span><span>₹{total}</span>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Demo checkout only. No payment will be collected.
            </p>
            <button onClick={checkout} className="primary-btn w-full mt-6">
              Place Demo Order
            </button>
          </div>

        </div>
      )}
    </div>
  );
}