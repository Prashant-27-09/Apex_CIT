import React, { useEffect } from "react";
import example from "./assets/welcome to c i t Chartere 2.wav";

const AudioOnLoad = () => {
  useEffect(() => {
    const audio = new Audio(example);
    audio.play().catch((error) => {
      console.log("Audio playback failed:", error);
    });
  }, []);

  return null; // No need to render anything
};

export default AudioOnLoad;
