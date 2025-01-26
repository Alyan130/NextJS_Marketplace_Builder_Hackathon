import { client } from "@/sanity/lib/client";

export async function fetchOrders() {
    const query = `
    *[_type == "orders"] | order(_createdAt desc)[0] {
      number,
      customerID,
      shipmentID,
      customerName,
      products[] {
        quantity,
        product-> {
          title,
          price,
          image
        }
      }
    }
    `;
  
    try {
      const orders = await client.fetch(query);
      return orders;
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  }