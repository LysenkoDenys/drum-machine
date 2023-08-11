import React, { useState, useRef } from "react";

const Pad = (props) => {
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const volumeHandler = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;

    // props.power && setVolume(parseFloat(event.target.value));
    // audioRef.current.volume = parseFloat(event.target.value);

    // setTimeout(() => {
    //   const box = document.getElementById("volume-par");
    //   box.style.visibility = "hidden";
    // }, 1000);
  };

  let audio = document.getElementById("audio"); // Take the audio element

  return (
    <div
      className="bg-[grey] shadow-[black_3px_3px_5px] w-[90px] md:w-[100px]  my-1 md:my-0 h-20 box-border cursor-pointer  rounded-[5px] font-bold text-[48px] active:bg-[#50644d] active:text-[grey] active:shadow-[1px_0.5px_1px_0.5px_#000] active:transition-all active:duration-[0.2s] active:ease-[ease] active:delay-[0s]"
      id={props.id}
      // src={props.src}
      onClick={() =>
        props.bank ? props.onClick(props.srcAlt) : props.onClick(props.src)
      }
    >
      <audio ref={audioRef} id="audio">
        <source src={props.src} type="audio/mpeg"></source>
        Your browser does not support the audio element.
      </audio>

      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={volumeHandler}
        hidden
      />
      {props.pad}
    </div>
  );
};

export default Pad;
