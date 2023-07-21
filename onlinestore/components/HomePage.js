"use client";
import Search from "./Search";
import Card from "./Card";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function HomePage() {
  const [result, setResult] = useState(null);

  let { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  const filterSearch = (e, search) => {
    e.preventDefault();
    const filteredResults = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredResults);
    setResult(filteredResults);
  };

  if (error)
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-red-600">An error has occurred:</h1>
        <p className="text-lg text-red-600">{error.message}</p>
      </div>
    );

  return (
    <main className="flex flex-col items-center justify-between">
      <Search filterSearch={filterSearch} />
      {isLoading && <Loading />}

      {result?.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-4">
          <h1 className="text-2xl text-red-600">No results found</h1>
        </div>
      ) : (
        <div
          className="flex flex-row flex-wrap gap-6 
        justify-center items-center w-full p-4 md:p-8
      "
        >
          {result?.length > 0
            ? result.map((product) => {
                return <Card {...product} key={product.id} />;
              })
            : data?.map((product) => {
                return <Card {...product} key={product.id} />;
              })}
        </div>
      )}
    </main>
  );
}
