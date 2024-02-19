import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hmyzopedia",
  description: "Hmyzopedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={cn(inter.className, "h-full bg-[#99FF99]")}>
        {" "}
        <main className="flex flex-col h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
