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
		client: {"start":"_app/immutable/entry/start.NJFtM7z_.js","app":"_app/immutable/entry/app.xuiksCPk.js","imports":["_app/immutable/entry/start.NJFtM7z_.js","_app/immutable/chunks/scheduler.GAIDwF5y.js","_app/immutable/chunks/singletons.HJ8SKdFI.js","_app/immutable/chunks/index.wVMxFoai.js","_app/immutable/entry/app.xuiksCPk.js","_app/immutable/chunks/scheduler.GAIDwF5y.js","_app/immutable/chunks/index.6iDDB9Y7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
