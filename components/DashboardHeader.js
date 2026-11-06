// "use client";

// import Link from "next/link";
// import { Bell, Search } from "lucide-react";

// export default function DashboardHeader({ role }) {
//   const name = role === "buyer" ? "Rahul Sharma" : "Ramesh Gowda";

//   return (
//     <header className="bg-white rounded-2xl p-4 flex flex-wrap gap-4 items-center justify-between shadow-sm">

//       <div>
//         <h2 className="font-bold text-[#1b4332]">
//           Welcome, {name}!
//         </h2>
//         <p className="text-xs text-gray-500">
//           Here's your {role} dashboard.
//         </p>
//       </div>

//       <div className="flex gap-4 items-center">
//         <Link href={`/${role}/profile`}
//           className="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#1b4332] flex items-center justify-center font-bold">
//           {name[0]}
//         </Link>
//       </div>

//     </header>
//   );
// }



"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardHeader({ role }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const session = JSON.parse(
      localStorage.getItem("gt_session") || "{}"
    );

    setName(session.name || (role === "buyer" ? "Buyer" : "Farmer"));
  }, [role]);

  const profileLink =
    role === "buyer" ? "/buyers/profile" : "/farmer/profile";

  return (
    <header className="bg-white rounded-2xl p-4 flex flex-wrap gap-4 items-center justify-between shadow-sm">
      <div>
        <h2 className="font-bold text-[#1b4332]">
          Welcome, {name}!
        </h2>

        <p className="text-xs text-gray-500">
          Here's your {role} dashboard.
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <Link
          href={profileLink}
          className="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#1b4332] flex items-center justify-center font-bold"
        >
          {name ? name[0].toUpperCase() : "U"}
        </Link>
      </div>
    </header>
  );
}
