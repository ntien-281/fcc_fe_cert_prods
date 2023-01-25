import keyboard from './keyboard.module.css';

export default function Keyboard() {

  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(keyboard);

  return (
    <div className={keyboard.keyboard}>
      {
        number.map((key, index) => {
          return (
            <div key={index} className={keyboard["number-key"]}>
              {key}
            </div>
          );
        })
      }
    </div>
  );
}
