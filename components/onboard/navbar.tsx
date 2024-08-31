import React from "react";
import { Divider } from "@nextui-org/divider";
import { navbarPadding, title } from "../primitives";
import { IoCloseSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SiConfluence } from "react-icons/si";

function Navbar() {
  return (
    <nav
      className={`${navbarPadding()} w-[100%] lg:w-[1300px] h-24 bg-white justify-between flex items-center`}
    >
      <Link
        href={`${siteConfig.pathLinks.landingPage}`}
        className="flex items-center gap-0"
      >
        <SiConfluence size={26} className="text-primary rotate-[100deg]" />
        <h1
          className={`text-[32px] hidden sm:flex text-primary font-black italic`}
        >
          {siteConfig.name.toUpperCase()}
        </h1>
      </Link>
      <Link href={`${siteConfig.pathLinks.landingPage}`}>
        <MdClose color="black" size={28} />
      </Link>
    </nav>
  );
}

export default Navbar;
