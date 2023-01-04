import { useContext } from "react";
import { Context } from "./App";

export default function Controller({ soundName }) {
  const { power, setPower } = useContext(Context);

  const handlePower = () => {
    setPower(!power);
    const powerSwitch = document.querySelector(".power");
    powerSwitch.classList.toggle("active");
  };

  return (
    <div className="control-container">
      <div className="controller">
        <div className="power active" onClick={handlePower}>
          <div className="switch"></div>
        </div>
        <div className="volumn"></div>
      </div>
      <p id="display">{soundName}</p>
    </div>
  );
}
