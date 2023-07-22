"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components";

const queryClient = new QueryClient(); // Create a client to be used by the QueryProvider

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>"OnlineStore"</title>
        <meta name="description" content={"React Intern Assignment"} />
      </head>

      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
