// import React, { useEffect } from "react";

const VolumeSlider = (props) => {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.05}
      value={props.volume}
      onChange={props.volumeHandler}
      className="w-11/12 accent-[#50644d] my-2"
    />
  );
};

export default VolumeSlider;
