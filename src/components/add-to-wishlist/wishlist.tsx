"use client";
import Wishlistcard from "./wishlistCard";
import { useAppSelector } from "@/app/store/hook";

export default function Wishlist() {
  const wishlist = useAppSelector((state)=>state.wishlist);


  return (
    <section className="w-full py-12 mt-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between">
          <div className="w-full lg:w-[80%] flex flex-col space-y-20">
            {wishlist.length > 0 ? (
              wishlist.map((e) => (
               <Wishlistcard
               key={e._id}
                id={e._id}
                title={e.title}
                price={e.price}
                inventory={e.inventory}
                image={e.image}
                description={e.description}
               />
              ))
            ) : (
              <div className="text-center text-gray-500 text-2xl">
                Your Wishlist is empty.
              </div>
            )}
          </div>
          </div>
          </div>
          </section>
  )
            }
