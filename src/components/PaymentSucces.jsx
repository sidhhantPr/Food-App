import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500 mx-auto mb-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.157 2.16c.298-.297.77-.297 1.068 0 .297.298.297.77 0 1.067L7.227 13.684 2.86 9.317c-.296-.297-.296-.77 0-1.067.298-.298.77-.298 1.067 0l3.713 3.712 7.02-7.018c.298-.298.77-.298 1.068 0z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-4">Thank you for your payment.</p>
        <Link to="/">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Continue Ordering
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
