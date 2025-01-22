import { fetchProductCategory } from '@/utils/productCategory';
import React from 'react'
import { productType } from '@/utils/type';
import ProductCard from '@/components/products/productcard';


 async function Categorypage({params}:{params:Promise<{category:string}>}) {
  const categoryparam = await params;
  const{category}=categoryparam;
 const product:productType[] = await fetchProductCategory(category);

const categoryName = category.replace("-", " ");
 
  return (
   <>
   <main>
  <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full py-1 flex items-center justify-center mb-2 md-mb-15">
            <span className="text-[24px] md:text-5xl font-semibold text-color1 capitalize">
             {categoryName}
            </span>
          </div>
    
          <div className="py-4 px-[9px] sm:px-2 md:px-0 w-full flex flex-row flex-wrap gap-x-2 sm:gap-x-12 gap-y-20 sm:gap-y-14 justify-between md:justify-center">
            {product.map((e) => (
              
              <ProductCard
              key={e._id}
                _id={e._id}
                title={e.title}
                price={e.price}
                badge={e.badge || ""}
                image={e.image}
                priceWithoutDiscount={e.priceWithoutDiscount}
                className1="w-[145px] h-44"
              className2="h-36"
              className3="h-6 w-12 ml-2"

              />
            ))}
          </div>
        </div>
      </section>
      </main>
   </>
  )
}

export default Categorypage