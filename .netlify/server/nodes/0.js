

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5COckmDa.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CS9allBQ.js"];
export const stylesheets = [];
export const fonts = [];
