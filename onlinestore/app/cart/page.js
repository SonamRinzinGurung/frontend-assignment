"use client";
import { Card } from "@/components";

export default function CartPage() {
  //get the cart items from local storage
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  // Calculate the total price of the cart items with quantity and price
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // Iterate through each item in the cart
    cartItems.forEach((item) => {
      // Check if the item has a quantity and price
      if (item.quantity && item.price) {
        // Multiply the quantity by the price and add it to the total price
        totalPrice += item.quantity * item.price;
      }
    });

    // limit the total price to 2 decimal places
    totalPrice = totalPrice.toFixed(2);

    return totalPrice;
  };

  // Clear the cart
  const handleClear = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold my-8">Cart Items</h1>
      <div className="flex flex-col items-center">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold font-display">
              Cart is empty 😔
            </h1>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {cartItems.map((item) => (
                <Card {...item} key={item.id} count={item.quantity} />
              ))}
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold mt-2">
                Total Price: ${calculateTotalPrice()}
              </h1>
              <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4">
                  Checkout
                </button>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full my-4"
                  onClick={handleClear}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
