// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// import {
//   LayoutDashboard,
//   ShoppingBasket,
//   Package,
//   ShoppingCart,
//   ClipboardList,
//   Sprout,
//   User,
//   LogOut,
//   CalendarDays,
//   Home,
// } from "lucide-react";

// export default function Sidebar({ role }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   // const buyerLinks = [
//   //   [LayoutDashboard, "Dashboard", "/buyer/dashboard"],
//   //   [ShoppingBasket, "Marketplace", "/buyer/marketplace"],
//   //   [ShoppingCart, "My Cart", "/buyer/cart"],
//   //   [ClipboardList, "My Orders", "/buyer/orders"],
//   //   [User, "My Profile", "/buyer/profile"],
//   // ];

//   const buyerLinks = [
//   [LayoutDashboard, "Dashboard", "/buyers/dashboard"],
//   [ShoppingBasket, "Marketplace", "/buyers/marketplace"],
//   [ShoppingCart, "My Cart", "/buyers/cart"],
//   [ClipboardList, "My Orders", "/buyers/orders"],
//   [User, "My Profile", "/buyers/profile"],
// ];

//   function logout() {
//     localStorage.removeItem("gt_session");
//     router.push("/login");
//   }

//   const links = role === "buyer" ? buyerLinks : farmerLinks;

//   return (
//     <aside className="bg-[#153b2b] text-white w-full md:w-64 md:min-h-screen md:sticky md:top-0 p-5 flex flex-col">

//       <Link href="/" className="flex gap-3 items-center mb-9">
//         <Sprout size={30} className="text-[#e9c46a]"/>
//         <div>
//           <h2 className="font-bold text-xl">GrowTogether</h2>
//           <p className="text-[10px] text-gray-300 uppercase tracking-widest">
//             {role} panel
//           </p>
//         </div>
//       </Link>

//       <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
//         Menu
//       </p>

//       <nav className="space-y-2">
//         {links.map(([Icon, label, url]) => (
//           <Link
//             key={url}
//             href={url}
//             className={`flex gap-3 items-center p-3 rounded-xl text-sm ${
//               pathname === url
//                 ? "bg-[#40916c] text-white"
//                 : "text-gray-300 hover:bg-white/10"
//             }`}
//           >
//             <Icon size={19}/>
//             {label}
//           </Link>
//         ))}
//       </nav>

//       <div className="mt-auto pt-10 space-y-2">
//         <Link href="/" className="flex gap-3 items-center p-3 text-gray-300">
//           <Home size={19}/> Visit Website
//         </Link>

//         <button
//           onClick={logout}
//           className="flex gap-3 items-center p-3 text-red-200 w-full"
//         >
//           <LogOut size={19}/> Logout
//         </button>
//       </div>
//     </aside>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  ShoppingBasket,
  Package,
  ShoppingCart,
  ClipboardList,
  Sprout,
  User,
  LogOut,
  Home,
} from "lucide-react";

export default function Sidebar({ role }) {
  const pathname = usePathname();
  const router = useRouter();

  const buyerLinks = [
    [LayoutDashboard, "Dashboard", "/buyers/dashboard"],
    [ShoppingBasket, "Marketplace", "/buyers/marketplace"],
    [ShoppingCart, "My Cart", "/buyers/cart"],
    [ClipboardList, "My Orders", "/buyers/orders"],
    [User, "My Profile", "/buyers/profile"],
  ];

  const farmerLinks = [
    [LayoutDashboard, "Dashboard", "/farmer/dashboard"],
    [Package, "My Products", "/farmer/products"],
    [ShoppingBasket, "Add Product", "/farmer/products/add"],
    [ClipboardList, "Orders", "/farmer/orders"],
    [Sprout, "Harvest", "/farmer/harvest"],
    [User, "My Profile", "/farmer/profile"],
  ];

  function logout() {
    localStorage.removeItem("gt_session");
    router.push("/login");
  }

  const links = role === "buyer" ? buyerLinks : farmerLinks;

  return (
    // <aside className="bg-[#153b2b] text-white w-full md:w-64 md:min-h-screen md:sticky md:top-0 p-3 flex flex-col">

    //   {/* Compact Logo */}
    //   <Link href="/" className="flex gap-2 items-center mb-5">
    //     <Sprout size={25} className="text-[#e9c46a]" />
    //     <div>
    //       <h2 className="font-bold text-lg">GrowTogether</h2>
    //       <p className="text-[9px] text-gray-300 uppercase tracking-widest">
    //         {role} panel
    //       </p>
    //     </div>
    //   </Link>

    //   <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
    //     Menu
    //   </p>

    //   {/* Compact Navigation */}
    //   <nav className="space-y-1">
    //     {links.map(([Icon, label, url]) => (
    //       <Link
    //         key={url}
    //         href={url}
    //         className={`flex gap-2 items-center px-3 py-2 rounded-lg text-sm ${
    //           pathname === url
    //             ? "bg-[#40916c] text-white"
    //             : "text-gray-300 hover:bg-white/10"
    //         }`}
    //       >
    //   
    
<aside className="bg-[#153b2b] text-white w-full md:w-56 md:min-h-screen md:sticky md:top-0 p-2 flex flex-col">

  <Link href="/" className="flex gap-2 items-center mb-3">
    <Sprout size={20} className="text-[#e9c46a]" />
    <div>
      <h2 className="font-bold text-sm">GrowTogether</h2>
      <p className="text-[8px] text-gray-300 uppercase tracking-wider">
        {role} panel
      </p>
    </div>
  </Link>

  <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-1">
    Menu
  </p>

  <nav className="space-y-0.5">
    {links.map(([Icon, label, url]) => (
      <Link
        key={url}
        href={url}
        className={`flex gap-2 items-center px-2 py-1.5 rounded-md text-xs ${
          pathname === url
            ? "bg-[#40916c] text-white"
            : "text-gray-300 hover:bg-white/10"
        }`}
      >
        <Icon size={15} />
        {label}
      </Link>
    ))}
  </nav>

  <div className="mt-auto pt-2 space-y-0.5">
    <Link
      href="/"
      className="flex gap-2 items-center px-2 py-1.5 text-gray-300 text-xs rounded-md"
    >
      <Home size={15} />
      Visit Website
    </Link>

    <button
      onClick={logout}
      className="flex gap-2 items-center px-2 py-1.5 text-red-200 text-xs w-full rounded-md"
    >
      <LogOut size={15} />
      Logout
    </button>
  </div>
</aside>
      // <Icon size={17} />
    //         {label}
    //       </Link>
    //     ))}
    //   </nav>

    //   {/* Compact Bottom Links */}
    //   <div className="mt-auto pt-4 space-y-1">
    //     <Link
    //       href="/"
    //       className="flex gap-2 items-center px-3 py-2 text-gray-300 text-sm hover:bg-white/10 rounded-lg"
    //     >
    //       <Home size={17} />
    //       Visit Website
    //     </Link>

    //     <button
    //       onClick={logout}
    //       className="flex gap-2 items-center px-3 py-2 text-red-200 text-sm w-full hover:bg-white/10 rounded-lg"
    //     >
    //       <LogOut size={17} />
    //       Logout
    //     </button>
    //   </div>
    // </aside>
  );
}
