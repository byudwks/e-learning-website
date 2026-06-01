import React from "react";
import { contactInfo, footerLists, socialIcons } from "../constant/data";

const Footer = () => {
  return (
    <footer className="pt-14 pb-8 bg-white">
      <div className="container">
        {/* footer Top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* footer brand */}
          <div className="">
            {/* footer logo */}
            <div>
              <img
                src="/Images/logo.png"
                alt="logo"
                className=""
                width={150}
                height={50}
              />
            </div>
            {/* links  */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <a
                  href="#"
                  key={item.id}
                  className="flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors">
                  {<item.icon />}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          {/* footer list */}
          {footerLists.map((item) => (
            <div key={item.id} className="space-y-3">
              <p className="text-lg font-semibold">{item.title}</p>
              <ul className="space-y-2.5">
                {item.links.map((link, index) => (
                  <li className="" key={index}>
                    <a
                      href="#"
                      className="hover:text-orange-50 hover:underline transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* footer profile */}
          <div className="">
            <p className="text-lg font-semibold">Social Profiles</p>
            <div className="flex mt-5 gap-3">
              {socialIcons.map((item) => (
                <button
                  href="#"
                  key={item.id}
                  className="secondary-btn p-2.5 bg-white-95 hover:shadow-md transition-all">
                  <a href="#">{<item.icon />}</a>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <p className="mt-14 text-center lg:mt-16">
          &copy; {new Date().getFullYear()}
          <span className="text-orange-50 font-bold "> Skillpath</span> All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
