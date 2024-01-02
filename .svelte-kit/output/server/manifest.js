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
		client: {"start":"_app/immutable/entry/start.aCIsDUdQ.js","app":"_app/immutable/entry/app.iUJxdB4l.js","imports":["_app/immutable/entry/start.aCIsDUdQ.js","_app/immutable/chunks/scheduler.2GXnEO7r.js","_app/immutable/chunks/singletons.vEfHoj9i.js","_app/immutable/chunks/index.K9hMreph.js","_app/immutable/entry/app.iUJxdB4l.js","_app/immutable/chunks/scheduler.2GXnEO7r.js","_app/immutable/chunks/index.FmHQqFF2.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
