import React from "react";

const Display = (props) => {
  // function displaySow() {
  //   if (props.power) {
  //     return "";
  //   } else if (props.power && props.volume) {
  //     return `<p id="volume-par">Volume: ${props.volume * 100}</p>`;
  //   } else if (props.power && props.display) {
  //     return `<p>${props.display}</p>`;
  //   } else if (props.power && props.bank) {
  //     return `<p>${props.bank}</p>`;
  //   }
  // }
  return (
    <div
      id="display"
      className="border-[rgb(165,160,160)] border-[2px] p-[5px] w-9/12 font-bold text-2xl rounded-[5px] whitespace-nowrap overflow-hidden text-ellipsis my-2"
    >
      {props.power && props.display ? (
        <p>{props.display}</p>
      ) : props.power && props.volume ? (
        <p id="volume-par">{"Volume: " + props.volume * 100}</p>
      ) : (
        <p className="text-[rgb(138,138,138)] text-[large]">
          Turn the Power on
        </p>
      )}
    </div>
  );
};

export default Display;

// Heater Kit
// Smooth Piano Kit

// Volume: 20
