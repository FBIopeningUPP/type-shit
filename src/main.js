import "./style.css";
import {GAME_NAME} from './config.js';

document.title = GAME_NAME;
document.querySelectorAll("[date-game-name]").forEach((el) => (el.textContent = GAME_NAME));

const stage = document.getElementById("stage");

function fit() {
  const s = Math.min(innerWidth / 1280, innerHeight / 720);
  stage.style.transform = `translate(-50%, -50%) scale(${s})`;
}
addEventListener("resize", fit);
fit();

export function show(id) {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.toggle("active", s.id === id);
  });
}

addEventListener("keydown", (e) => {
  const ids = {1: "screen-tune", 2: "screen-game", 3: "screen-results"};
  if (ids[e.key]) show(ids[e.key]);
});