// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ProductCard from "@/components/ProductCard";
// import { products } from "@/data/products";

// import {
//   Sprout,
//   ShoppingBasket,
//   Users,
//   Leaf,
//   Truck,
//   Handshake,
//   ArrowRight,
//   CheckCircle,
//   Tractor,
//   CalendarDays,
//   HeartHandshake,
// } from "lucide-react";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       {/* HERO SECTION */}

//       <section className="relative min-h-[620px] flex items-center overflow-hidden">

//         <img
//           src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2000"
//           alt="Beautiful green agricultural fields"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#102e20]/95 via-[#102e20]/75 to-transparent" />

//         <div className="container-main relative z-10 py-24">

//           <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full text-sm mb-7">
//             <Sprout size={17} />
//             Growing a Better Agricultural Community
//           </span>

//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-3xl leading-tight">
//             Growing Together,
//             <span className="text-[#e9c46a]">
//               {" "}Connecting Farmers and Buyers.
//             </span>
//           </h1>

//           <p className="text-gray-200 text-lg max-w-xl mt-7 leading-8">
//             Empowering local farmers and connecting communities through
//             fresh produce, fair opportunities and sustainable agriculture.
//           </p>

//           <div className="flex flex-wrap gap-4 mt-9">
//             <Link href="/marketplace" className="primary-btn">
//               Explore Marketplace <ArrowRight size={18} />
//             </Link>

//             <Link
//               href="/register/farmer"
//               className="bg-white text-[#1b4332] px-6 py-4 rounded-xl font-semibold hover:bg-[#e9c46a]"
//             >
//               Join as a Farmer
//             </Link>
//           </div>

//           <div className="flex flex-wrap gap-8 mt-12 text-white">
//             <div>
//               <h3 className="text-3xl font-bold">100+</h3>
//               <p className="text-sm text-gray-300">Local Farmers*</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold">500+</h3>
//               <p className="text-sm text-gray-300">Fresh Products*</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold">25+</h3>
//               <p className="text-sm text-gray-300">Communities*</p>
//             </div>
//           </div>
//           <p className="text-xs text-gray-300 mt-3">*Illustrative project figures.</p>
//         </div>
//       </section>

//       {/* INTRODUCTION */}

//       <section className="section-padding">
//         <div className="container-main grid md:grid-cols-2 gap-14 items-center">

//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000"
//               alt="Farmers working in green farmland"
//               className="rounded-3xl w-full h-[420px] object-cover"
//             />

//             <div className="absolute -bottom-6 -right-3 md:-right-6 bg-white rounded-2xl p-5 shadow-xl">
//               <Sprout className="text-[#40916c] mb-2" size={30}/>
//               <h3 className="font-bold text-[#1b4332]">Grow Local</h3>
//               <p className="text-sm text-gray-500">Support local farmers</p>
//             </div>
//           </div>

//           <div>
//             <span className="text-[#40916c] font-bold uppercase tracking-widest text-sm">
//               About GrowTogether
//             </span>

//             <h2 className="section-title mt-4">
//               Bringing Farmers and Communities Closer.
//             </h2>

//             <p className="section-description">
//               GrowTogether is a community farming platform that helps
//               farmers showcase their products and connect directly with
//               buyers. It also encourages sharing farming equipment,
//               agricultural knowledge and community resources.
//             </p>

//             <div className="space-y-4 mt-7">
//               {[
//                 "Direct connection between farmers and buyers",
//                 "Better opportunities for local farmers",
//                 "Knowledge and resource sharing",
//                 "Promoting sustainable agriculture",
//               ].map((item) => (
//                 <p key={item} className="flex gap-3 items-center text-gray-700">
//                   <CheckCircle className="text-[#40916c]" size={20}/>
//                   {item}
//                 </p>
//               ))}
//             </div>

//             <Link href="/about" className="primary-btn mt-8">
//               Discover Our Story <ArrowRight size={18}/>
//             </Link>
//           </div>

