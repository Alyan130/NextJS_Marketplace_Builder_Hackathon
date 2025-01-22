// "use client";

// import { fetchFeaturedProducts } from "@/utils/Featured";
// import ProductCard from "./productcard";
// import { productType } from "@/utils/type";
// import { useEffect, useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Skeleton } from "../ui/skeleton";

// export default function FeaturedProdoucts() {
//   const [data, setData] = useState<productType[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const products = await fetchFeaturedProducts();
//       setData(products);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <section className="py-6 md:py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
//           <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between ml-1 mb-2 md:mb-5">
//             <span className="text-[24px] md:text-[32px] font-semibold text-color1">
//               Featured Products
//             </span>
//           </div>
//           <Carousel className="w-full" opts={{ align: "start" }}>
//             <CarouselContent className="flex gap-4 sm:gap-x-0 gap-x-10 pl-4 sm:pl-none">
//               {data.length > 0 ? (
//                 data.map((e) => (
//                   <CarouselItem
//                     key={e._id}
//                     className="w-[83%]  sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
//                   >
//                     <ProductCard
//                       _id={e._id}
//                       title={e.title}
//                       price={e.price}
//                       badge={e.badge || ""}
//                       image={e.image}
//                       priceWithoutDiscount={e.priceWithoutDiscount}
//                       className1="w-[300px] h-96"
//                       className2="h-80"
//                       className3="h-7 w-14 ml-6"
//                     />
//                   </CarouselItem>
//                 ))
//               ) : (
//                 <CarouselContent className="flex gap-4 sm:gap-x-0 gap-x-10 pl-4 sm:pl-none">
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <CarouselItem
//                       key={index}
//                       className="w-[83%]  sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
//                     >
//                       <Skeleton className="h-96 bg-slate-200 w-[300px] sm:w-[250px] rounded-xl mb-2" />
//                       <div className="space-y-2">
//                         <Skeleton className="h-4 bg-slate-200 w-[147px] sm:w-[250px] " />
//                         <Skeleton className="h-4 bg-slate-200  w-3/5" />
//                       </div>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//               )}
//             </CarouselContent>
//             <CarouselPrevious className="hidden md:inline" />
//             <CarouselNext className="hidden md:inline" />
//           </Carousel>
//         </div>
//       </section>
//     </>
//   );
// }



"use client";

import { fetchFeaturedProducts } from "@/utils/Featured";
import ProductCard from "./productcard";
import { productType } from "@/utils/type";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "../ui/skeleton";

export default function FeaturedProducts() {
  const [data, setData] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchFeaturedProducts();
      setData(products || []);
      setLoading(false); 
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between ml-1 mb-2 md:mb-5">
            <span className="text-[24px] md:text-[32px] font-semibold text-color1">
              Featured Products
            </span>
          </div>
          <Carousel className="w-full" opts={{ align: "start" }}>
            <CarouselContent className="flex gap-4 sm:gap-x-0 gap-x-10 pl-4 sm:pl-none">
              {loading ? (
              
                Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="w-[83%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
                  >
                    <Skeleton className="h-96 bg-slate-200 w-[300px] sm:w-[250px] rounded-xl mb-2" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 bg-slate-200 w-[147px] sm:w-[250px]" />
                      <Skeleton className="h-4 bg-slate-200 w-3/5" />
                    </div>
                  </CarouselItem>
                ))
              ) : (
              
                data.map((e) => (
                  <CarouselItem
                    key={e._id}
                    className="w-[83%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
                  >
                    <ProductCard
                      _id={e._id}
                      title={e.title}
                      price={e.price}
                      badge={e.badge || ""}
                      image={e.image}
                      priceWithoutDiscount={e.priceWithoutDiscount}
                      className1="w-[300px] h-96"
                      className2="h-80"
                      className3="h-7 w-14 ml-6"
                    />
                  </CarouselItem>
                ))
              ) 
              }
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline" />
            <CarouselNext className="hidden md:inline" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
