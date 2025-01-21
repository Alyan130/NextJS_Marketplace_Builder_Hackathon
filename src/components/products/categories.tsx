"use client"

import { urlFor } from '@/sanity/lib/image';
import { fetchCategories } from '@/utils/Categories';
import Link from 'next/link'
import { useEffect, useState } from 'react';

interface Category {
  title: string;
  products: number;
  image: string;
  slug:string,
}



export default function CategoryCards() {

  const [categories, setCategories]=useState<Category[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchCategories();
      setCategories(products);
    };
    fetchProducts();
  }, []);


  return (
    <section className='py-8 md:py-14'>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 group">
       <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between ml-1 mb-3 md:mb-5">
                <span className="text-[24px] md:text-[32px] font-semibold text-color1">Top Categories</span>
            </div>
      <div  data-aos="zoom-in" className="py-6 md:px-0 px-4 space-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity"
          >
           
           <div className=' w-full h-80 md:w-[424px] md:h-[420px] rounded-[5px] bg-contain  bg-center' style={{backgroundImage:`url(${urlFor(category.image).url()})`}}>
           </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-0 p-2 text-white  bg-gradient-to-r from-black/50 via-black/30 to-black/10 w-full">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-[14px] text-gray-300">{category.products} Products</p>
            </div>
          </Link>
        ))
        }
      </div>
    </div>
    </section>
  )
}

