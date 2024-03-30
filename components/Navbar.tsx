import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-row fixed justify-between z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link className="flex items-center gap-1" href="/">
        <Image src="/icons/logo.svg" alt="Logo" width={32} height={32} />
        <p className="text-[26px] text-white font-extrabold max-sm:hidden">
          OnlinZ
        </p>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <div>
        <UserButton />
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