//         </div>
//       </section>

//       {/* HOW IT WORKS */}

//       <section className="section-padding bg-[#edf5ec]">
//         <div className="container-main">

//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <span className="text-[#40916c] font-bold uppercase text-sm">
//               Simple Process
//             </span>
//             <h2 className="section-title mt-3">How GrowTogether Works</h2>
//             <p className="section-description">
//               A simple platform designed to make agricultural trading
//               easier for everyone.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">

//             <div className="card">
//               <div className="bg-[#e8f5e9] w-14 h-14 flex items-center justify-center rounded-xl">
//                 <Tractor className="text-[#1b4332]" size={28}/>
//               </div>

//               <h3 className="text-2xl font-bold text-[#1b4332] mt-5">
//                 For Farmers
//               </h3>

//               <div className="space-y-5 mt-7">
//                 {[
//                   "Register your account",
//                   "Create your farm profile",
//                   "List agricultural products",
//                   "Receive buyer orders",
//                   "Connect with customers",
//                 ].map((step, i) => (
//                   <div key={step} className="flex gap-4 items-center">
//                     <span className="w-9 h-9 rounded-full bg-[#1b4332] text-white flex items-center justify-center font-bold">
//                       {i + 1}
//                     </span>
//                     <p className="text-gray-600">{step}</p>
//                   </div>
//                 ))}
//               </div>

//               <Link href="/register/farmer" className="primary-btn mt-8">
//                 Become a Farmer <ArrowRight size={17}/>
//               </Link>
//             </div>

//             <div className="card">
//               <div className="bg-[#fff6dc] w-14 h-14 flex items-center justify-center rounded-xl">
//                 <ShoppingBasket className="text-[#b28a27]" size={28}/>
//               </div>

//               <h3 className="text-2xl font-bold text-[#1b4332] mt-5">
//                 For Buyers
//               </h3>

//               <div className="space-y-5 mt-7">
//                 {[
//                   "Register your account",
//                   "Explore local products",
//                   "Choose fresh produce",
//                   "Add products to cart",
//                   "Place a demo order",
//                 ].map((step, i) => (
//                   <div key={step} className="flex gap-4 items-center">
//                     <span className="w-9 h-9 rounded-full bg-[#e9c46a] text-[#1b4332] flex items-center justify-center font-bold">
//                       {i + 1}
//                     </span>
//                     <p className="text-gray-600">{step}</p>
//                   </div>
//                 ))}
//               </div>

//               <Link href="/register/buyer" className="primary-btn mt-8">
//                 Start Shopping <ArrowRight size={17}/>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* PRODUCTS */}

//       <section className="section-padding">
//         <div className="container-main">

//           <div className="flex flex-wrap justify-between items-end gap-5 mb-10">
//             <div>
//               <span className="text-[#40916c] font-bold uppercase text-sm">
//                 Fresh From Farms
//               </span>
//               <h2 className="section-title mt-3">Featured Products</h2>
//               <p className="section-description">
//                 Discover fresh produce from local farmers.
//               </p>
//             </div>

//             <Link href="/marketplace" className="secondary-btn">
//               Explore All <ArrowRight size={17} className="inline ml-2"/>
//             </Link>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//             {products.slice(0, 3).map((product) => (
//               <ProductCard key={product.id} product={product}/>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* BENEFITS */}

//       <section className="section-padding bg-[#1b4332] text-white">
//         <div className="container-main">

