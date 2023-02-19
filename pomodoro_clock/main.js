let currentBreakLength = 5 * 60;
let currentSessionLength = 25 * 60;
const label = ["Session", "Break"];
let isCounting = false;
let currentTime = currentSessionLength;
let currentLabel = label[0];
let timer;

// Clickable elements:
const breakIncreaseButton = document.querySelector("#break-increment");
const breakDecreaseButton = document.querySelector("#break-decrement");
const sessionIncreaseButton = document.querySelector("#session-increment");
const sessionDecreaseButton = document.querySelector("#session-decrement");

// Media control buttons:
const startPauseButton = document.querySelector("#start_stop");
const startIcon = document.querySelector(".fa-play");
const pauseIcon = document.querySelector(".fa-pause");
const resetButton = document.querySelector("#reset");
const beepSound = document.querySelector("#beep");

// Display elements:
const breakLength = document.querySelector("#break-length");
const sessionLength = document.querySelector("#session-length");
const timerLabel = document.querySelector("#timer-label");
const timeLeftLabel = document.querySelector("#time-left");

// set intial state
breakLength.innerHTML = currentBreakLength / 60;
sessionLength.innerHTML = currentSessionLength / 60;
timerLabel.innerHTML = currentLabel;
timeLeftLabel.innerHTML = formatTime(currentSessionLength);

// Utilities
function formatTime(time) {
  const second = time % 60 ? time % 60 : "00";
  const minute = (time - second) / 60 ? (time - second) / 60 : "00";
  return `
      ${minute < 10 && minute > 0 ? `0${minute}` : minute}:${
    second < 10 && second > 0 ? `0${second}` : second
  }
    `;
}

const updateBreakTime = () => {
  if (!isCounting) {
    breakLength.innerHTML = currentBreakLength / 60;
    if (currentLabel === "Break") {
      setTimer(currentBreakLength);
    }
  }
};
const updateSessionTime = () => {
  if (!isCounting) {
    sessionLength.innerHTML = currentSessionLength / 60;
    if (currentLabel === "Session") {
      setTimer(currentSessionLength);
    }
  }
};

const swapLabel = () => {
  if (currentLabel === "Session") {
    currentLabel = "Break";
    setTimer(currentBreakLength);
    timerLabel.innerHTML = currentLabel;
  } else if (currentLabel === "Break") {
    currentLabel = "Session";
    setTimer(currentSessionLength);
    timerLabel.innerHTML = currentLabel;
  }
};

const setTimer = (time) => {
  currentTime = time;
  timeLeftLabel.innerHTML = formatTime(time);
};

// Event listeners

breakIncreaseButton.addEventListener("click", () => {
  if (currentBreakLength <= 59 * 60) {
    currentBreakLength += 60;
    updateBreakTime();
  }
});
breakDecreaseButton.addEventListener("click", () => {
  if (currentBreakLength >= 2 * 60) {
    currentBreakLength -= 60;
    updateBreakTime();
  }
});
sessionIncreaseButton.addEventListener("click", () => {
  if (currentSessionLength <= 59 * 60) {
    currentSessionLength += 60;
    updateSessionTime();
  }
});
sessionDecreaseButton.addEventListener("click", () => {
  if (currentSessionLength >= 2 * 60) {
    currentSessionLength -= 60;
    updateSessionTime();
  }
});

startPauseButton.addEventListener("click", () => {
  startIcon.classList.toggle("active");
  pauseIcon.classList.toggle("active");
  if (!isCounting) {
    timer = setInterval(() => {
      currentTime -= 1;
      if (currentTime < 0) {
        setTimeout(() => {
          console.log('Delay for tests to see "00:00" moment');
        }, 1000);
        setTimer(currentTime);
        timeLeftLabel.innerHTML = formatTime(currentTime);
        beepSound.play();
        swapLabel();
      } else {
        setTimer(currentTime);
        timeLeftLabel.innerHTML = formatTime(currentTime);
      }
    }, 1000);
  } else {
    clearInterval(timer);
    timer = 0;
  }
  isCounting = !isCounting;
});

resetButton.addEventListener("click", () => {
  currentBreakLength = 5 * 60;
  currentSessionLength = 25 * 60;
  isCounting = false;
  currentTime = currentSessionLength;
  currentLabel = label[0];
  updateBreakTime();
  updateSessionTime();
  timerLabel.innerHTML = currentLabel;
  if (timer) {
    clearInterval(timer);
  }
  beepSound.pause();
  beepSound.currentTime = 0;
});
