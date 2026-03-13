// =============================================
//  Mon's Learning Games — Sound Effects
//  Web Audio API only — no external files
// =============================================

const SFX = (() => {
  let ctx = null;

  function ac() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Resume if suspended (browser autoplay policy)
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // ---- helpers ----
  function tone(freq, type, startT, dur, vol, freqEnd) {
    const c = ac();
    const osc  = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, startT);
    if (freqEnd) osc.frequency.exponentialRampToValueAtTime(freqEnd, startT + dur);
    gain.gain.setValueAtTime(vol || 0.28, startT);
    gain.gain.exponentialRampToValueAtTime(0.001, startT + dur);
    osc.start(startT);
    osc.stop(startT + dur + 0.01);
  }

  function noise(startT, dur, vol, bandFreq) {
    const c = ac();
    const buf  = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src    = c.createBufferSource();
    src.buffer   = buf;
    const filter = c.createBiquadFilter();
    filter.type  = 'bandpass';
    filter.frequency.value = bandFreq || 1800;
    filter.Q.value = 1.5;
    const gain   = c.createGain();
    src.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);
    gain.gain.setValueAtTime(vol || 0.18, startT);
    gain.gain.exponentialRampToValueAtTime(0.001, startT + dur);
    src.start(startT);
    src.stop(startT + dur + 0.01);
  }

  // ---- Public sounds ----

  /** Short bright tap — clicking an item */
  function click() {
    const t = ac().currentTime;
    tone(700, 'sine', t,       0.08, 0.22, 500);
  }

  /** Soft whoosh — start of drag */
  function drag() {
    const t = ac().currentTime;
    noise(t, 0.12, 0.14, 1200);
    tone(400, 'sine', t, 0.12, 0.12, 250);
  }

  /** ✅ Correct — cheerful ascending arpeggio */
  function correct() {
    const t = ac().currentTime;
    [523, 659, 784, 1047].forEach((f, i) => tone(f, 'triangle', t + i * 0.09, 0.18, 0.25));
  }

  /** ❌ Wrong — low descending buzz */
  function wrong() {
    const t = ac().currentTime;
    tone(280, 'sawtooth', t,      0.15, 0.18, 160);
    tone(220, 'square',   t+0.05, 0.15, 0.10, 130);
  }

  /** 🎵 Pop — counting tap / shape colored */
  function pop() {
    const t = ac().currentTime;
    tone(900, 'sine', t, 0.07, 0.30, 500);
    noise(t, 0.04, 0.08, 3000);
  }

  /** 🖊️ Draw — soft pencil scratch (for maze) */
  function draw() {
    const t = ac().currentTime;
    noise(t, 0.06, 0.10, 2500);
  }

  /** 🎉 Celebration — fanfare */
  function celebrate() {
    const t = ac().currentTime;
    const melody = [523, 659, 784, 659, 784, 1047, 1047];
    melody.forEach((f, i) => tone(f, 'triangle', t + i * 0.11, 0.18, 0.22));
    // little drum hit at start
    noise(t, 0.08, 0.20, 200);
  }

  /** 🎨 Select tool (lesson 5) — soft bloop */
  function select() {
    const t = ac().currentTime;
    tone(500, 'sine', t,      0.06, 0.20, 800);
    tone(800, 'sine', t+0.06, 0.10, 0.15, 600);
  }

  return { click, drag, correct, wrong, pop, draw, celebrate, select };
})();
