"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm({ role }) {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    farmName: "",
    farmLocation: "",
    farmingType: "",
    crops: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("gt_users") || "[]");

    if (users.some((u) => u.email === form.email)) {
      setError("This email is already registered.");
      return;
    }

    const user = { ...form, role };

    users.push(user);
    localStorage.setItem("gt_users", JSON.stringify(users));

    localStorage.setItem("gt_session", JSON.stringify({
      role,
      email: form.email,
      name: form.name,
    }));

    // router.push(`/${role}/dashboard`);
    if (role === "buyer") {
  router.push("/buyers/dashboard");
} else {
  router.push("/farmer/dashboard");
}
  }

  const fields = role === "buyer"
    ? [
        ["name", "Full Name", "text"],
        ["email", "Email Address", "email"],
        ["phone", "Phone Number", "tel"],
        ["address", "Address", "text"],
      ]
    : [
        ["name", "Farmer Full Name", "text"],
        ["email", "Email Address", "email"],
        ["phone", "Phone Number", "tel"],
        ["farmName", "Farm Name", "text"],
        ["farmLocation", "Farm Location", "text"],
        ["farmingType", "Farming Type", "text"],
        ["crops", "Main Crops", "text"],
      ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card w-full max-w-xl">

        <Link href="/" className="text-[#40916c] font-semibold">
          ← Home
        </Link>

        <h1 className="text-3xl font-extrabold text-[#1b4332] mt-7">
          Create {role === "buyer" ? "Buyer" : "Farmer"} Account
        </h1>

        <p className="text-gray-500 mt-2">
          Join the GrowTogether community.
        </p>

        <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4 mt-7">

          {fields.map(([name, label, type]) => (
            <div key={name}>
              <label className="text-sm font-semibold">{label}</label>
              <input
                name={name}
                type={type}
                required
                value={form[name]}
                onChange={update}
                className="w-full border p-3 rounded-xl mt-2"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            </div>
          ))}

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input name="password" type="password" required
              value={form.password} onChange={update}
              className="w-full border p-3 rounded-xl mt-2"/>
          </div>

          <div>
            <label className="text-sm font-semibold">Confirm Password</label>
            <input name="confirmPassword" type="password" required
              value={form.confirmPassword} onChange={update}
              className="w-full border p-3 rounded-xl mt-2"/>
          </div>

          {error && (
            <p className="text-red-600 text-sm sm:col-span-2">{error}</p>
          )}

          <button className="primary-btn w-full sm:col-span-2">
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Already registered?{" "}
          <Link href={`/login/${role}`} className="text-[#40916c] font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}