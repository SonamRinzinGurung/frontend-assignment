import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "OnlineStore",
  description: "React Intern Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="m-1 shadow-sm ">
            <div className="ml-2">
              <h1>
                <Link href="/" className="font-heading text-2xl font-bold">
                  {metadata.title}
                </Link>
              </h1>
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
