
import { Check, Package, ShoppingBag, Truck } from "lucide-react";

export default function OrderComplete() {
  

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
     
        <div className="text-center mb-12">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        {/* Order Progress */}
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
      </div>
    </div>
  );
}