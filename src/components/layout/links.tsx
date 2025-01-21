"use client"
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";


export default function Navbar() {
  const [name,setName]=useState<string>("");
    return (
      <>
     <nav className="hidden md:block w-full h-[74px] py-6 border-b-2 border-slate-100  px-2 lg:px-2">
    <div className="max-w-6xl mx-auto  flex flex-row items-center justify-between">
    <ul className="gap-8 hidden md:flex ml-1">
        <Link href={"/"} ><li className="text-[#636270]  hover:text-btncolor text-[16px] font-meduim">Home</li></Link>
        <Link href={"/cart"}><li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">Shop</li></Link>
        <DropdownMenu>
  <DropdownMenuTrigger className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">Products</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-[#636270] border-none  hover:text-btncolor text-[16px] "><Link href={"/desk-chair"}>Desk Chair</Link> </DropdownMenuItem>
   <DropdownMenuItem className="text-[#636270] border-none  hover:text-btncolor text-[16px] "><Link href={"/wooden-chair"}>Wooden Chair</Link></DropdownMenuItem>
    <DropdownMenuItem className="text-[#636270] border-none  hover:text-btncolor text-[16px] "><Link href={"/wing-chair"}>Wing Chair</Link></DropdownMenuItem>
    <DropdownMenuItem className="text-[#636270] border-none  hover:text-btncolor text-[16px] "><Link href={"/product"}>All Products</Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        <Link href={"/about"}><li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">About</li> </Link>
        <Link href={"/contact"}><li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">Contact</li> </Link>
    </ul>
    <div className="relative mr-2">
    <input 
    className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
    type="search"
    onChange={(e)=>{setName(e.target.value)}}
    value={name}
     placeholder="Search Products"/>
    <Link href={`/search/${name}`}><button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-blue-500 border border-gray-300 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    <svg className="h-5 w-5 text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path  d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
    </svg>
  </button></Link>
</div>
</div>
      </nav>
      </>
    );
}