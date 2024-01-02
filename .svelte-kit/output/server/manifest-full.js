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
		client: {"start":"_app/immutable/entry/start.7eJHuQTY.js","app":"_app/immutable/entry/app.zk9iiJvk.js","imports":["_app/immutable/entry/start.7eJHuQTY.js","_app/immutable/chunks/scheduler.GAIDwF5y.js","_app/immutable/chunks/singletons.O38oupOM.js","_app/immutable/chunks/index.wVMxFoai.js","_app/immutable/entry/app.zk9iiJvk.js","_app/immutable/chunks/scheduler.GAIDwF5y.js","_app/immutable/chunks/index.6iDDB9Y7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
