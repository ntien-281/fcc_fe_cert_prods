import { useContext } from "react";
import { Context } from "./App";

export default function SoundPad({ pad, sound, link }) {
  const { power, setSoundName } = useContext(Context);

  const handleClick = () => {
    if (power) {
      const audioElement = document.getElementById(pad);
      audioElement.play();
      setSoundName(sound);
    }
  };

  return (
    <div className="drum-pad" id={sound} onClick={handleClick}>
      {pad}
      <audio className="clip" id={pad} src={link}></audio>
    </div>
  );
}
