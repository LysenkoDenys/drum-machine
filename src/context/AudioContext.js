import { createContext } from "react";
const AudioContext = createContext({
  display: "",
  setDisplay: () => {}, //when function if not found - there is no errors in console
});

export default AudioContext;
