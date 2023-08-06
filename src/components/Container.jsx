import React, { useState, useEffect, useRef } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import Pad from "./Pad";
import Control from "./Control";
import VolumeSlider from "./VolumeSlider";
import arrPads from "../data/arrPads";
import Display from "./Display";

const Container = () => {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState("");
  const [bank, setBank] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, true);
  }, []);
  const audioRef = useRef();

  const handleKeyPress = (event) => {
    const val = arrPads.find(
      (valueOfArr) => valueOfArr.keyName === event.code.replace("Key", "")
    );
    val && playAudio(val.src);
  };

  const playAudio = (audio) => {
    const audioToPlay = new Audio(audio);
    audioToPlay.play();
    const dis = arrPads.find((valueOfArr) => valueOfArr.src === audio);
    dis && setDisplay(dis.sound);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        id="drum-machine"
        className="flex flex-col-reverse md:flex md:flex-row border-[5px] border-[rgb(165,160,160)] w-[350px] h-[600px] md:w-[700px] md:h-[300px] bg-gray-500 shadow-[black_3px_3px_5px] rounded-[5px]"
      >
        <div
          id="pad-container"
          className="md:w-6/12 flex flex-wrap justify-around p-3 items-center"
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
          className="flex flex-col relative md:w-6/12 p-3 justify-between items-center"
        >
          <FaFreeCodeCamp className="absolute right-2.5 top-[5px]" />
          <Control label="Power" />
          <Display display={display} />
          <VolumeSlider />
          <Control label="Bank" />
        </div>
      </div>
    </div>
  );
};

export default Container;
