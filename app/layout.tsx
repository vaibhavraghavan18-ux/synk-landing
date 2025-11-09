import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Synk — Your travel, perfectly synchronised",
  description: "AI that plans, books, and adjusts every ride, stay, and trip — one continuous flow.",
  icons: [{ rel: "icon", url: "/logo.svg" }]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
