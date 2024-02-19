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
          href={
            "https://drive.google.com/file/d/1-sBOCtBEh8SpNqInDQ6zQXYLNh4OWrxB/view?usp=drive_link"
          }
        >
          <ArrowDownToLine className="w-11 h-11 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
