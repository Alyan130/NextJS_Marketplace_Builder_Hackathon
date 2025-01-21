"use client"

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

export default function FeaturedProdoucts() {
  const [data, setData] = useState<productType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchFeaturedProducts();
      setData(products);
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
              {data.map((e) => (
                <CarouselItem
                  key={e._id}
                  className="w-[83%]  sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex-[0_0_auto]"
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
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline" />
            <CarouselNext className="hidden md:inline" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
