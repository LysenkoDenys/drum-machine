import React from "react";
import Pad from "./Pad";

const Container = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        id="drum-machine"
        className="flex border-[10px] border-purple-600 w-[660px] h-[400px] bg-gray-500"
      >
        <div
          id="pad-container"
          className="w-[332px] h-[272px] inline-block m-5"
        >
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
        </div>
        <div id="control-container">
          <div id="display" className="border border-gray-200">
            display
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
