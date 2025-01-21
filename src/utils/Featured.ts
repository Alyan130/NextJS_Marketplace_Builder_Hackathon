import { client } from "@/sanity/lib/client";

export async function fetchFeaturedProducts() {
    const query = `
      *[_type == "products" && "featured" in tags[]] {
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        image,
        tags
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