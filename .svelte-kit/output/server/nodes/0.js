

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.xHpYyAZU.js","_app/immutable/chunks/scheduler.2GXnEO7r.js","_app/immutable/chunks/index.FmHQqFF2.js"];
export const stylesheets = ["_app/immutable/assets/0.Q3RAGnxb.css"];
export const fonts = [];
