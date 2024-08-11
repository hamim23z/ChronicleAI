// app/layout.js
import { Kanit } from "next/font/google";
import "./globals.css"; // Ensure this imports your global styles correctly

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Comp Sci Chronicles",
  description: "AI Chat Bot for CS Students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={kanit.className}>
        {children}
      </body>
    </html>
  );
}