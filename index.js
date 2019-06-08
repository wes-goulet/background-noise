/**
 * @type HTMLAudioElement
 */
const audio = document.getElementById("white-audio");

/**
 * @type HTMLDivElement
 */
const playButton = document.getElementById("play-button");

/**
 * @type HTMLDivElement
 */
const playInnerButton = document.getElementById("play-inner-button");

/**
 * @type Element
 */
const mainElement = document.getElementById("main");

/**
 * @type Element
 */
const menuButton = document.getElementById("menu-button");

/**
 * @type Element
 */
const drawer = document.getElementById("drawer");

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
  playInnerButton.classList.add("pause");
  mainElement.classList.add("playing");
});

audio.addEventListener("pause", () => {
  playInnerButton.classList.remove("pause");
  mainElement.classList.remove("playing");
});

// side drawer setup
menuButton.addEventListener("opened", ev => {
  drawer.open = true;
});
drawer.addEventListener("open", ev => {
  menuButton.open = true;
});
drawer.addEventListener("close", ev => {
  menuButton.open = false;
});
