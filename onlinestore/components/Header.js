import Link from "next/link";
import { Cart } from ".";

export default function Header() {
  return (
    <header
      className="flex m-1 shadow-sm 
    justify-between items-cente
    "
    >
      <div className="ml-2">
        <h1>
          <Link href="/" className="font-heading text-2xl font-bold">
            Online
            <span
              className="
            text-blue-500 font-bold italic
            "
            >
              Store
            </span>
          </Link>
        </h1>
      </div>
      <div className="flex justify-end">
        <Cart />
      </div>
    </header>
  );
}
