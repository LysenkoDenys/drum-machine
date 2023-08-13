import React, { useState, useEffect, useRef } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import Pad from "./Pad";
import Control from "./Control";
import Switcher from "./Switcher";
import VolumeSlider from "./VolumeSlider";
import arrPads from "../data/arrPads";
import Display from "./Display";
import AudioContext from "../context/AudioContext";

const Container = () => {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.1);
  const [bank, setBank] = useState(false);
  const audioRef = useRef(null);

  const bankHandler = () => {
    setBank(true);
  };

  const volumeHandler = (event) => {
    const newVolume = parseFloat(event.target.value);
    power && setVolume(newVolume);
    audioRef.current.volume = newVolume;

    // props.power && setVolume(parseFloat(event.target.value));
    // audioRef.current.volume = parseFloat(event.target.value);

    // setTimeout(() => {
    //   const box = document.getElementById("volume-par");
    //   box.style.visibility = "hidden";
    // }, 1000);
  };

  //this helps switch addEventListener then power is off:
  useEffect(() => {
    setPower(true);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const val = arrPads.find(
        (valueOfArr) => valueOfArr.keyName === event.code.replace("Key", "")
      );
      val && !bank
        ? playAudio(val.src)
        : power && val && bank
        ? playAudio(val.srcAlt)
        : console.log("wrong key"); //pass this log to the display

      // push pad effect---------------------
      if (val) {
        const pusher = document.getElementById(val.sound);
        // pusher.style.color = "grey";
        // pusher.style.backgroundColor = "#50644d";
        // pusher.style.boxShadow = "1px 0.5px 1px 0.5px #000";
        const stylesIn = {
          color: "grey",
          backgroundColor: "#50644d",
          boxShadow: "1px 0.5px 1px 0.5px #000",
        };
        const stylesOut = {
          color: "white",
          backgroundColor: "#808080",
          boxShadow: "black 3px 3px 5px",
        };
        Object.assign(pusher.style, stylesIn);
        setTimeout(() => {
          Object.assign(pusher.style, stylesOut);
        }, 50);
      }
      // push pad effect---------------------
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  });

  const playAudio = (audio) => {
    const audioToPlay = new Audio(audio);
    power && audioToPlay.play();
    audioToPlay.volume = volume;

    const dis = arrPads.find((valueOfArr) => valueOfArr.src === audio);
    const disAlt = arrPads.find((valueOfArr) => valueOfArr.srcAlt === audio);
    dis && !bank
      ? setDisplay(dis.sound)
      : disAlt && bank
      ? setDisplay(disAlt.soundAlt)
      : setDisplay("");
  };

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
                  audioRef={audioRef}
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
            <Display display={display} power={power} volume={volume} />
            <VolumeSlider volumeHandler={volumeHandler} volume={volume} />
            <Switcher
              label="Bank"
              bank={bank}
              power={power}
              setBank={setBank}
            />
          </div>
        </div>
      </div>
    </AudioContext.Provider>
  );
};

export default Container;
