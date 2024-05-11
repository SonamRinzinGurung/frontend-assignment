"use client";
import Search from "./Search";
import Card from "./Card";
import { Loading, Error } from "../components";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function HomePage() {
  // state to store the search results
  const [result, setResult] = useState(null);

  // Fetch the product details from the API using the `useQuery` hook from react-query
  // The `useQuery` hook returns an object with three properties: `isLoading`, `error`, and `data`.
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  // filter the data based on the search query
  const filterSearch = (e, search) => {
    e.preventDefault();
    const filteredResults = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setResult(filteredResults);
  };

  // If the data is loading, show the loading component
  if (error) return <Error error={error} />;

  return (
    <main className="flex flex-col items-center justify-between">
      <Search filterSearch={filterSearch} />
      {isLoading && <Loading />}

      {/* 
        If the search results are empty, show the no results found component
      */}
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
          {/* 
            If the search results are not empty, show the search results
          */}
          {result?.length > 0
            ? result.map((product) => {
                return <Card {...product} key={product.id} />;
              })
            : // If the search results are empty, show the products from the API call
              data?.map((product) => {
                return <Card {...product} key={product.id} />;
              })}
        </div>
      )}
    </main>
  );
}
