import React, { useState } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { navItems } from "../constant/data";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full py-5 ">
      <div className="container flex items-center justify-between border-b border-b-white-95 pb-5">
        {/* logo  */}
        <a href="#" className="">
          <img src="/Images/logo.png  " alt="Logo" width={170} height={50} />
        </a>

        {/* Mobile Menu */}
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          {/* close menu button */}
          <button className="absolute top-8 right-8" onClick={handleMenu}>
            <RiCloseLine size={30} />
          </button>

          {/* list */}
          <ul className="space-y-5 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="text-lg font-medium hover:text-orange-50 transition-colors duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* btn login */}
          <button className="primary-btn mt-12 max-w-40 w-full">
            Get Started
          </button>
        </nav>

        {/* menu btn */}
        <button className="lg:hidden" onClick={handleMenu}>
          <RiMenuLine size={30} />
        </button>

        {/* lg menu */}
        <div className="max-lg:hidden flex items-center gap-x-10 ">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="hover:text-orange-50 transition-colors font-medium text-lg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="max-lg:hidden primary-btn hover:orange-80/90 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
