"use client"


import ProductCard from "./productcard";
import { productType } from "@/utils/type";
import { Skeleton } from "../ui/skeleton";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/utils/Products";

export default  function Products() {

  const [data, setData] = useState<productType[]>([]);

  
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await fetchProducts();
      setData(product)
    };
    fetchProduct();
  }, []);
  return (
    <>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full py-1 flex items-center justify-center mb-2 md-mb-5">
            <span className="text-[24px] md:text-[32px] font-semibold text-color1">
              Products
            </span>
          </div>

          <div className="py-4 px-[10px] sm:px-2 md:px-0 w-full flex flex-row flex-wrap gap-x-4 sm:gap-x-12 gap-y-20 sm:gap-y-14 justify-between md:justify-center">
            {data.length > 0 ? (
              data.map((e) => (
                <ProductCard
                  key={e._id}
                  _id={e._id}
                  title={e.title}
                  price={e.price}
                  badge={e.badge || ""}
                  image={e.image}
                  priceWithoutDiscount={e.priceWithoutDiscount}
                  className1="xs:w-[138px] w-[153px] h-44"
                  className2="h-36"
                  className3="h-6 w-12 ml-2"
                />
              ))
            ) : (
              <div className="py-4 px-[10px] sm:px-2 md:px-0 w-full flex flex-row flex-wrap gap-x-4 sm:gap-x-12 gap-y-20 sm:gap-y-14 justify-between md:justify-center">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="">
                    <Skeleton className="h-44 sm:h-60 bg-slate-200 xs:w-[138px] w-[153px]  sm:w-[250px] rounded-xl mb-2" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 bg-slate-200 w-[147px] sm:w-[250px] " />
                      <Skeleton className="h-4 bg-slate-200  w-3/5" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
