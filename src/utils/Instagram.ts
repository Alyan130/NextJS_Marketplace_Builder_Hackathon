import { client } from "@/sanity/lib/client";

export async function fetchInstaProducts() {
    const query = `
    *[_type=="products" &&  "instagram" in tags[] ]{
        _id,
        image,
      }[0..5]
    `;
    try {
      const products = await client.fetch(query);
      return products;
    } catch (error) {
      console.error("Error fetching featured products:", error);
      return [];
    }
  }