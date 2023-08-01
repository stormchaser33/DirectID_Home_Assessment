import React from "react";
import { Logo } from "../Logo";
import { AccountInfo } from "../AccountInfo";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex justify-between flex flex-col items-start w-1/2 py-6">
        <Logo />
      </div>
      <div className="flex justify-between w-1/2">
        <AccountInfo />
      </div>
    </div>
  );
};

export default Header;
