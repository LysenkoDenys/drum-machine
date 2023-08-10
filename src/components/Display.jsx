import React from "react";

const Display = (props) => {
  return (
    <div
      id="display"
      className="border-[rgb(165,160,160)] border-[2px] p-[5px] w-9/12 font-bold text-2xl rounded-[5px] whitespace-nowrap overflow-hidden text-ellipsis my-2"
    >
      {props.power && props.display ? (
        <p>{props.display}</p>
      ) : props.power && props.volume ? (
        <p id="volume-par">{"Volume: " + props.volume}</p>
      ) : (
        <p className="text-[rgb(138,138,138)] text-[large]">press any key</p>
      )}
    </div>
  );
};

export default Display;

// Heater Kit
// Smooth Piano Kit

// Volume: 20
