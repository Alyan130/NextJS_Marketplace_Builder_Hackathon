"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
import { addtoWishlist } from "@/app/store/features/wishlist";
import { FaHeart } from "react-icons/fa";

interface wishlistData {
    _id: string;
    title: string;
    image: string;
    price: number;
    description:string,
    inventory:number,
  }


function WishListToast({ wishItem }: {wishItem : wishlistData }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addtoWishlist(wishItem));
    toast.success("Item added successfully!", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <div className="w-fit">
      <Button
        className="bg-btncolor hover:bg-teal-600 text-white h-12 w-36 sm:w-44 px-6 py-4 rounded-[10px] text-lg group"
        onClick={handleAddToCart}
      >
        <FaHeart className="h-5 w-5 transition-transform group-hover:translate-x-1 mr-2" />
       Wishlist
      </Button>
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
}

export default WishListToast;
