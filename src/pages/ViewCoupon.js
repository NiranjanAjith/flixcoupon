import React, { useEffect, useState } from "react";
import { verifyCouponCode } from "../utils/verifyCoupon";

const ViewCoupon = () => {
  const [documentData, setDocumentData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await verifyCouponCode();
        !!data ? setDocumentData(data) : setIsError(true);
      } catch (error) {
        console.error("Error verifying coupon code:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-xl font-bold">
        404 Error: Document not found or invalid coupon code.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-50">
      {documentData && (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border-4 border-white">
          <h1 className="text-3xl font-bold mb-4 text-center text-yellow-600">
            Coupon Details
          </h1>
          <div className="space-y-4">
            <div>
              <p className="text-yellow-700 font-semibold">Coupon Code:</p>
              <p className="text-xl font-bold text-yellow-900">
                {documentData.coupon_code}
              </p>
            </div>
            <div>
              <p className="text-yellow-700 font-semibold">Amount Paid:</p>
              <p className="text-xl font-bold text-yellow-900">
                ₹{documentData["amount-paid"]}
              </p>
            </div>
            <div>
              <p className="text-yellow-700 font-semibold">Class:</p>
              <p className="text-xl font-bold text-yellow-900">
                {documentData.class}
              </p>
            </div>
            <div>
              <p className="text-yellow-700 font-semibold">Executive Code:</p>
              <p className="text-xl font-bold text-yellow-900">
                {documentData.executiveCode}
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <img
                src={documentData.qrCodeUrl}
                alt="QR Code"
                className="w-48 h-48"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCoupon;
