import { DEFAULT_LATENCY_MS } from "./config.js";

let ctx = null;
let startTime = 0;
let running = false;

export function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
}

export async function startClock() {
    const c = getCtx();
    if (c.state === "suspended") await c.resume();
    startTime = c.currentTime;
    running = true;
}

export function stopClock() {
    running = false;
}

export function setLatency(ms) {
    latencyMs = ms;
}

export function songTime() {
    if (!running) return 0;
    return getCtx().currentTime - startTime - latencyMs / 1000;
}