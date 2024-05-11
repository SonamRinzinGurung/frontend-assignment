"use client";
import { useQuery } from "@tanstack/react-query";
import { Loading, Error } from "../../../components";

export default function ProductDetail({ params }) {
  // Fetch the product details from the API using the `useQuery` hook from react-query
  // The `useQuery` hook returns an object with three properties: `isLoading`, `error`, and `data`.
  const { isLoading, error, data } = useQuery({
    queryKey: ["productDetail", params?.id],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${params?.id}`).then((res) =>
        res.json()
      ),
  });

  // Add the product to the cart
  const handleAddToCart = () => {
    // Get the current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Convert params?.id to string for consistent comparison
    const productId = String(params?.id);

    // Check if the current cart already contains the product
    const updatedCart = currentCart.map((product) => {
      if (String(product.id) === productId) {
        // Increment the quantity if the product already exists
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    // If the product does not exist in the cart, add it with quantity 1
    const existingProduct = currentCart.find(
      (product) => String(product.id) === productId
    );
    if (!existingProduct) {
      updatedCart.push({ ...data, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // If the data is loading, show the loading component
  if (isLoading) {
    return (
      <div className="flex">
        <div className="mx-auto mt-8">
          <Loading />
        </div>
      </div>
    );
  }

  // If there is an error, show the error component
  if (error) return <Error error={error} />;

  return (
    <main className="flex flex-col md:px-4 mt-12 mx-6 md:mx-10">
      <section className="flex items-center flex-col md:flex-row md:justify-evenly bg-white rounded-lg shadow-md md:p-4">
        <div>
          <img
            src={data?.image}
            alt={data?.title}
            className="h-80 w-72 md:h-96 md:w-80"
          />
        </div>
        <div className="w-1/2 text-center md:text-left md:ml-2">
          <h1 className="font-display">{data?.title}</h1>
          <p className="font-roboto font-medium text-2xl md:text-4xl mt-1 text-gray-800">
            ${data?.price}
          </p>
          <div className="py-4">
            <button
              className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="mt-6 mb-8">
        <h2 className="font-heading font-semibold">Description</h2>
        <hr className="my-2 bg-black shadow-lg" />
        <p className="text-lg md:text-2xl mt-2">{data?.description}</p>
      </section>
    </main>
  );
}
