import type { Metadata } from "next";

import "./globals.css";
import { latoFont, poppinsFont, geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Jaipur Aashray",
  description: "Jaipur Aashray e-commerce webstie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto ${latoFont.variable} ${poppinsFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
