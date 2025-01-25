
import { Check, Package, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fetchOrders } from "@/utils/order";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  title: string; 
  price: number; 
  image:string;
}

interface OrderProduct {
  product: Product; 
  quantity: number; 
}

interface Order {
  number: string; 
  customerID: string; 
  shipmentID: string; 
  products: OrderProduct[];
}

export default async function OrderComplete({params}:{params:Promise<{number:string}>}) {

  const data = await params;
  const ordernumber= data.number;
const order:Order = await fetchOrders(ordernumber);


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
       
        <div className="text-center mb-12">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order {order.number} has been confirmed.
          </p>
        </div>

     
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-sm font-medium text-green-600 mt-2">Order Placed</p>
            </div>
            <div className="flex-1 h-1 bg-green-200 mx-4" />
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-sm font-medium text-green-600 mt-2">Processing</p>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4" />
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-400 mt-2">Shipped</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.products.map(e => (
                <div key={e.product.title} className="flex pb-2 items-center border-b-[1px] border-slate-200 space-x-4">
                  <img
                    src={urlFor(e.product.image).url()}
                    alt={"pic"}
                    className="h-16 w-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{e.product.title}</h3>
                    <p className="text-sm text-gray-500">Quantity: {e.quantity}</p>
                  </div>
                  <p className="font-medium">Price : {e.product.price}</p>
                </div>
              ))}
            </div>
           </div>
        
        
        <div className="mb-8 mt-4">
          <div className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Order details</h2>
            <div className="space-y-2">
              <p className="">Order number : {order.number}</p>
              <p className="">Customer ID : {order.customerID}</p>
              <p className="">
                Shipment ID : {order.shipmentID}
              </p>
            </div>
          </div>
        </div>

      
        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}