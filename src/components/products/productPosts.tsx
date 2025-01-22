"use client"

import { urlFor } from "@/sanity/lib/image";
import { fetchInstaProducts } from "@/utils/Instagram";
import Image from "next/image";
import { useEffect, useState } from "react";


interface products{
  _id:string,
  image:string,
}

export function ProductPosts() {
  const [instagramPosts,setInstagramPosts]=useState<products[]>([]);
//  const instagramPosts:products[] = await fetchInstaProducts();

 useEffect(()=>{
  const fetchProducts = async ()=>{
    const products = await fetchInstaProducts();
    setInstagramPosts(products);
  }
  fetchProducts();
 },[])

  return (
    <section className="py-10 sm:py-16 md:py-18  px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-meduim text-center mb-10 font-roboto">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-0 md:px-8">
          {instagramPosts.map((post) => (
            <div
              key={post._id}
              className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Image
                src={`${urlFor(post.image).url()}`}
                alt={"pics"}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}