"use client";

import { Button } from "@/components/ui/button";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, selectProductById } from "@/app/store/features/product";
import { AppDispatch, RootState } from "@/app/store/store";
import CartToast from "../add-to-cart/addCartToast";
import { urlFor } from "@/sanity/lib/image";
import WishListToast from "../add-to-wishlist/wishlistToast";
import { Skeleton } from "../ui/skeleton";


interface Params {
  params: Promise<{ id: string }>;
}

interface CartItem {
  _id: string,
  title: string,
  image: string,
  price: number,
  quantity: number,
  totalPrice: number,
  inventory:number,
}

interface wishlistData {
  _id: string;
  title: string;
  image: string;
  price: number;
  description:string,
  inventory:number,
}



export default function ProductDetail({ params }: Params) {
  const [id, setId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state:RootState) =>
    id ? selectProductById(state,id) : null
  );

  const [cartItem, setCartItem] = useState<CartItem>({
    _id: "",
    title: "",
    image: "",
    price: 0,
    quantity: 1,
    totalPrice: 0,
    inventory:0,
  });

  const [ wishItem, setWishItem] = useState<wishlistData>({
    _id: "",
    title: "",
    image: "",
    price: 0,
    inventory:0,
    description:"",
  });

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id && !product) {
      dispatch(fetchProducts());
    } else if (product) {
      setCartItem({
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
        inventory:product.inventory,
      });
        
     setWishItem({
      _id: product._id,
      title: product.title,
      image: product.image,
      price: product.price,
      inventory:product.inventory,
      description:product.description,
     })
    }
  }, [dispatch, id, product]);

  const incrementQuantity = () => {
    if(cartItem.inventory>cartItem.quantity){ 
    setCartItem((prevState) => {
      const updatedQuantity = prevState.quantity + 1;
      return {
        ...prevState,
        quantity: updatedQuantity,
        totalPrice: prevState.price * updatedQuantity,
      };
    });
  }
  };

  const decrementQuantity = () => {
    if (cartItem.quantity > 1) {
      setCartItem((prevState) => {
        const updatedQuantity = prevState.quantity - 1;
        return {
          ...prevState,
          quantity: updatedQuantity,
          totalPrice: prevState.price * updatedQuantity,
        };
      });
    }
  };

  return (
    <section className="w-full mt-16 md:mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {product ? (
          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <div
              className="w-full md:w-[50%] h-[250px] md:h-[478px] bg-cover bg-center"
              style={{ backgroundImage: `url(${urlFor(product.image).url()})` }}
            ></div>

            <div className="pl-4 md:pl-16 w-full md:w-[50%] h-[400px] sm:h-[430px] md:h-[400px] lg:h-[478px] flex flex-col items-start justify-between md:-mt-20 lg:-mt-0">
              <div className="w-[90%]">
                <h2 className="text-4xl leading-[54px] md:eading-[72px] font-inter text-color1 md:text-6xl font-bold mb-4 md:mb-6 lg-mb-8">
                  {product.title}
                </h2>
                <div className="w-full flex gap-x-8">
                  <button className="text-xl font-semibold w-36 h-11 px-4 py-2 rounded-[25px] text-white bg-btncolor">
                    {`$${cartItem.totalPrice} USD`}
                  </button>
                  <button className="text-xl font-semibold w-36 h-11 px-4 py-2 rounded-[25px] bg-slate-200 text-color1">
                    {`Stock : ${product.inventory}`}
                  </button>
                </div>
                <hr className="my-8" />

                <p className="text-[16px] text-xl text-color1 opacity-60 -mt-4  mb-4 md:mb-6 lg-mb-8">
                {product.description}
                </p>

                <div className="flex items-center flex-row">
                  <span className="text-xl md:text-2xl text-color1 font-semibold">
                    Quantity :
                  </span>
                  <Button
                    className="bg-slate-200 hover:bg-teal-600 text-white h-11 w-8 sm:h-12 sm:w-12 px-6 ml-4 py-4 rounded-[50%] text-lg group"
                    onClick={incrementQuantity}
                  >
                    <IoMdAdd className="text-xl text-black font-bold" />
                  </Button> 
                  <div className="text-xl md:text-2xl text-color1 ml-4 font-semibold">
                    {cartItem.inventory>cartItem.quantity ? (
                     cartItem.quantity
                    ):"stock full"
}
                  </div>
                  <Button
                    className="bg-slate-200 ml-4 hover:bg-teal-600 text-white h-11 w-8 sm:h-12 sm:w-12 px-6 py-4 rounded-[50%] text-center text-lg group"
                    onClick={decrementQuantity}
                  >
                    <IoMdRemove className="text-xl text-color6 font-bold" />
                  </Button>
                </div>

                <hr className="my-4" />
                 <div className="w-full flex gap-x-6">
                <CartToast cartItem={cartItem} />
                <WishListToast wishItem={wishItem}/>
                </div>
              </div>
            </div>
          </div>
        ) : (      
                <div className="w-full flex  flex-col justify-center md:flex-row items-center gap-4">
                 <Skeleton className="w-full md:w-[50%] h-[250px] md:h-[478px] bg-slate-200  rounded-xl mb-2" />
                 <div className="pl-4 md:pl-16 w-full md:w-[50%] h-[400px] sm:h-[430px] md:h-[400px] lg:h-[478px] flex flex-col items-start justify-between md:-mt-20 lg:-mt-0">
                     <div className="w-full space-y-2">
                    <Skeleton className="h-4 bg-slate-200 w-full" />
                    <Skeleton className="h-4 bg-slate-200 w-full" />
                    <Skeleton className="h-4 bg-slate-200 max-w-[60%]" />
                    </div>
                    </div>
                  </div>
        )}
      </div>
    </section>
  );
}

