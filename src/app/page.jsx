import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full gap-10">
      <div className="">
        <h1 className="text-5xl font-light">Hmyzopedia</h1>
      </div>
      <div>
        <Link href={""}>
          <ArrowDownToLine className="w-11 h-11 animate-bounce" />
        </Link>
      </div>
    </main>
  );
}
