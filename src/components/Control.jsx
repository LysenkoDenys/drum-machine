import React from "react";

const Control = (props) => {
  return (
    <div className="m-5 font-bold">
      <label for="control">{props.label}</label>
    </div>
  );
};

export default Control;
