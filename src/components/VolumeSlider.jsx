import React, { useState, useEffect } from "react";

const VolumeSlider = (props) => {
  const [volume, setVolume] = useState(20);

  // useEffect(() => {
  //   if (audioRef) {
  //     audioRef.current.volume = volume / 100;
  //   }
  // }, [volume, audioRef]);

  const volumeHandler = (event) => {
    setVolume(event.target.value);
  };

  return (
    <input
      type="range"
      min={0}
      max={100}
      step={1}
      value={volume}
      onChange={volumeHandler}
      className="w-11/12 accent-[#50644d] my-2"
    />
  );
};

export default VolumeSlider;
