import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  h-full flex-1 gap-10 ">
      <div className="">
        <h1 className="text-5xl font-light">Hmyzopedia</h1>
      </div>
      <div>
        <Link
          href={"https://www.idrive.com/idrive/sh/sh?k=b4v0k7u8o8"}
          target="_blank"
        >
          <ArrowDownToLine className="w-11 h-11 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
