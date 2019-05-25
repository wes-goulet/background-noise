/**
 * @type HTMLAudioElement
 */
const audio = document.getElementById("white-audio");

/**
 * @type HTMLButtonElement
 */
const playButton = document.getElementById("play-button");

/**
 * @type Element
 */
const mainElement = document.getElementById("main");

audio.addEventListener("timeupdate", () => {
  // if 1 second left in audio track reset track to 0
  // so it's continuous
  if (audio.currentTime > audio.duration - 1) {
    audio.currentTime = 1;
    audio.play();
  }
});

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", () => {
  playButton.classList.add("pause");
  mainElement.classList.add("playing");
});

audio.addEventListener("pause", () => {
  playButton.classList.remove("pause");
  mainElement.classList.remove("playing");
});
