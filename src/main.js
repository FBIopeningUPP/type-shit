import "./style.css";
import {GAME_NAME} from './config.js';
import { buildDial, setNeedle } from "./dial.js";

document.title = GAME_NAME;
document.querySelectorAll("[data-game-name]").forEach((el) => (el.textContent = GAME_NAME));

const stage = document.getElementById("stage");

function fit() {
  const s = Math.min(innerWidth / 1280, innerHeight / 720);
  stage.style.transform = `translate(-50%, -50%) scale(${s})`;
}
addEventListener("resize", fit);
fit();

const dial = document.getElementById("dial");
buildDial(dial, [93.7, 99.1, 105.5]);
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.toggle("selected", c === card));
    setNeedle(dial, Number(card.dataset.freq));
  });
});

document.querySelectorAll(".slider input").forEach((input) => {
  const out = input.parentElement.querySelector("output");
  const update = () => (out.textContent = input.value + input.dataset.unit);
  input.addEventListener("input", update);
  update();
});

document.getElementById("btn-start").addEventListener("click", () => show("screen-game"));

export function show(id) {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.toggle("active", s.id === id);
  });
}

addEventListener("keydown", (e) => {
  const ids = {1: "screen-tune", 2: "screen-game", 3: "screen-results"};
  if (ids[e.key]) show(ids[e.key]);
});

const keyEls = {};
document.querySelectorAll(".key").forEach((k) => (keyEls[k.dataset.k] = k));
addEventListener("keydown", (e) => keyEls[e.key.toLowerCase()]?.classList.add("pressed"));
addEventListener("keyup", (e) => keyEls[e.key.toLowerCase()]?.classList.remove("pressed"));