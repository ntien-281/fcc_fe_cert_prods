import Keyboard from "../keyboard/keyboard"
import Screen from "../screen/screen";

export default function Calculator() {


  return (
    <div className="container">
      <Screen />
      <Keyboard />
    </div>
  );
}