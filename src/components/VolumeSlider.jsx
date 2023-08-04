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
      className="w-11/12"
    />
  );
};

export default VolumeSlider;
