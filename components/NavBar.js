"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Sprout,
  ShoppingBasket,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["How It Works", "/how-it-works"],
  ["Marketplace", "/marketplace"],
  ["Equipment Sharing", "/equipment"],
  ["Communities", "/communities"],
  ["Events", "/events"],
  ["Contact", "/contact"],
];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container-main h-[78px] flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#1b4332] text-white p-2 rounded-xl">
            <Sprout size={25} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-[#1b4332]">
              GrowTogether
            </h1>
            <p className="text-[10px] tracking-widest text-gray-500">
              COMMUNITY FARMING HUB
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map(([name, url]) => (
            <Link
              key={url}
              href={url}
              className="text-sm font-medium text-gray-600 hover:text-[#40916c]"
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="font-semibold text-[#1b4332] px-3 py-2"
          >
            Login
          </Link>

          <Link href="/register/buyer" className="primary-btn">
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#1b4332]"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t p-5 flex flex-col gap-4">
          {links.map(([name, url]) => (
            <Link
              key={url}
              href={url}
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              {name}
            </Link>
          ))}

          <Link href="/login" className="primary-btn">
            Login
          </Link>
        </div>
      )}
    </header>
  );
}