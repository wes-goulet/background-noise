import { version } from "/app-info.js";

const version_div = document.getElementById("version");
version_div.innerText = `v${version}`;

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

/** @type HTMLButtonElement */
const installDialog = document.querySelector("#install-dialog");
/** @type HTMLElement */
const installButton = document.querySelector("#install-button");

installDialog.addEventListener("ready", () => {
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", () => {
  installDialog.show();
});

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
menuButton.addEventListener("opened", (ev) => {
  drawer.open = true;
});
drawer.addEventListener("open", (ev) => {
  menuButton.open = true;
});
drawer.addEventListener("close", (ev) => {
  menuButton.open = false;
});

document.addEventListener("keydown", (ev) => {
  if (ev.code === "Space" && ev.target === document.body) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
});
