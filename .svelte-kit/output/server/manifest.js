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
		client: {"start":"_app/immutable/entry/start.wAmSUeA-.js","app":"_app/immutable/entry/app.FZjQrVlL.js","imports":["_app/immutable/entry/start.wAmSUeA-.js","_app/immutable/chunks/scheduler.GAIDwF5y.js","_app/immutable/chunks/singletons.wlCbnvLT.js","_app/immutable/chunks/index.wVMxFoai.js","_app/immutable/entry/app.FZjQrVlL.js","_app/immutable/chunks/scheduler.GAIDwF5y.js","_app/immutable/chunks/index.6iDDB9Y7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
