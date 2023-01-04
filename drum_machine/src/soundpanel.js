import SoundPad from "./soundpad";

export default function SoundPanel() {
  const pads = [
    {
      pad: "Q",
      sound: "Heater-1",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      pad: "W",
      sound: "Heater-2",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      pad: "E",
      sound: "Heater-3",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      pad: "A",
      sound: "Heater-4",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      pad: "S",
      sound: "Clap",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      pad: "D",
      sound: "Open-HH",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      pad: "Z",
      sound: "Kick-n'- Hat",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      pad: "X",
      sound: "Kick",
      link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      pad: "C",
      sound: "Close-HH",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div className="sound-pad">
      <ul className="sound-pad-list">
        {pads.map((pad, index) => (
          <SoundPad key={index} {...pad} />
        ))}
      </ul>
    </div>
  );
}
