import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBasket, Tractor, ArrowRight } from "lucide-react";

export default function LoginChoice() {
  return (
    <>
      <Navbar/>

      <section className="min-h-[75vh] flex items-center justify-center py-16">
        <div className="container-main max-w-4xl">

          <div className="text-center mb-12">
            <p className="text-[#40916c] font-bold">WELCOME TO GROWTogether</p>
            <h1 className="text-4xl font-extrabold text-[#1b4332] mt-4">
              How Would You Like to Join?
            </h1>
            <p className="text-gray-500 mt-3">
              Select your account type to continue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <Link href="/login/buyer"
              className="card text-center hover:shadow-xl group">
              <div className="w-20 h-20 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mx-auto">
                <ShoppingBasket size={38} className="text-[#1b4332]"/>
              </div>
              <h2 className="text-2xl font-bold mt-6 text-[#1b4332]">
                I'm a Buyer
              </h2>
              <p className="text-gray-500 mt-3 leading-7">
                Discover fresh local products and connect with farmers.
              </p>
              <span className="primary-btn mt-7">
                Continue as Buyer <ArrowRight size={17}/>
              </span>
            </Link>

            <Link href="/login/farmer"
              className="card text-center hover:shadow-xl group">
              <div className="w-20 h-20 bg-[#fff5db] rounded-2xl flex items-center justify-center mx-auto">
                <Tractor size={38} className="text-[#a47a17]"/>
              </div>
              <h2 className="text-2xl font-bold mt-6 text-[#1b4332]">
                I'm a Farmer
              </h2>
              <p className="text-gray-500 mt-3 leading-7">
                Showcase your farm products and manage your listings.
              </p>
              <span className="primary-btn mt-7">
                Continue as Farmer <ArrowRight size={17}/>
              </span>
            </Link>

          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}