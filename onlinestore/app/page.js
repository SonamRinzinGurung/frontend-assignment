import Search from "../components/Search";
import Card from "../components/Card";

export default function Home() {
  const product = {
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: "123",
  };
  return (
    <main className="flex flex-col items-center justify-between">
      <Search />
      <div
        className="flex flex-row flex-wrap gap-6 
      justify-center items-center w-full p-4 md:p-8
      "
      >
        <Card {...product} />
        <Card {...product} />
        <Card {...product} />
        <Card {...product} />
        <Card {...product} />
        <Card {...product} />
      </div>
    </main>
  );
}
