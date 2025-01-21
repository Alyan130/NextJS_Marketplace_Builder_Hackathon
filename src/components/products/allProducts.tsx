// "use client"

// import React, { useEffect, useState } from "react";
// import ProductCard from "./productcard";
// import { productType } from "@/utils/type";
// import { useAppSelector, useAppDispatch } from '@/app/store/hook';
// import { fetchProducts } from '@/app/store/features/product';

// export default function AllProducts() {

//   const dispatch = useAppDispatch();
//     const products:productType[] = useAppSelector((state) => state.product.products);

//     useEffect(() => {
//       dispatch(fetchProducts());
//     }, [dispatch]);

//   return (
//     <section className="py-16 mb-16 md:mb-20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-2 lg:px-1">
//         <div className="w-full py-1 flex items-center md:justify-between justify-center mb-5 px-6">
//           <span className="text-3xl md:text-[32px] font-semibold text-color1">
//             All Products
//           </span>
//         </div>
//         <div className="py-4 px-4 sm:px-2 md:px-0 w-full flex flex-wrap gap-x-10 gap-y-10 md:gap-y-14 justify-center md:justify-center">
//           {products.map((e) => (
//             <ProductCard
//               key={e._id}
//               _id={e._id}
//               title={e.title}
//               price={e.price}
//               image={e.image}
//               badge={e.badge}
//               priceWithoutDiscount={e.priceWithoutDiscount}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./productcard";
import { productType } from "@/utils/type";
import { useAppSelector, useAppDispatch } from "@/app/store/hook";
import { fetchProducts } from "@/app/store/features/product";
import PaginationProps from "./PaginationProps";
import { Skeleton } from "../ui/skeleton";

export default function AllProducts() {
  const dispatch = useAppDispatch();
  const products: productType[] = useAppSelector(
    (state) => state.product.products
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );


  return (
    <section className="py-16 mb-16 md:mb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-2 lg:px-1">
        <div className="w-full py-1 flex items-center md:justify-between justify-center mb-5 px-6">
          <span className="text-3xl md:text-[32px] font-semibold text-color1">
            All Products
          </span>
        </div>
        <div className="py-4 px-[8px] sm:px-2 md:px-0 w-full flex flex-row flex-wrap gap-x-4 sm:gap-x-10 gap-y-20 sm:gap-y-14 justify-between md:justify-center">
          {currentProducts.length > 0
            ? currentProducts.map((e) => (
                <ProductCard
                  key={e._id}
                  _id={e._id}
                  title={e.title}
                  price={e.price}
                  image={e.image}
                  badge={e.badge}
                  priceWithoutDiscount={e.priceWithoutDiscount}
                  className1="w-[147px] h-44"
                  className2="h-36"
                  className3="h-6 w-12 ml-2"
                />
              )):(
              <div className="py-4 px-[10px] sm:px-2 md:px-0 w-full flex flex-row flex-wrap gap-x-4 sm:gap-x-12 gap-y-20 sm:gap-y-14 justify-between md:justify-center">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="">
                  <Skeleton className="h-44 sm:h-60 bg-slate-200 w-[147px] sm:w-[250px] rounded-xl mb-2" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-slate-200 w-[147px] sm:w-[250px] " />
                    <Skeleton className="h-4 bg-slate-200  w-3/5" />
                  </div>
                </div>
              ))}
            </div>
           )}
        </div>
        <div className="flex justify-center mt-12">
          <PaginationProps
            total={Math.ceil(products.length / productsPerPage)}
            current={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}
