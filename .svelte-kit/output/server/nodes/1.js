

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bYWzG9U9.js","_app/immutable/chunks/scheduler.2GXnEO7r.js","_app/immutable/chunks/index.FmHQqFF2.js","_app/immutable/chunks/singletons.lyzuotbj.js","_app/immutable/chunks/index.K9hMreph.js"];
export const stylesheets = [];
export const fonts = [];