//           <div className="text-center mb-14">
//             <span className="text-[#e9c46a] uppercase font-bold text-sm">
//               Our Benefits
//             </span>
//             <h2 className="text-4xl font-bold mt-3">
//               Why Choose GrowTogether?
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//             {[
//               [Handshake, "Direct Connections", "Connect farmers directly with buyers without unnecessary intermediaries."],
//               [Leaf, "Fresh Local Produce", "Discover locally grown and seasonal agricultural products."],
//               [Users, "Community Collaboration", "Build stronger agricultural communities through collaboration."],
//               [ShoppingBasket, "Better Visibility", "Give farmers an opportunity to showcase their products."],
//               [Tractor, "Shared Resources", "Encourage equipment sharing and resource utilization."],
//               [Sprout, "Sustainable Farming", "Promote responsible agricultural practices and awareness."],
//             ].map(([Icon, title, description]) => (
//               <div key={title} className="bg-white/10 p-7 rounded-2xl hover:bg-white/15">
//                 <Icon size={32} className="text-[#e9c46a]"/>
//                 <h3 className="font-bold text-xl mt-5">{title}</h3>
//                 <p className="text-gray-300 text-sm leading-7 mt-3">{description}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* COMMUNITY */}

//       <section className="section-padding">
//         <div className="container-main grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <span className="text-[#40916c] font-bold uppercase text-sm">
//               Together We Grow
//             </span>

//             <h2 className="section-title mt-3">
//               Strong Communities. Better Agriculture.
//             </h2>

//             <p className="section-description">
//               Join farming groups, exchange seeds, learn organic
//               farming methods, share equipment and participate in
//               community planting activities.
//             </p>

//             <div className="mt-7 space-y-4">
//               <p className="flex gap-3"><Users className="text-[#40916c]"/> Community farming groups</p>
//               <p className="flex gap-3"><Sprout className="text-[#40916c]"/> Seed and knowledge exchange</p>
//               <p className="flex gap-3"><HeartHandshake className="text-[#40916c]"/> Shared agricultural resources</p>
//               <p className="flex gap-3"><CalendarDays className="text-[#40916c]"/> Community workshops</p>
//             </div>

//             <Link href="/communities" className="primary-btn mt-8">
//               Explore Communities <ArrowRight size={18}/>
//             </Link>
//           </div>

//           <img
//   src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80"
//   alt="Green agricultural field and community farming"
//   className="rounded-3xl h-[390px] w-full object-cover"
// />

//         </div>
//       </section>

//       {/* EVENTS */}

//       <section className="section-padding bg-[#edf5ec]">
//         <div className="container-main grid md:grid-cols-2 gap-10 items-center">

//           <img
//             src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000"
//             alt="Organic farming and gardening workshop"
//             className="rounded-3xl h-[350px] w-full object-cover"
//           />

//           <div>
//             <span className="text-[#40916c] font-bold uppercase text-sm">
//               Learn and Grow
//             </span>

//             <h2 className="section-title mt-3">
//               Learn. Share. Grow Together.
//             </h2>

//             <p className="section-description">
//               Discover agricultural workshops, composting awareness
//               programs, organic farming sessions and community
//               planting events.
//             </p>

//             <Link href="/events" className="primary-btn mt-7">
//               Discover Events <ArrowRight size={18}/>
//             </Link>
//           </div>

//         </div>
//       </section>

//       {/* TESTIMONIALS */}

//       <section className="section-padding">
//         <div className="container-main">

//           <div className="text-center mb-12">
//             <span className="text-[#40916c] uppercase text-sm font-bold">
//               Community Stories
//             </span>
//             <h2 className="section-title mt-3">What Our Users Say</h2>
//             <p className="text-gray-500 mt-2 text-sm">
//               Illustrative testimonials for the project demonstration.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-7">
//             {[
//               ["Lakshmi", "Farmer", "GrowTogether gives farmers a platform to showcase our fresh produce and reach more customers."],
//               ["Rahul", "Buyer", "I can easily discover fresh local vegetables and learn more about the farmers who grow them."],
//               ["Anita", "Community Member", "Sharing agricultural knowledge and resources helps our community grow together."],
//             ].map(([name, role, message]) => (
//               <div className="card" key={name}>
//                 <div className="text-[#e9c46a] text-3xl">★★★★★</div>
//                 <p className="text-gray-600 leading-7 mt-4">"{message}"</p>
//                 <h3 className="font-bold text-[#1b4332] mt-5">{name}</h3>
//                 <p className="text-sm text-gray-500">{role}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* CTA */}

