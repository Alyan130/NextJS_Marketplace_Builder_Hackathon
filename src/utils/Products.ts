import { client } from "@/sanity/lib/client";

export async function fetchProducts() {
    const query = `
      *[_type == "products"] {
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        image,
        tags
      }[0..7]
    `;
  
    try {
      const products = await client.fetch(query);
      return products;
    } catch (error) {
      console.error("Error fetching featured products:", error);
      return [];
    }
  }