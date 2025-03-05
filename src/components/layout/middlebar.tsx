"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Navbar from "./links";
import { RiMenuLine } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useAppSelector } from "@/app/store/hook";
import { FaRegHeart } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const cart = useAppSelector((state) => state.cart);
  const wishlist = useAppSelector((state) => state.wishlist);

  return (
    <>
      <header className="bg-color3 border-b h-[84px] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2"  aria-labelledby="Home">
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <img src="/icons/Vector.png" alt="Logo" />
              </div>
              <span className="text-xl md:text-[26px] font-medium text-color1">
                Comfy
              </span>
            </Link>

            <div className="hidden md:flex flex-1 justify-center"></div>


            <div className="flex items-center rounded-full justify-end sm:space-x-8 space-x-6 xs:ml-24 ml-32 sm:hidden">
              <div className="flex flex-col items-center justify-end gap-0.5 cursor-pointer">
                <Link href={"/wishlist"} aria-labelledby="Cart">
                  <div className="relative" role="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer fill-[#333] inline w-6 h-6"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                    {wishlist.length > 0 && (
                      <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                        {wishlist.length}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5 xs:mr-4 cursor-pointer">
                <Link href={"/cart"} aria-labelledby="Wishlist">
                  {" "}
                  <div className="relative" role="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      className="cursor-pointer fill-[#333] inline"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                        data-original="#000000"
                      ></path>
                    </svg>
                    {cart.length > 0 && (
                      <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                        {cart.length}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>

            <Link href={"/cart"}>
              {" "}
              <button aria-label="wishlist" className="hidden md:flex items-center justify-center w-24 md:w-36 h-11 gap-3 bg-white">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-[12px] font-medium text-color1">
                  Cart
                </span>
                {cart.length > 0 && (
                  <div className="w-6 h-6 text-sm rounded-[50%] text-white bg-iconcolor flex items-center justify-center">
                    {cart.length}
                  </div>
                )}
              </button>
            </Link>
            <Link href={"/wishlist"}>
              <button className="bg-white hidden md:flex p-3 text-center ml-4">
                <FaRegHeart className="hover:text-pink-500 text-xl" />
                {wishlist.length > 0 && (
                  <div className="w-5 h-5 ml-3 text-sm rounded-[50%] text-white bg-iconcolor flex items-center justify-center">
                    {wishlist.length}
                  </div>
                )}
              </button>
            </Link>

            <Sheet>
              <SheetTrigger>
                <RiMenuLine size={24} className="font-bold md:hidden" />
              </SheetTrigger>

              <SheetContent className="flex flex-col items-center py-20 px-6 bg-white">
                <ul className="mb-6 text-center">
                  <Link href={"/"} >
                    <li className="text-[#636270] text-[18px] font-medium hover:text-btncolor mb-2">
                      Home
                    </li>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-[#636270] text-[18px]  font-medium  hover:text-btncolor mb-2">
                      Products 
                    </DropdownMenuTrigger>
                   <DropdownMenuContent>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-[#636270] border-none  hover:text-btncolor text-[16px] ">
                        <Link href={"/desk-chair"}>Desk Chair</Link>{" "}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[#636270] border-none  hover:text-btncolor text-[16px] ">
                        <Link href={"/wooden-chair"}>Wooden Chair</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[#636270] border-none  hover:text-btncolor text-[16px] ">
                        <Link href={"/wing-chair"}>Wing Chair</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[#636270] border-none  hover:text-btncolor text-[16px] ">
                        <Link href={"/product"}>All Products</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href={"/faq"}>
                    <li className="text-[#636270] text-[18px] font-medium  hover:text-btncolor mb-2">
                      Faq
                    </li>
                  </Link>
                  <Link href={"/about"}>
                    <li className="text-[#636270] text-[18px] font-medium  hover:text-btncolor mb-2">
                      About
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li className="text-[#636270] text-[18px] font-medium  hover:text-btncolor">
                      Contact
                    </li>
                  </Link>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
}
