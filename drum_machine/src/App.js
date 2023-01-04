import "./App.css";
import { useState, createContext, useEffect } from "react";
import Controller from "./controls";
import SoundPanel from "./soundpanel";

export const Context = createContext();

function App() {
  const [soundName, setSoundName] = useState("");
  const [power, setPower] = useState(true);

  const handleKey = (key) => {
    const keyAudio = document.getElementById(key.toUpperCase());
    if (keyAudio) {
      keyAudio.parentElement.click();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", (event) => {
      handleKey(event.key);
    });

    return () => {
      console.log("clean up ran");
      window.removeEventListener("keyup", (event) => {
        handleKey(event.key);
      });
    };
  }, []);

  return (
    <Context.Provider value={{ power, setPower, setSoundName }}>
      <div id="drum-machine">
        <Controller soundName={soundName} />
        <SoundPanel />
      </div>
    </Context.Provider>
  );
}

export default App;
