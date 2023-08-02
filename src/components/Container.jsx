import React, { useState } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import Pad from "./Pad";
import Control from "./Control";
import VolumeSlider from "./VolumeSlider";

const Container = () => {
  const [value, setValue] = useState(0.5); //hardcoding
  const volumeHandler = () => {
    setValue(0.7); //hardcoding
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        id="drum-machine"
        className="flex border-[5px] border-[rgb(165,160,160)] w-[700px] h-[300px] bg-gray-500 shadow-[black_3px_3px_5px]"
      >
        <div
          id="pad-container"
          className="w-6/12 flex flex-wrap justify-between p-3 items-center"
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
        <div id="control-container" className="relative w-6/12 p-3">
          <FaFreeCodeCamp className="absolute right-2.5 top-[5px]" />
          <Control label="power" />
          <div id="display" className="border border-gray-200">
            display
          </div>
          <VolumeSlider onChange={volumeHandler} />
          <Control label="bank" />
        </div>
      </div>
    </div>
  );
};

export default Container;
