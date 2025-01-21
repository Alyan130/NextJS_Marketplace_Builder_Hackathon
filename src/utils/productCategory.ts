import { client } from "@/sanity/lib/client";

export async function fetchProductCategory(category:string) {
    const query = `
    *[_type=="products" && category->slug.current=="${category}"]{
        _id,
        title,
        image,
        price,
        badge,
        priceWithoutDiscount,
        tags,
      }
    `;
  
    try {
      const products = await client.fetch(query);
      return products;
    } catch (error) {
      console.error("Error fetching featured products:", error);
      return [];
    }
  }