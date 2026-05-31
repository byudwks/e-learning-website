import React from "react";

function Title({ title, text, link }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <h2>{title}</h2>
        <p className="max-w-[640px] mt-4 mb-6">{text}</p>
      </div>
      <button className="secondary-btn hover:text-orange-50 font-medium">
        {link}
      </button>
    </div>
  );
}

export default Title;
