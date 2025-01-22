import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { productType } from "@/utils/type";

export default function ProductCard({
  _id,
  title,
  price,
  image,
  badge,
  priceWithoutDiscount,
  className1,
  className2,
  className3,
}: productType) {
  return (
    <>
      <div
        className={`hover:scale-105 transition-all duration-200 ease ${className1} sm:w-[240px] flex flex-col sm:h-96`}
      >
        <Link href={`/product/${_id}`}  aria-labelledby="product">
          <div
            className={`relative w-full sm:h-80 ${className2} rounded-[10px] bg-cover bg-center`}
            style={{ backgroundImage: `url("${urlFor(image).url()}")` }}
          >
            {badge ? (
              <div
                className={`absolute  text-center py-1 px-1 mt-6 sm:ml-6 ${className3} rounded-md ${
                  badge == "New"
                    ? "bg-green-600"
                    : badge == "Sales"
                      ? "bg-orange-600"
                      : "bg-transparent"
                }`}
              >
                <p className="text-[13px] text-white">{badge}</p>
              </div>
            ) : null}
          </div>
        </Link>
        <div className="w-full flex flex-row justify-between py-3 px-1">
          <div className="flex flex-col space-y-1">
            <p className="text-[16px]">{title}</p>
            <p className="text-[18px]">
              {`$${price}`}{" "}
              <s className="text-[14px] text-color1">{priceWithoutDiscount}</s>
            </p>
          </div>
          <Link href={`/product/${_id}`} aria-label="Go to your shopping cart">
            <div role="button" className="h-11 w-11 hover:bg-btncolor hover:text-white flex items-center self-center justify-center rounded-md text-[22px] text-color1 bg-[#F0F2F3]">
              <ShoppingCart />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
