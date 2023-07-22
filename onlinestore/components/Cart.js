import Link from "next/link";

export default function Cart() {
  return (
    <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-full transition ease-in duration-200">
      <Link href="/cart">
        <h1>🛒</h1>
      </Link>
    </div>
  );
}
