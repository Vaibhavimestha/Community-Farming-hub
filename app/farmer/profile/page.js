"use client";

import { useEffect, useState } from "react";

export default function FarmerProfile() {
  const [profile, setProfile] = useState({
    name: "Ramesh Gowda",
    email: "farmer@growtogether.demo",
    phone: "",
    farmName: "",
    farmLocation: "",
    farmingType: "",
    crops: "",
  });

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("gt_session") || "{}");
    const users = JSON.parse(localStorage.getItem("gt_users") || "[]");
    const user = users.find(u => u.email === session.email);

    if (user) setProfile(user);
    else if (session.email) {
      setProfile(p => ({ ...p, name: session.name, email: session.email }));
    }
  }, []);

  function save(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("gt_users") || "[]");
    const index = users.findIndex(u => u.email === profile.email);

    if (index >= 0) {
      users[index] = { ...users[index], ...profile };
      localStorage.setItem("gt_users", JSON.stringify(users));
    }

    const session = JSON.parse(localStorage.getItem("gt_session") || "{}");
    localStorage.setItem("gt_session", JSON.stringify({
      ...session, name: profile.name
    }));

    alert("Farmer profile updated in this browser.");
  }

  return (
    <div className="mt-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-[#1b4332]">Farm Profile</h1>

      <form onSubmit={save} className="card mt-7 grid sm:grid-cols-2 gap-5">
        {[
          ["name", "Farmer Name"],
          ["email", "Email"],
          ["phone", "Phone"],
          ["farmName", "Farm Name"],
          ["farmLocation", "Farm Location"],
          ["farmingType", "Farming Type"],
          ["crops", "Main Crops"],
        ].map(([field, label]) => (
          <div key={field}>
            <label className="font-semibold text-sm">{label}</label>
            <input
              required={field === "name" || field === "email"}
              type={field === "email" ? "email" : "text"}
              value={profile[field] || ""}
              onChange={e => setProfile({
                ...profile, [field]: e.target.value
              })}
              className="w-full border rounded-xl p-4 mt-2"
            />
          </div>
        ))}

        <button className="primary-btn sm:col-span-2">
          Save Farm Profile
        </button>
      </form>
    </div>
  );
}