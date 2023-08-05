import React, { useState, useEffect } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import Pad from "./Pad";
import Control from "./Control";
import VolumeSlider from "./VolumeSlider";
import arrPads from "../data/arrPads";

const Container = () => {
  const [valume, setValume] = useState(0.5); //hardcoding
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, true);
  }, []);

  const handleKeyPress = (event) => {
    const val = arrPads.find(
      (valueOfArr) => valueOfArr.keyName === event.code.replace("Key", "")
    );
    val && playAudio(val.src);
  };

  const volumeHandler = () => {
    setValume(0.7); //hardcoding
  };

  const displayHandler = () => {
    setDisplay("sound effect"); //hardcoding
  };

  const playAudio = (audio) => {
    const audioToPlay = new Audio(audio);
    audioToPlay.play();
    const dis = arrPads.find((valueOfArr) => valueOfArr.src === audio);
    dis && setDisplay(dis.sound);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        id="drum-machine"
        className="flex border-[5px] border-[rgb(165,160,160)] w-[700px] h-[300px] bg-gray-500 shadow-[black_3px_3px_5px] rounded-[5px]"
      >
        <div
          id="pad-container"
          className="w-6/12 flex flex-wrap justify-between p-3 items-center"
        >
          {arrPads.map((pad) => {
            return (
              <Pad
                onClick={playAudio}
                pad={pad.keyName}
                id={pad.sound}
                src={pad.src}
                key={pad.id}
              />
            );
          })}
        </div>
        <div
          id="control-container"
          className="flex flex-col relative w-6/12 p-3 justify-between items-center"
        >
          <FaFreeCodeCamp className="absolute right-2.5 top-[5px]" />
          <Control label="Power" />
          <div
            id="display"
            className="border-[rgb(165,160,160)] border-[2px] p-[5px] w-9/12 font-bold text-2xl rounded-[5px]"
          >
            <p className="h-10">{display}</p>
          </div>
          <VolumeSlider onChange={volumeHandler} />
          <Control label="Bank" />
        </div>
      </div>
    </div>
  );
};

export default Container;
