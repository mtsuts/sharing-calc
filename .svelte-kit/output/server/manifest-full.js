export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","owl-svg-logo.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.QYpawN2I.js","app":"_app/immutable/entry/app.8JuU5maE.js","imports":["_app/immutable/entry/start.QYpawN2I.js","_app/immutable/chunks/scheduler.2GXnEO7r.js","_app/immutable/chunks/singletons.y1qAmFfQ.js","_app/immutable/chunks/index.K9hMreph.js","_app/immutable/entry/app.8JuU5maE.js","_app/immutable/chunks/scheduler.2GXnEO7r.js","_app/immutable/chunks/index.FmHQqFF2.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
