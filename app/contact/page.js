"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar/>

      <section className="bg-[#1b4332] text-white py-16">
        <div className="container-main">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-gray-300 mt-4">
            We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-description">
              Have questions about farming, products or communities?
              Send us a message.
            </p>

            <div className="space-y-7 mt-10">
              <p className="flex gap-4 items-center">
                <Mail className="text-[#40916c]"/> hello@growtogether.demo
              </p>
              <p className="flex gap-4 items-center">
                <Phone className="text-[#40916c]"/> +91 98765 43210
              </p>
              <p className="flex gap-4 items-center">
                <MapPin className="text-[#40916c]"/> Karnataka, India
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-5">
            <h2 className="text-2xl font-bold text-[#1b4332]">
              Send a Message
            </h2>

            <input required placeholder="Your name"
              className="w-full border p-4 rounded-xl"/>

            <input required type="email" placeholder="Email address"
              className="w-full border p-4 rounded-xl"/>

            <input required placeholder="Subject"
              className="w-full border p-4 rounded-xl"/>

            <textarea required rows="5" placeholder="Your message"
              className="w-full border p-4 rounded-xl"/>

            <button className="primary-btn w-full">
              Submit Message
            </button>

            {submitted && (
              <p className="text-green-700 text-sm">
                Demo message submitted successfully. No email was sent.
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer/>
    </>
  );
}