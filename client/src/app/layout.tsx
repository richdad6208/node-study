import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import QueryProvider from "../contexts/QueryProvider";

const noto = Noto_Sans_KR({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <QueryProvider>
          <Header />
          {auth}
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
