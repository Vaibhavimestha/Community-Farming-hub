import Link from "next/link";
import {
  Sprout,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#153b2b] text-white pt-16 pb-8">
      <div className="container-main">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <div className="flex gap-2 items-center mb-4">
              <Sprout size={30} className="text-[#e9c46a]" />
              <h2 className="text-2xl font-bold">GrowTogether</h2>
            </div>

            <p className="text-gray-300 leading-7 text-sm">
              Growing stronger communities by connecting local farmers
              with buyers and promoting sustainable agriculture.
            </p>

            <div className="flex gap-4 mt-6">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/communities">Communities</Link>
              <Link href="/events">Events</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">For Everyone</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/login/farmer">Join as Farmer</Link>
              <Link href="/login/buyer">Join as Buyer</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/contact">Support</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <p className="flex gap-2"><MapPin size={18}/> Karnataka, India</p>
              <p className="flex gap-2"><Mail size={18}/> hello@growtogether.demo</p>
              <p className="flex gap-2"><Phone size={18}/> +91 98765 43210</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-300">
          © 2026 GrowTogether. Academic frontend demonstration.
        </div>
      </div>
    </footer>
  );
}