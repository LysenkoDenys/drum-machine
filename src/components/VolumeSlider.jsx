import React from "react";

const VolumeSlider = (props) => {
  return (
    <input
      max="1"
      min="0"
      step="0.01"
      type="range"
      defaultValue="0.5"
      onChange={props.volumeHandler}
      className="w-full mx-0 my-[12.5px]"
    />
  );
};

export default VolumeSlider;
