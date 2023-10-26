import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "~/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "melman",
  description: "Your appointment manager",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`font-sans ${inter.variable}`}>
          <div className="py-16 text-black">
            <TRPCReactProvider headers={headers()}>
              <Navbar />
              {children}
            </TRPCReactProvider>
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
