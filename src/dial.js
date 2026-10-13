const MIN = 88;
const MAX = 108;
const pct = (f) => ((f - MIN) / (MAX - MIN)) * 100;

export function buildDial(el, stations) {
    let html = '<div class="scale">';
    for (let i = 0; i <= 40; i++) {
        const f = MIN + i / 2;
        const kind = f % 2 === 0 ? "major" : Number.isInteger(f) ? "mid" : "minor";
        const left = (i / 40) * 100;
        html += `<i class="tick ${kind}" style="left:${left}%"></i>`;
        if (kind === "major") html += `<span class="num" style="left:${left}%">${f}</span>`;
    }
    stations.forEach((s) => (html += `<i class="mark" style="left:${pct(s)}%"></i>`));
    html += `<i class="needle" style="left:${pct(stations[0])}%"></i></div>`;
    el.innerHTML = html;
}

export function setNeedle(el, freq) {
    el.querySelector(".needle").style.left = pct(freq) + "%";
}
