import { makeQueue } from "./queue.js";

globalThis.reproQueue = makeQueue();

import("./lazy.js").then(function showValue(module) {
  document.body.textContent = String(module.value);
});

export {};
