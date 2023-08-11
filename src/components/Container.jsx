import React, { useState, useEffect } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import Pad from "./Pad";
import Control from "./Control";
import Switcher from "./Switcher";
// import VolumeSlider from "./VolumeSlider";
import arrPads from "../data/arrPads";
import Display from "./Display";
import AudioContext from "../context/AudioContext";

const Container = () => {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState("");
  // const [volume, setVolume] = useState(20);
  const [bank, setBank] = useState(false);

  //this helps switch addEventListener then power is off:
  useEffect(() => {
    setPower(true);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const val = arrPads.find(
        (valueOfArr) => valueOfArr.keyName === event.code.replace("Key", "")
      );
      power && val && !bank
        ? playAudio(val.src)
        : power && val && bank
        ? playAudio(val.srcAlt)
        : console.log("wrong key"); //pass this log to the display
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  const playAudio = (audio) => {
    const audioToPlay = new Audio(audio);
    power && audioToPlay.play();

    const dis = arrPads.find((valueOfArr) => valueOfArr.src === audio);
    power && dis ? setDisplay(dis.sound) : setDisplay("");
    // power && dis && !bank ? setDisplay(dis.sound) : setDisplay(dis.soundAlt);
  };

  // const handleDisplay = () => {
  //   setDisplay("");
  // };

  return (
    <AudioContext.Provider value={(display, setDisplay)}>
      <div className="flex justify-center items-center h-screen ">
        <div
          id="drum-machine"
          className="flex flex-col-reverse md:flex md:flex-row border-[5px] border-[rgb(165,160,160)] w-[350px] md:w-[700px] md:h-[300px] bg-gray-500 shadow-[black_3px_3px_5px] rounded-[5px]"
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
                  srcAlt={pad.srcAlt}
                  bank={bank}
                  key={pad.id}
                  // volume={volume}
                  // setVolume={setVolume}
                />
              );
            })}
          </div>
          <div
            id="control-container"
            className="flex flex-col relative md:w-6/12 p-3 justify-between items-center"
          >
            <FaFreeCodeCamp className="absolute right-2.5 top-[5px]" />
            <Control label="Power" power={power} setPower={setPower} />
            <Display display={display} power={power} />
            {/* <VolumeSlider
              audioRef={audioRef}
              power={power}
              volume={volume}
              setVolume={setVolume}
            /> */}
            <Switcher
              label="Bank"
              bank={bank}
              setBank={setBank}
              power={power}
            />
          </div>
        </div>
      </div>
    </AudioContext.Provider>
  );
};

export default Container;
