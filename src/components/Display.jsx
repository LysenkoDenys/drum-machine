import React from "react";

const Display = (props) => {
  return (
    <div
      id="display"
      className="border-[rgb(165,160,160)] border-[2px] p-[5px] w-9/12 font-bold text-2xl rounded-[5px] whitespace-nowrap overflow-hidden text-ellipsis my-2"
    >
      <p className="h-10">{props.display}</p>
    </div>
  );
};

export default Display;
