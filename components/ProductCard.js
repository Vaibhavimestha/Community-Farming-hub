// import Link from "next/link";
// import { MapPin, ShoppingBasket, ArrowUpRight } from "lucide-react";

// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">

//       <div className="relative h-52 overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//         />

//         <span className="absolute top-4 left-4 bg-[#e8f5e9] text-[#1b4332] px-3 py-1 rounded-full text-xs font-bold">
//           {product.badge}
//         </span>
//       </div>

//       <div className="p-5">

//         <div className="flex justify-between items-start">
//           <div>
//             <p className="text-xs text-[#40916c] font-semibold">
//               {product.category}
//             </p>

//             <h3 className="font-bold text-lg text-[#1b4332] mt-1">
//               {product.name}
//             </h3>
//           </div>

//           <ArrowUpRight size={20} className="text-gray-400" />
//         </div>

//         <p className="text-sm text-gray-500 mt-3">
//           Farmer: {product.farmer}
//         </p>

//         <p className="flex items-center gap-1 text-sm text-gray-500 mt-2">
//           <MapPin size={14} /> {product.location}
//         </p>

//         <div className="flex justify-between items-center border-t mt-4 pt-4">
//           <div>
//             <p className="text-xl font-bold text-[#1b4332]">
//               ₹{product.price}
//               <span className="text-xs text-gray-500 font-normal">
//                 /{product.unit}
//               </span>
//             </p>

//             <p className="text-xs text-gray-500">
//               {product.quantity} {product.unit} available
//             </p>
//           </div>

//           <Link
//             href={`/buyer/product/${product.id}`}
//             className="bg-[#1b4332] text-white p-3 rounded-xl hover:bg-[#40916c]"
//             aria-label={`View ${product.name}`}
//           >
//             <ShoppingBasket size={19} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import Link from "next/link";
import { MapPin, ShoppingBasket, ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">

      {/* Product Image */}
      <div className="relative h-36 sm:h-40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-2 left-2 bg-[#e8f5e9] text-[#1b4332] px-2 py-1 rounded-full text-[10px] font-bold">
          {product.badge}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-3">

        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <p className="text-[11px] text-[#40916c] font-semibold">
              {product.category}
            </p>

            <h3 className="font-bold text-base text-[#1b4332] mt-1 line-clamp-1">
              {product.name}
            </h3>
          </div>

          <ArrowUpRight size={17} className="text-gray-400 shrink-0" />
        </div>

        <p className="text-xs text-gray-500 mt-2 line-clamp-1">
          Farmer: {product.farmer}
        </p>

        <p className="flex items-center gap-1 text-xs text-gray-500 mt-1">
          <MapPin size={13} />
          {product.location}
        </p>

        {/* Price and Button */}
        <div className="flex justify-between items-center border-t mt-3 pt-3 gap-2">
          <div>
            <p className="text-lg font-bold text-[#1b4332]">
              ₹{product.price}
              <span className="text-[10px] text-gray-500 font-normal">
                /{product.unit}
              </span>
            </p>

            <p className="text-[10px] text-gray-500">
              {product.quantity} {product.unit} available
            </p>
          </div>

          <Link
            href={`/buyers/product/${product.id}`}
            className="bg-[#1b4332] text-white p-2 rounded-lg hover:bg-[#40916c] transition"
            aria-label={`View ${product.name}`}
          >
            <ShoppingBasket size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
