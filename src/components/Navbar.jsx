import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 sm:p-2">
      <div className="flex items-center gap-3">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h1 className="font-bold">Hmyzopedia</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
