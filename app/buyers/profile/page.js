"use client";

import { useEffect, useState } from "react";

export default function BuyerProfile() {
  const [user, setUser] = useState({
    name: "Rahul Sharma",
    email: "buyer@growtogether.demo",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("gt_session") || "{}");
    const users = JSON.parse(localStorage.getItem("gt_users") || "[]");
    const registered = users.find(u => u.email === session.email);

    if (registered) setUser(registered);
    else if (session.email) {
      setUser(prev => ({ ...prev, name: session.name, email: session.email }));
    }
  }, []);

  function save(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("gt_users") || "[]");
    const index = users.findIndex(u => u.email === user.email);

    if (index >= 0) {
      users[index] = { ...users[index], ...user };
      localStorage.setItem("gt_users", JSON.stringify(users));
    }

    const session = JSON.parse(localStorage.getItem("gt_session") || "{}");
    localStorage.setItem("gt_session", JSON.stringify({
      ...session, name: user.name
    }));

    alert("Profile updated in this browser.");
  }

  return (
    <div className="mt-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-[#1b4332]">My Profile</h1>

      <form onSubmit={save} className="card mt-7 space-y-5">
        {["name", "email", "phone", "address"].map(field => (
          <div key={field}>
            <label className="font-semibold capitalize">{field}</label>
            <input
              required={field === "name" || field === "email"}
              type={field === "email" ? "email" : "text"}
              value={user[field] || ""}
              onChange={e => setUser({ ...user, [field]: e.target.value })}
              className="w-full border rounded-xl p-4 mt-2"
            />
          </div>
        ))}

        <button className="primary-btn">Save Changes</button>
      </form>
    </div>
  );
}