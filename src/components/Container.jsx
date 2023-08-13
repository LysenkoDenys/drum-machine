import React, { useState, useEffect, useRef } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import Pad from "./Pad";
import Control from "./Control";
import Switcher from "./Switcher";
import VolumeSlider from "./VolumeSlider";
import Display from "./Display";
import arrPads from "../data/arrPads";

const Container = () => {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.1);
  const [bank, setBank] = useState(false);
  const audioRef = useRef(null);

  const powerHandler = () => {
    setPower(!power);
    power ? setDisplay("Turn the Power on") : setDisplay("Press the buttons");
  };

  const bankHandler = () => {
    setBank(!bank);
    bank ? setDisplay("Heater Kit") : setDisplay("Smooth Piano Kit");
  };

  const volumeHandler = (event) => {
    const newVolume = parseFloat(event.target.value);
    power && setVolume(newVolume);
    audioRef.current.volume = newVolume;

    setDisplay(`Volume: ${newVolume * 100}`);
    setTimeout(() => {
      setDisplay("");
    }, 1000);
  };

  //this helps switch addEventListener then power is off:
  useEffect(() => {
    setPower(true);
    setDisplay("");
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
        : setDisplay("Unsupported key");

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
          <Control label="Power" power={power} setPower={powerHandler} />
          <Display display={display} />
          <VolumeSlider volume={volume} volumeHandler={volumeHandler} />
          <Switcher
            label="Bank"
            bank={bank}
            power={power}
            setBank={bankHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
