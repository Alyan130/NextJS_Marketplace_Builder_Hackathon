"use client";
import React, { useRef, useState } from "react";
import CheckoutOrder from "./checkoutOrder";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useAppSelector } from "@/app/store/hook";


interface label {
  href: string;
  pdf: string;
  png: string;
}

interface shipment {
  shipmentId: string;
  shipDate: string;
  carrierId: string;
  carrierCode: string;
  trackingNumber: string;
  trackingStatus: string;
  labelId: string;
}

function Checkout() {
  const [selectedRateId, setSelectedRateId] = useState<string | null>(null);
  const [label, setLabelDownload] = useState<label | null>(null);
  const [shipamount, setShipAmont] = useState<number | null>(null);
  const [shipment, setShipment] = useState<shipment | null>(null);
  const [iscreateLabel,setCreateLable]=useState<boolean>(false);
  const [isSubmit , setSubmit]=useState<boolean>(false);

  const cart = useAppSelector((state) => state.cart);

  function generateRandomID(length: number = 15): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomID = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomID += characters[randomIndex];
    }

    return randomID;
  }

  const customerID = generateRandomID();
  const orderNumber= generateRandomID();

  const getName = useRef<HTMLInputElement | null>(null);
  const getPhone = useRef<HTMLInputElement | null>(null);
  const getAd1 = useRef<HTMLInputElement | null>(null);
  const getAd2 = useRef<HTMLInputElement | null>(null);
  const getCity = useRef<HTMLInputElement | null>(null);
  const getProvince = useRef<HTMLInputElement | null>(null);
  const getPostalCode = useRef<HTMLInputElement | null>(null);
  const getCountry = useRef<HTMLInputElement | null>(null);
  const getAddressResidentialIndicator = useRef<HTMLSelectElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Wait for creating shipping label!");
     setSubmit(true);
    if (
      !getName.current?.value ||
      !getPhone.current?.value ||
      !getAd1.current?.value ||
      !getCity.current?.value ||
      !getProvince.current?.value ||
      !getPostalCode.current?.value ||
      !getCountry.current?.value
    ) {
      alert("Please fill all the required fields.");
      return;
    }

    const payload = {
      shipToAddress: {
        name: getName.current?.value || "",
        phone: getPhone.current?.value || "",
        addressLine1: getAd1.current?.value || "",
        addressLine2: getAd2.current?.value || "",
        cityLocality: getCity.current?.value || "",
        stateProvince: getProvince.current?.value || "",
        postalCode: getPostalCode.current?.value || "",
        countryCode: getCountry.current?.value || "",
        addressResidentialIndicator:
          getAddressResidentialIndicator.current?.value || "no",
      },
      packages: [
        {
          weight: {
            value: 1.5,
            unit: "pound",
          },
          dimensions: {
            length: 12,
            width: 8,
            height: 6,
            unit: "inch",
          },
        },
      ],
    };

    try {
      const res = await fetch("/api/shipengine/get-rates", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setSelectedRateId(data.rateResponse.rates[0].rateId);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleCreateLabel = async () => {
    if (!selectedRateId) {
      console.error("No rate selected");
      return;
    }
    setCreateLable(true);

    try {
      // Create the label with the selected rateId
      const labelRes = await fetch("/api/shipengine/create-label", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ rateId: selectedRateId }),
      });

      const labelData = await labelRes.json();
      if (labelRes.ok) {
        setLabelDownload(labelData.labelDownload);
        setShipAmont(labelData.shipmentCost.amount);
        setShipment(labelData);
      } else {
        console.error("Error creating label:", labelData.error);
      }
    } catch (error) {
      console.error("Error creating label:", error);
    }
  };

  const handleOrder = async () => {
    alert("Details succesfully sent to the owner!");

    await client.create({
      _type: "customer",
      id: customerID,
      name: getName.current?.value || "",
      phone: getPhone.current?.value || "",
      addressLine1: getAd1.current?.value || "",
      cityLocality: getCity.current?.value || "",
    });

    await client.create({
      _type: "shipment",
      shipmentId: shipment?.shipmentId,
      shipDate: shipment?.shipDate,
      carrierId: shipment?.carrierId,
      carrierCode: shipment?.carrierCode,
      trackingNumber: shipment?.trackingNumber,
      trackingStatus: shipment?.trackingStatus,
      labelId: shipment?.labelId,
    });

    await client.create({
      _type: "orders",
      number:orderNumber,
      customerID: customerID,
      shipmentID: shipment?.shipmentId,
      customerName: getName.current?.value, 
      products: cart.map((item) => ({
        _type: "object",
        product: {
          _type: "reference",
          _ref: item._id, 
        },
        quantity: item.quantity,
      })),
    });
  };
  return (
    <>
      <section className="w-full px-0 sm:px-0">
        <div className="flex sm:flex-row flex-col items-start justify-evenly">
          <div className="w-full max-w-3xl p-8">
            <form
              className="bg-slate-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700"
              onSubmit={handleSubmit}
            >
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Shipping address
              </h1>

              <div className="mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-white mb-1 font-semibold"
                  >
                    {" "}
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full  rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    placeholder="Michael Smith"
                    ref={getName}
                    required
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="address_1"
                    className="font-semibold block text-gray-700 dark:text-white mb-1"
                  >
                    Address 1
                  </label>
                  <input
                    type="text"
                    id="address_1"
                    ref={getAd1}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    placeholder="456 Oak Avenue"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="address_2"
                    className=" font-semibold block text-gray-700 dark:text-white mb-1"
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    id="address_2"
                    ref={getAd2}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    placeholder="Suite 200"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="phone"
                    className="font-semibold  block text-gray-700 dark:text-white mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="address"
                    ref={getPhone}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    placeholder="+1 555 987 6543"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="city"
                    className="font-semibold  block text-gray-700 dark:text-white mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    ref={getCity}
                    id="city"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    placeholder="Los Angeles"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="state"
                      className="font-semibold  block text-gray-700 dark:text-white mb-1"
                    >
                      State/Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      ref={getProvince}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      placeholder="CA"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postal"
                      className="font-semibold  block text-gray-700 dark:text-white mb-1"
                    >
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="postal"
                      ref={getPostalCode}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      placeholder="90001"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="font-semibold  block text-gray-700 dark:text-white mb-1"
                    >
                      Country code
                    </label>
                    <input
                      type="text"
                      id="country"
                      ref={getCountry}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      placeholder="US"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="addressResidentialIndicator"
                    className="font-semibold  block text-gray-700 dark:text-white mb-1"
                  >
                    Address Residential Indicator
                  </label>
                  <select
                    ref={getAddressResidentialIndicator}
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
                Submit details
              </button>
            </form>
          </div>

          <div className="w-full flex flex-col items-center justify-between space-y-8 md:space-y-10">
            <CheckoutOrder shipping={shipamount || 0} />
            {selectedRateId && (
              <div className="w-[90%] bg-slate-100 p-2">
                <div className="flex flex-col justify-center items-center py-4">
                  <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
                    Create your shipping label
                  </h2>
                  <button
                    onClick={handleCreateLabel}
                    type="button"
                    className="text-white bg-gray-800 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full text-sm px-20 md:px-32 py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2  mt-2"
                  >
                    Creating label
                  </button>
                </div>
                {iscreateLabel && !shipment ? (
                   <div className="w-full py-4 px-10 flex items-center justify-center">
                      <div className="flex gap-4 p-4 flex-wrap justify-center">
                      <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/448500/loading.svg" alt="Loading icon"></img>
                      </div>
                   </div>
                  ):null} 
                {shipment && (
                  <div className="w-full py-4 px-10">
                    <h3 className="scroll-m-20 text-2xl mb-3 font-semibold tracking-tight">
                      Shipping details
                    </h3>
                    <div className="space-y-2 text-color1">
                      <p>
                        <strong>Shipment ID:</strong> {shipment?.shipmentId}
                      </p>
                      <p>
                        <strong>Ship Date:</strong>{" "}
                        {new Date(shipment?.shipDate).toLocaleString()}
                      </p>
                      <p>
                        <strong>Carrier ID:</strong> {shipment?.carrierId}
                      </p>
                      <p>
                        <strong>Carrier Code:</strong> {shipment?.carrierCode}
                      </p>
                      <p>
                        <strong>Tracking Number:</strong>{" "}
                        {shipment?.trackingNumber}
                      </p>
                      <p>
                        <strong>Tracking Status:</strong>{" "}
                        {shipment?.trackingStatus}
                      </p>
                      <p>
                        <strong>Label ID:</strong> {shipment?.labelId}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 py-6">
                      <a href={label?.pdf} download>
                        <button
                          type="button"
                          className="text-white  bg-gray-800 hover:bg-[#050708]/90  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xl text-sm   px-10 py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2  mt-2"
                        >
                          Download Label
                        </button>
                      </a>
                      <Link href={`/orders/${orderNumber}`}>
                        <button
                          onClick={handleOrder}
                          type="button"
                          className="text-white  bg-gray-800 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xl text-sm px-12 py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2  mt-2"
                        >
                          Place order
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
            {isSubmit && !selectedRateId ?(
                <>
                 <div className="w-full py-4 px-10 flex items-center justify-center">
                      <div className="flex gap-4 p-4 flex-wrap justify-center">
                      <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/448500/loading.svg" alt="Loading icon"></img>
                      </div>
                   </div>
                </>
            ):null}
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
