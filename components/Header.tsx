import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Image
          src={"/extras/logo.png"}
          width={150}
          height={20}
          alt="Logo"
          className=" object-contain"
        />
      </div>

      <Button>Sign In</Button>
    </header>
  );
};

export default Header;
