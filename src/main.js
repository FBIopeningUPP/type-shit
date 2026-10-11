import "./style.css";
import {GAME_NAME} from './config.js';

document.title = GAME_NAME;

const stage = document.getElementById("stage");

function fit() {
  const s = Math.min(innerWidth / 1280, innerHeight / 720);
  stage.style.transform = `translate(-50%, -50%) scale(${s})`;
}
addEventListener("resize", fit);
fit();