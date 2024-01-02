import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.h7SVjMnN.js","_app/immutable/chunks/scheduler.GAIDwF5y.js","_app/immutable/chunks/index.6iDDB9Y7.js","_app/immutable/chunks/index.wVMxFoai.js"];
export const stylesheets = [];
export const fonts = [];
