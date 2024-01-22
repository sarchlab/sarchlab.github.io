export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AMD_Logo.svg.png","NSF_logo.png","akita_logo.png","circuit.jpg","code.svg","daoxuan.jpg","email.svg","favicon.png","file.svg","file_outline.svg","github.svg","googlescholar.png","location.svg","mgpusim_logo.png","multigpu.jpg","pcb.png","publication_list.json","sabila_profile.jpeg","sarchlab.svg","twitter.svg","vis4mesh.pdf","xiaohongshu.png","yifan_cv.pdf","yifan_profile.png","yifan_sun.svg","ying_profile.png","youtube.svg","zhuoyan_profile.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".json":"application/json",".jpeg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.2b336879.js","app":"_app/immutable/entry/app.c2b5c38f.js","imports":["_app/immutable/entry/start.2b336879.js","_app/immutable/chunks/index.1821980e.js","_app/immutable/chunks/singletons.7b25c6d0.js","_app/immutable/chunks/paths.3e0987a6.js","_app/immutable/entry/app.c2b5c38f.js","_app/immutable/chunks/index.1821980e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js')
		],
		routes: [
			{
				id: "/(lab)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/akita",
				pattern: /^\/akita\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/akita/akita23",
				pattern: /^\/akita\/akita23\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(lab)/news",
				pattern: /^\/news\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(lab)/people",
				pattern: /^\/people\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(lab)/publication",
				pattern: /^\/publication\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(lab)/software",
				pattern: /^\/software\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/syifan",
				pattern: /^\/syifan\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/syifan/publication",
				pattern: /^\/syifan\/publication\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/syifan/teaching",
				pattern: /^\/syifan\/teaching\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
