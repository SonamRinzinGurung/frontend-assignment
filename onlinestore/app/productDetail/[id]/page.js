"use client";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";

export default function ProductDetail({ params }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["productDetail", params?.id],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${params?.id}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return (
      <div className="flex">
        <div className="mx-auto mt-8">
          <Loading />
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-red-600">An error has occurred:</h1>
        <p className="text-lg text-red-600">{error.message}</p>
      </div>
    );

  return (
    <div className="flex flex-col md:px-4 mt-6 mx-6 md:mx-10">
      <div className="flex items-center flex-col md:flex-row md:justify-evenly bg-white rounded-lg shadow-md md:p-4">
        <div>
          <img
            src={data?.image}
            alt={data?.title}
            className="h-80 w-72 md:h-96 md:w-80"
          />
        </div>
        <div className="w-1/2 text-center md:text-left">
          <h1 className="font-display">{data?.title}</h1>
          <p className="font-roboto font-medium text-2xl md:text-4xl mt-1 text-gray-800">
            ${data?.price}
          </p>
        </div>
      </div>

      <div className="mt-6 mb-8">
        <h2 className="font-heading font-semibold">Description</h2>
        <hr className="my-2 bg-black shadow-lg" />
        <p className="text-lg md:text-2xl mt-2">{data?.description}</p>
      </div>
    </div>
  );
}
