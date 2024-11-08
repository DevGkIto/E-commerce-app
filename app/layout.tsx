import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Gk app",
  description: "Football Shirts E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex-1">
          <ClerkProvider>
            <Header />
            {children}
          </ClerkProvider>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
