"use client";
import "./globals.css";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata = {
  title: "OnlineStore",
  description: "React Intern Assignment",
};
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div>
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
        </QueryClientProvider>
      </body>
    </html>
  );
}
