

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C8X_EkrC.js","_app/immutable/chunks/scheduler.gj4lmsfH.js","_app/immutable/chunks/index.Bmg-Wy0P.js"];
export const stylesheets = [];
export const fonts = [];
