"use client"

import React from 'react'
import { useAppSelector } from "@/app/store/hook";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';



function CheckoutOrder({shipping}:{shipping:number}) {
    const cart = useAppSelector((state) => state.cart);

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const ship= cart.length > 0 ? shipping : 0;
      const totalPrice = subtotal + ship;

  return (
    <>
 
    <div className="flex flex-col justify-center items-center w-full p-8">
    <div className="bg-slate-50 rounded-lg shadow-lg p-6 w-[100%]"> 
        <h1 className="text-2xl font-bold mb-6">Summary</h1>
        <div className="flex flex-col justify-between mb-4 space-y-6">
        {cart.length > 0 ? (
        cart.map((e) => (
            <div key={e._id} className="flex items-start justify-between w-full">
                <Image
                src={urlFor(e.image).url()} 
                alt="Image" 
                className="w-[20%] h-auto"
                width={100}
                height={100}
                />
                <div>
                    <h2 className="font-bold self">{e.title}<span>{" "} {` X  ${e.quantity}`}</span></h2>
                </div>
            <div className="flex items-center">
                <span className="font-bold">{`$${e.price}`}</span>
            </div> 
            </div>
        ))
        ):null
        }
        </div>
        <hr className="my-4"/>
        <div className="flex justify-between items-center">
            <span className="font-bold">Subtotal:</span>
            <span className="font-bold">{`$${subtotal.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
            <span className='font-bold'>Shipping Charges:</span>
            <span className='font-bold'>{`$${ship.toFixed(2)}`}</span>
        </div>
        <hr className="my-4"/>
        <div className="flex justify-between items-center">
            <span className="font-bold">Total:</span>
            <span className="font-bold">{`$${totalPrice.toFixed(2)}`}</span>
        </div>
    </div>
</div>
    </>
  )
}

export default CheckoutOrder