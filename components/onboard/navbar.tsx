import React from "react";
import { Divider } from "@nextui-org/divider";
import { navbarPadding, title } from "../primitives";
import { IoCloseSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

function Navbar() {
  return (
    <div className=" sticky top-0 bg-white z-10">
      <nav
        className={`${navbarPadding()} h-24 justify-between flex items-center`}
      >
        <div>
          <h1 className={`text-[28px] text-black font-bold`}>Radius</h1>
        </div>
        <div>
          <MdClose color="black" size={24} />
        </div>
      </nav>
      <Divider className="text-black bg-[#E2E2E1]" />
    </div>
  );
}

export default Navbar;
