import React from "react";

const Pad = (props) => {
  console.log(props); //
  return (
    <div
      className="bg-[grey] shadow-[black_3px_3px_5px] w-[100px] h-20 box-border cursor-pointer  rounded-[5px] font-bold text-[42px] active:bg-[#50644d] active:text-[grey] active:shadow-[1px_0.5px_1px_0.5px_#000] active:transition-all active:duration-[0.2s] active:ease-[ease] active:delay-[0s]"
      id={props.id}
      href={props.href}
    >
      <audio className="clip" id={props.keyName} src={props.src}></audio>
      {props.pad}
    </div>
  );
};

export default Pad;
