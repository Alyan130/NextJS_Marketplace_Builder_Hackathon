import { client } from "@/sanity/lib/client";

export async function fetchSearchProducts(product:string) {
    const query = `
    *[_type == "products" &&(title match "${product}" || category->title match "${product}")] {
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        image,
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