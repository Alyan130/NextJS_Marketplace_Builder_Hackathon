"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Navbar() {
  const [name, setName] = useState<string>("");
  return (
    <>
      <nav className="hidden md:block w-full h-[74px] py-6 border-b-2 border-slate-100  px-2 lg:px-2">
        <div className="max-w-6xl mx-auto  flex flex-row items-center justify-between">
          <ul className="gap-8 hidden md:flex ml-1">
            <Link href={"/"}>
              <li className="text-[#636270]  hover:text-btncolor text-[16px] font-meduim">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">
                Shop
              </li>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">
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
            <Link href={"/about"}>
              <li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">
                About
              </li>{" "}
            </Link>
            <Link href={"/contact"}>
              <li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">
                Contact
              </li>{" "}
            </Link>
          </ul>
          <div className="relative mr-2">
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="search"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="Search Products"
            />
            <Link href={`/search/${name}`}>
              <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-blue-500 border border-gray-300 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <svg
                  className="h-5 w-5 text-white "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="block md:hidden w-full h-[74px] border-b-2 pb-4 bg-color3 ">
        <div className="max-w-6xl mx-auto px-8 flex flex-row items-center justify-between">
          <div className="flex px-4 py-4 border-2  overflow-hidden rounded-full bg-white w-full mx-auto">
            <input
              type="search"
              placeholder="Search Products"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="w-full outline-none   text-sm"
            />
           <Link href={`/search/${name}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-gray-600"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button></Link>
          </div>
        </div>
      </nav>
    </>
  );
}
