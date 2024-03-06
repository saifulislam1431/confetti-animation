import { Inter } from "next/font/google";
import "./globals.css";
import { poppins } from "./fonts";



export const metadata = {
  title: "Fireworks",
  description: "Creating Fireworks animation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
