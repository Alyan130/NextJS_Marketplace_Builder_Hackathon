import { client } from "@/sanity/lib/client";

export async function fetchCategories() {
    const query = `
    *[_type=="categories"]{
      image,
      title,
      products,
      "slug":slug.current,      
    }
    `;
    try {
      const categories = await client.fetch(query);
      return categories;
    } catch (error) {
      console.error("Error fetching featured products:", error);
      return [];
    }
  }