const Pad = (props) => {
  return (
    <div
      className="bg-[grey] shadow-[black_3px_3px_5px] w-[90px] md:w-[100px]  my-1 md:my-0 h-20 box-border cursor-pointer  rounded-[5px] font-bold text-[48px] active:bg-[#50644d] active:text-[grey] active:shadow-[1px_0.5px_1px_0.5px_#000] active:transition-all active:duration-[0.2s] active:ease-[ease] active:delay-[0s]"
      id={props.id}
      onClick={() =>
        props.bank ? props.onClick(props.srcAlt) : props.onClick(props.src)
      }
    >
      <audio ref={props.audioRef} id="audio">
        <source src={props.src} type="audio/mpeg"></source>
        Your browser does not support the audio element.
      </audio>
      {props.pad}
    </div>
  );
};

export default Pad;
