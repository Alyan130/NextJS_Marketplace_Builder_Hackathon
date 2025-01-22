import Link from "next/link";

export interface productdata {
  _id:string,
  image: string;
  title: string;
  price: number;
}

export default function DetailSection({ _id,image, price, title }: productdata) {
  return (
    <>
    <Link href={`/product/${_id}`}>
      <div className="hover:scale-105 transition-all w-full max-w-[300px] md:max-w-[270px] flex flex-col  shadow-md">
        <div
          className="w-full h-60 sm:h-72 md:h-80 rounded-[10px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="w-full flex flex-row justify-between py-3 px-2  bg-white">
          <div className="flex flex-col space-y-1">
            <p className="text-sm sm:text-base font-medium">{title}</p>
          </div>
          <p className="text-sm sm:text-lg font-bold">{`$${price}`}</p>
        </div>
      </div>
      </Link>
    </>
  );
}
