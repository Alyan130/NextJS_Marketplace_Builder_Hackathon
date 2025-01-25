import { client } from "@/sanity/lib/client";

export async function fetchOrders(number:string) {
    const query = `
    *[_type == "orders" && number == "${number}"][0]{
        number,
        customerID,
        shipmentID,   
        products[] {
          product->{
            title,
            price,
            image,
          },
          quantity
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