"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Sprout } from "lucide-react";

export default function AuthForm({ role }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    const demoEmail = `${role}@growtogether.demo`;

    if (email !== demoEmail || password !== "123456") {
      setError(`Use the demo ${role} account shown below.`);
      return;
    }

    const session = {
      role,
      email,
      name: role === "buyer" ? "Rahul Sharma" : "Ramesh Gowda",
    };

    localStorage.setItem("gt_session", JSON.stringify(session));

    if (remember) {
      localStorage.setItem("gt_remember", "true");
    }

    router.push(`/${role}/dashboard`);
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#faf9f3]">

      <div className="hidden md:flex relative items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
          alt="Agricultural field"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#102e20]/80"/>

        <div className="relative text-white p-12">
          <Sprout size={45} className="text-[#e9c46a]"/>
          <h1 className="text-5xl font-extrabold mt-8">
            GrowTogether
          </h1>
          <p className="text-xl mt-5 text-gray-200 leading-9">
            Connecting farmers, buyers and communities for
            a sustainable agricultural future.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-7 md:p-12">
        <div className="w-full max-w-md">

          <Link href="/" className="text-[#40916c] font-semibold">
            ← Back to Home
          </Link>

          <h2 className="text-4xl font-extrabold text-[#1b4332] mt-10">
            Welcome Back!
          </h2>

          <p className="text-gray-500 mt-3">
            Login as {role}.
          </p>

          <form onSubmit={handleLogin} className="space-y-5 mt-9">

            <div>
              <label className="font-semibold text-sm">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border rounded-xl p-4 w-full mt-2"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">Password</label>
              <div className="relative mt-2">
                <input
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="border rounded-xl p-4 w-full pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-4 text-gray-500"
                  aria-label="Toggle password visibility"
                >
                  {show ? <EyeOff/> : <Eye/>}
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => setError("Password recovery is not available in this frontend demo.")}
                className="text-[#40916c]"
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button className="primary-btn w-full">
              Login as {role}
            </button>
          </form>

          <div className="bg-[#e8f5e9] rounded-xl p-4 mt-6 text-sm">
            <p className="font-bold text-[#1b4332]">Demo credentials</p>
            <p className="mt-2">Email: {role}@growtogether.demo</p>
            <p>Password: 123456</p>
          </div>

          <p className="text-center text-gray-500 mt-7 text-sm">
            Don't have an account?{" "}
            <Link href={`/register/${role}`}
              className="text-[#40916c] font-bold">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}