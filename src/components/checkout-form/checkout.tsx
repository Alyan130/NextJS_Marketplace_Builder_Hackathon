import React from 'react'
import CheckoutOrder from './checkoutOrder';

function Checkout() {
  return (
   <>
   <section className='w-full px-0 sm:px-0'>
    <div className='flex sm:flex-row flex-col items-start justify-evenly'>
    <div className="w-full max-w-3xl p-8">
        <form className="bg-slate-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Shipping address</h1>

            <div className="mb-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 dark:text-white mb-1 font-semibold"> Name</label>
                        <input type="text" id="name"
                         className="w-full  rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                         placeholder="Michael Smith"
                         />
                    </div>
                   
                <div className="mt-4">
                    <label htmlFor="address_1" className="font-semibold block text-gray-700 dark:text-white mb-1">Address 1</label>
                    <input type="text" id="address_1" 
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    placeholder="456 Oak Avenue"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="address_2" className=" font-semibold block text-gray-700 dark:text-white mb-1">Address 2</label>
                    <input type="text" id="address_2"
                     className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                     placeholder="Suite 200"
                     />
                </div>
                    
                <div className="mt-4">
                    <label htmlFor="phone" className="font-semibold  block text-gray-700 dark:text-white mb-1">Phone</label>
                    <input type="text" 
                    id="address"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    placeholder="+1 555 987 6543"
                    />
                </div>


                <div className="mt-4">
                    <label htmlFor="city" className="font-semibold  block text-gray-700 dark:text-white mb-1">City</label>
                    <input type="text" 
                    id="city" 
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                         placeholder="Los Angeles"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="state" className="font-semibold  block text-gray-700 dark:text-white mb-1">State</label>
                        <input type="text" id="state" 
                        className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                        placeholder="CA"
                        />
                    </div>
                    <div>
                        <label htmlFor="postal" 
                        className="font-semibold  block text-gray-700 dark:text-white mb-1">Postal code</label>
                        <input type="text" id="postal"
                        className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                        placeholder="90001"
                        />
                    </div>
                    <div>
                        <label htmlFor="country" 
                        className="font-semibold  block text-gray-700 dark:text-white mb-1">Country code</label>
                        <input type="text" id="country"
                        className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                        placeholder="US"
                        />
                    </div>
                </div>
                <div className="mt-4">
          <label htmlFor="addressResidentialIndicator" className="font-semibold  block text-gray-700 dark:text-white mb-1">
            Address Residential Indicator
          </label>
          <select
            id="addressResidentialIndicator"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
            </div>
            <button
          type="submit"
          className=" font-semibold w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
        >
          Submit
        </button>
            </form>
            </div>
                <CheckoutOrder shipping={75}/> 
            </div>
   </section>
   </>
  )
}

export default Checkout;