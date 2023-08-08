// import React, { useEffect } from "react";

const VolumeSlider = (props) => {
  // useEffect(() => {
  //   if (props.audioRef) {
  //     props.audioRef.current.volume = volume / 100;
  //   }
  // }, [volume, props.audioRef]);

  const volumeHandler = (event) => {
    props.power && props.setVolume(event.target.value);
  };

  return (
    <input
      type="range"
      min={0}
      max={100}
      step={10}
      value={props.volume}
      onChange={volumeHandler}
      className="w-11/12 accent-[#50644d] my-2"
    />
  );
};

export default VolumeSlider;
