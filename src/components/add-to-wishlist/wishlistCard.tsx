"use client";

import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "@/app/store/features/wishlist";
import { urlFor } from "@/sanity/lib/image";

interface wishlistData {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  inventory: number;
}

function Wishlistcard({ id, title, price, image, description }: wishlistData) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromWishList(id));
  };

  return (
    <div className="w-full flex flex-row justify-between">
      <div className="w-[100%] flex flex-col md:flex-row gap-8 sm:border-b-2 border-slate-200 sm:pb-3">
        <div
          className="sm:w-[200px] w-[150px] h-[150px] sm:h-[160px] border-black bg-cover bg-center"
          style={{ backgroundImage: `url('${urlFor(image).url()}')` }}
        ></div>
        <div className="w-full h-[150px] flex flex-col space-y-6">
          <p className="text-xl text-color1 font-semibold">{title}</p>
          <p>{description}</p>
          <div className="text-[24px] flex w-full border-b-2 border-slate-200 pb-3 sm:border-none sm:pb-3 ">
            <RiDeleteBin6Fill
              onClick={handleRemove}
              className=" text-red-600 text-2xl"
            />
          </div>
        </div>
      </div>
      <hr className="my-4 text-slate-400" />
      <div className="w-[20%]">
        <p>
          MRP: <span className="text-lg font-semibold">{`$${price}`}</span>
        </p>
      </div>
    </div>
  );
}

export default Wishlistcard;
