import { fetchSearchProducts } from '@/utils/searchProduct';
import React from 'react'
import { productType } from '@/utils/type';
import ProductCard from '@/components/products/productcard';
import Image from 'next/image';

 async function Searchpage({params}:{params:Promise<{search:string}>}) {
  const searchparam = await params;
  const{search}=searchparam;

 const productName = decodeURIComponent(search);
 const product:productType[]= await fetchSearchProducts(productName);

if(!product.length){
  return(
  <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center sm:px-6 lg:px-0">
          <div>
          <Image
          src={"/images/No_Product_Found.png"}
          alt='pic'
          className='w-80 h-80'
          width={300}
          height={300}
          />
          </div>
        </div>
      </section>
  )
}

  return (
    <>
    <main>
     <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
           
        <div className="py-4 px-4 sm:px-2 md:px-0 w-full flex flex-row flex-wrap gap-x-4 sm:gap-x-12 gap-y-14 sm:gap-y-14 justify-center md:justify-center items-center">
            
            {
              product ? (
            product.map((e) => (
              <ProductCard
              key={e._id}
                _id={e._id}
                title={e.title}
                price={e.price}
                badge={e.badge || ""}
                image={e.image}
                priceWithoutDiscount={e.priceWithoutDiscount}
                className1="w-[300px] h-96"
          className2="h-80"
          className3="h-7 w-14 ml-6"
              />
            ))
              ): <p>{productName}</p>
            }
          </div>
        </div>
      </section>
      </main>
    </>
  )
}



export default Searchpage;