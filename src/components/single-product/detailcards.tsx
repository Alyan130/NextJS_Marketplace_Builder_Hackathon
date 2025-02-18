// "use client";

// import DetailSection from "./deatilSection2";
// import { fetchFeaturedProducts } from "@/utils/Featured";
// import { urlFor } from "@/sanity/lib/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Skeleton } from "../ui/skeleton";

// interface products {
//   _id: string;
//   image: string;
//   title: string;
//   price: number;
// }

// export default function DetailCards() {
//   const [products, setProducts] = useState<products[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const products = await fetchFeaturedProducts();
//       setProducts(products);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <section className="py-16 md:py-20 mt-8 md:mt-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
//           <div className="w-full py-1 flex flex-row items-center md:justify-between justify-center mb-2 md:mb-5">
//             <span className="text-[20px] md:text-[28px] tracking-[0.1em] font-semibold text-color1 uppercase mb-7">
//               Featured Products
//             </span>
//            <Link href={"/product"}> <p className="mr-4 text-black text-xl font-bold hidden md:block underline decoration-black decoration-2 underline-offset-4">
//               View all
//             </p></Link>
//           </div>
//           <Carousel className="w-full" opts={{ align: "start" }}>
//             <CarouselContent className="flex gap-4 sm:gap-x-0 gap-x-4 pl-4 sm:pl-none">
//               {
//               products.length > 0 ?
//               products.map((e) => (
//                 <CarouselItem
//                   key={e._id}
//                   className="w-[75%]  sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
//                 >
//                   <DetailSection
//                     key={e._id}
//                     _id={e._id}
//                     image={urlFor(e.image).url()}
//                     title={e.title}
//                     price={e.price}
//                   />
//                 </CarouselItem>
//               ))
//               </CarouselContent>
//               :(
//                 <CarouselContent className="flex gap-4 sm:gap-x-0 gap-x-10 pl-4 sm:pl-none">
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <CarouselItem
//                       key={index}
//                       className="w-[75%]  sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
//                     >
//                       <Skeleton className="h-60 sm:h-72 md:h-80 bg-slate-200 w-[300px] sm:w-[250px] rounded-xl mb-2" />
//                       <div className="space-y-2">
//                         <Skeleton className="h-4 bg-slate-200 w-[147px] sm:w-[250px] " />
//                         <Skeleton className="h-4 bg-slate-200  w-3/5" />
//                       </div>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//               )
//             }
//             <CarouselPrevious className="hidden md:inline" />
//             <CarouselNext className="hidden md:inline" />
//           </Carousel>
//         </div>
//       </section>
//     </>
//   );
// }




"use client";

import DetailSection from "./deatilSection2";
import { fetchFeaturedProducts } from "@/utils/Featured";
import { urlFor } from "@/sanity/lib/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

interface Products {
  _id: string;
  image: string;
  title: string;
  price: number;
}

export default function DetailCards() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await fetchFeaturedProducts();
      setProducts(fetchedProducts || []);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-20 md:py-20 mt-14 md:mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="w-full py-1 flex flex-row items-center md:justify-between justify-center mb-2 md:mb-5">
          <span className="text-[20px] md:text-[28px] tracking-[0.1em] font-semibold text-color1 uppercase mb-7">
            Featured Products
          </span>
          <Link href="/product">
            <p className="mr-4 text-black text-xl font-bold hidden md:block underline decoration-black decoration-2 underline-offset-4">
              View all
            </p>
          </Link>
        </div>

        <Carousel className="w-full" opts={{ align: "start" }}>
          <CarouselContent className="flex gap-4 sm:gap-x-0 gap-x-4 pl-4 sm:pl-none">
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="w-[75%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
                >
                  <Skeleton className="h-60 sm:h-72 md:h-80 bg-slate-200 w-[300px] sm:w-[250px] rounded-xl mb-2" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-slate-200 w-[147px] sm:w-[250px]" />
                    <Skeleton className="h-4 bg-slate-200 w-3/5" />
                  </div>
                </CarouselItem>
              ))
            ) : products.length > 0 ? (
              products.map((e) => (
                <CarouselItem
                  key={e._id}
                  className="w-[75%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
                >
                  <DetailSection
                    _id={e._id}
                    image={urlFor(e.image).url()}
                    title={e.title}
                    price={e.price}
                  />
                </CarouselItem>
              ))
            ) : (
              Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="w-[75%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
                >
                  <Skeleton className="h-60 sm:h-72 md:h-80 bg-slate-200 w-[300px] sm:w-[250px] rounded-xl mb-2" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-slate-200 w-[147px] sm:w-[250px]" />
                    <Skeleton className="h-4 bg-slate-200 w-3/5" />
                  </div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline" />
          <CarouselNext className="hidden md:inline" />
        </Carousel>
      </div>
    </section>
  );
}