//       <section className="pb-20">
//         <div className="container-main">
//           <div className="bg-[#e9c46a] rounded-3xl p-10 md:p-16 text-center">

//             <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b4332]">
//               Be Part of a Growing Community.
//             </h2>

//             <p className="text-[#395444] mt-5 max-w-xl mx-auto leading-7">
//               Whether you are a farmer or buyer, join us in building
//               a better and more connected agricultural future.
//             </p>

//             <div className="flex justify-center flex-wrap gap-4 mt-8">
//               <Link href="/register/farmer" className="primary-btn">
//                 Join as Farmer
//               </Link>
//               <Link href="/register/buyer" className="bg-white text-[#1b4332] px-6 py-4 rounded-xl font-bold">
//                 Join as Buyer
//               </Link>
//             </div>

//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }





import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

import {
  Sprout,
  ShoppingBasket,
  Users,
  Leaf,
  Handshake,
  ArrowRight,
  CheckCircle,
  Tractor,
  CalendarDays,
  HeartHandshake,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
          alt="Beautiful green agricultural fields"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102e20]/95 via-[#102e20]/75 to-transparent" />

        <div className="container-main relative z-10 py-12">
          <span className="inline-flex items-center gap-2 bg-white/15 text-white px-3 py-1.5 rounded-full text-xs mb-5">
            <Sprout size={15} />
            Growing a Better Agricultural Community
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-2xl leading-tight">
            Growing Together,
            <span className="text-[#e9c46a]">
              {" "}Connecting Farmers and Buyers.
            </span>
          </h1>

          <p className="text-gray-200 text-sm md:text-base max-w-lg mt-4 leading-7">
            Empowering local farmers and connecting communities through
            fresh produce, fair opportunities and sustainable agriculture.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/marketplace" className="primary-btn">
              Explore Marketplace <ArrowRight size={16} />
            </Link>

            <Link
              href="/register/farmer"
              className="bg-white text-[#1b4332] px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#e9c46a]"
            >
              Join as a Farmer
            </Link>
          </div>

          <div className="flex flex-wrap gap-7 mt-8 text-white">
            <div>
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-xs text-gray-300">Local Farmers*</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-xs text-gray-300">Fresh Products*</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">25+</h3>
              <p className="text-xs text-gray-300">Communities*</p>
            </div>
          </div>
          <p className="text-[10px] text-gray-300 mt-2">
            *Illustrative project figures.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-9 md:py-12">
        <div className="container-main grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80"
              alt="Farmers working in green farmland"
              className="rounded-2xl w-full h-[250px] md:h-[280px] object-cover"
            />

            <div className="absolute -bottom-3 -right-2 bg-white rounded-xl p-3 shadow-lg">
              <Sprout className="text-[#40916c] mb-1" size={24} />
              <h3 className="font-bold text-sm text-[#1b4332]">Grow Local</h3>
              <p className="text-xs text-gray-500">Support local farmers</p>
            </div>
          </div>

          <div>
            <span className="text-[#40916c] font-bold uppercase tracking-widest text-xs">
              About GrowTogether
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1b4332] mt-3">
              Bringing Farmers and Communities Closer.
            </h2>

            <p className="text-sm text-gray-600 leading-6 mt-3">
              GrowTogether is a community farming platform that helps
              farmers showcase their products and connect directly with
              buyers. It also encourages sharing farming equipment,
              agricultural knowledge and community resources.
            </p>

            <div className="space-y-2 mt-4">
              {[
                "Direct connection between farmers and buyers",
                "Better opportunities for local farmers",
                "Knowledge and resource sharing",
                "Promoting sustainable agriculture",
              ].map((item) => (
                <p key={item} className="flex gap-2 items-center text-sm text-gray-700">
                  <CheckCircle className="text-[#40916c] shrink-0" size={17} />
                  {item}
                </p>
              ))}
            </div>

            <Link href="/about" className="primary-btn mt-5">
              Discover Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-9 md:py-12 bg-[#edf5ec]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#40916c] font-bold uppercase text-xs">
              Simple Process
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b4332] mt-2">
              How GrowTogether Works
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              A simple platform designed to make agricultural trading easier for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="bg-[#e8f5e9] w-11 h-11 flex items-center justify-center rounded-lg">
                <Tractor className="text-[#1b4332]" size={23} />
              </div>

              <h3 className="text-xl font-bold text-[#1b4332] mt-3">
                For Farmers
              </h3>

              <div className="space-y-3 mt-4">
                {[
                  "Register your account",
                  "Create your farm profile",
                  "List agricultural products",
                  "Receive buyer orders",
                  "Connect with customers",
                ].map((step, i) => (
                  <div key={step} className="flex gap-3 items-center">
                    <span className="w-7 h-7 text-sm rounded-full bg-[#1b4332] text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                ))}
              </div>

              <Link href="/register/farmer" className="primary-btn mt-5">
                Become a Farmer <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="bg-[#fff6dc] w-11 h-11 flex items-center justify-center rounded-lg">
                <ShoppingBasket className="text-[#b28a27]" size={23} />
              </div>

              <h3 className="text-xl font-bold text-[#1b4332] mt-3">
                For Buyers
              </h3>

              <div className="space-y-3 mt-4">
                {[
                  "Register your account",
                  "Explore local products",
                  "Choose fresh produce",
                  "Add products to cart",
                  "Place a demo order",
                ].map((step, i) => (
                  <div key={step} className="flex gap-3 items-center">
                    <span className="w-7 h-7 text-sm rounded-full bg-[#e9c46a] text-[#1b4332] flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                ))}
              </div>

              <Link href="/register/buyer" className="primary-btn mt-5">
                Start Shopping <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>




{/* PRODUCTS */}
<section className="py-6 md:py-8">
  <div className="container-main">

    <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
      <div>
        <span className="text-[#40916c] font-bold uppercase text-[10px]">
          Fresh From Farms
        </span>

        <h2 className="text-xl md:text-2xl font-bold text-[#1b4332] mt-1">
          Featured Products
        </h2>

        <p className="text-xs text-gray-600 mt-1">
          Discover fresh produce from local farmers.
        </p>
      </div>

      <Link
        href="/marketplace"
        className="secondary-btn text-xs px-3 py-2"
      >
        Explore All <ArrowRight size={14} className="inline ml-1" />
      </Link>
    </div>

    {/* Four Products in One Row on Desktop */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {products.slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

  </div>
</section>


      {/* BENEFITS */}
      <section className="py-9 md:py-12 bg-[#1b4332] text-white">
        <div className="container-main">
          <div className="text-center mb-8">
            <span className="text-[#e9c46a] uppercase font-bold text-xs">
              Our Benefits
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Why Choose GrowTogether?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              [Handshake, "Direct Connections", "Connect farmers directly with buyers without unnecessary intermediaries."],
              [Leaf, "Fresh Local Produce", "Discover locally grown and seasonal agricultural products."],
              [Users, "Community Collaboration", "Build stronger agricultural communities through collaboration."],
              [ShoppingBasket, "Better Visibility", "Give farmers an opportunity to showcase their products."],
              [Tractor, "Shared Resources", "Encourage equipment sharing and resource utilization."],
              [Sprout, "Sustainable Farming", "Promote responsible agricultural practices and awareness."],
            ].map(([Icon, title, description]) => (
              <div key={title} className="bg-white/10 p-5 rounded-xl hover:bg-white/15">
                <Icon size={26} className="text-[#e9c46a]" />
                <h3 className="font-bold text-lg mt-3">{title}</h3>
                <p className="text-gray-300 text-sm leading-6 mt-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-9 md:py-12">
        <div className="container-main grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[#40916c] font-bold uppercase text-xs">
              Together We Grow
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1b4332] mt-2">
              Strong Communities. Better Agriculture.
            </h2>

            <p className="text-sm text-gray-600 leading-6 mt-3">
              Join farming groups, exchange seeds, learn organic
              farming methods, share equipment and participate in
              community planting activities.
            </p>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p className="flex gap-2 items-center"><Users className="text-[#40916c]" size={18} /> Community farming groups</p>
              <p className="flex gap-2 items-center"><Sprout className="text-[#40916c]" size={18} /> Seed and knowledge exchange</p>
              <p className="flex gap-2 items-center"><HeartHandshake className="text-[#40916c]" size={18} /> Shared agricultural resources</p>
              <p className="flex gap-2 items-center"><CalendarDays className="text-[#40916c]" size={18} /> Community workshops</p>
            </div>

            <Link href="/communities" className="primary-btn mt-5">
              Explore Communities <ArrowRight size={16} />
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80"
            alt="Green agricultural field and community farming"
            className="rounded-2xl h-[220px] md:h-[260px] w-full object-cover"
          />
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-9 md:py-12 bg-[#edf5ec]">
        <div className="container-main grid md:grid-cols-2 gap-7 items-center">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
            alt="Organic farming and gardening workshop"
            className="rounded-2xl h-[210px] md:h-[250px] w-full object-cover"
          />

          <div>
            <span className="text-[#40916c] font-bold uppercase text-xs">
              Learn and Grow
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1b4332] mt-2">
              Learn. Share. Grow Together.
            </h2>

            <p className="text-sm text-gray-600 leading-6 mt-3">
              Discover agricultural workshops, composting awareness
              programs, organic farming sessions and community
              planting events.
            </p>

            <Link href="/events" className="primary-btn mt-5">
              Discover Events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-9 md:py-12">
        <div className="container-main">
          <div className="text-center mb-7">
            <span className="text-[#40916c] uppercase text-xs font-bold">
              Community Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b4332] mt-2">
              What Our Users Say
            </h2>
            <p className="text-gray-500 mt-2 text-xs">
              Illustrative testimonials for the project demonstration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Lakshmi", "Farmer", "GrowTogether gives farmers a platform to showcase our fresh produce and reach more customers."],
              ["Rahul", "Buyer", "I can easily discover fresh local vegetables and learn more about the farmers who grow them."],
              ["Anita", "Community Member", "Sharing agricultural knowledge and resources helps our community grow together."],
            ].map(([name, role, message]) => (
              <div className="bg-white rounded-xl p-5 shadow-sm border" key={name}>
                <div className="text-[#e9c46a] text-2xl">★★★★★</div>
                <p className="text-gray-600 text-sm leading-6 mt-3">"{message}"</p>
                <h3 className="font-bold text-[#1b4332] mt-4">{name}</h3>
                <p className="text-xs text-gray-500">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-10">
        <div className="container-main">
          <div className="bg-[#e9c46a] rounded-2xl p-6 md:p-10 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1b4332]">
              Be Part of a Growing Community.
            </h2>

            <p className="text-sm text-[#395444] mt-3 max-w-xl mx-auto leading-6">
              Whether you are a farmer or buyer, join us in building
              a better and more connected agricultural future.
            </p>

            <div className="flex justify-center flex-wrap gap-3 mt-5">
              <Link href="/register/farmer" className="primary-btn">
                Join as Farmer
              </Link>
              <Link href="/register/buyer" className="bg-white text-[#1b4332] px-5 py-3 rounded-xl text-sm font-bold">
                Join as Buyer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
