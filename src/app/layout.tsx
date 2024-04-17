import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import classNames from "classnames";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Calculator Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames("bg-off-black", "text-white")}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
