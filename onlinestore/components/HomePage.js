import Search from "./Search";
import Card from "./Card";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (error)
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-red-600">An error has occurred:</h1>
        <p className="text-lg text-red-600">{error.message}</p>
      </div>
    );

  return (
    <main className="flex flex-col items-center justify-between">
      <Search />
      {isLoading && <Loading />}
      <div
        className="flex flex-row flex-wrap gap-6 
      justify-center items-center w-full p-4 md:p-8
      "
      >
        {data?.map((product) => {
          return <Card {...product} key={product.id} />;
        })}
      </div>
    </main>
  );
}
