import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hmyzopedia",
  description: "Hmyzopedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={cn(inter.className, "h-screen bg-[#99FF99]")}>
        {children}
      </body>
    </html>
  );
}
