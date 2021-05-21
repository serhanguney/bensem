import React from "react";

function MenuSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      fill="none"
      viewBox="0 0 72 72"
    >
      <circle
        r="36"
        fill="#E5E5E5"
        fillOpacity="0.6"
        transform="matrix(-1 0 0 1 36 36)"
      ></circle>
      <circle r="30" fill="#fff" transform="matrix(-1 0 0 1 36 36)"></circle>
      <rect width="10" height="2" x="40" y="43" fill="#7B430E" rx="1"></rect>
      <rect width="25" height="2" x="22" y="35" fill="#7B430E" rx="1"></rect>
      <rect width="15" height="2" x="22" y="27" fill="#7B430E" rx="1"></rect>
    </svg>
  );
}

export default MenuSVG;
