import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import classNames from "classnames";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

export const metadata: Metadata = {
  title: "Calculator Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // provider causing client error
    <Provider store={store}>
      <html lang="en">
        <body className={classNames("bg-off-black", "text-white")}>
          {children}
        </body>
      </html>
    </Provider>
  );
}
