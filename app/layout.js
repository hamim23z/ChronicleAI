// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css"; // This imports the global CSS file

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Website Title",
  description: "Your Website Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
