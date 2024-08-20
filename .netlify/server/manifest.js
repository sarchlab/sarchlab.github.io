export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AMD_Logo.svg.png","NSF_logo.png","aibo.jpg","akita_logo.png","bilibili.svg","cal19.pdf","cams24_logo.png","caret-down-solid.svg","caret-right-solid.svg","chi21.pdf","chi22.pdf","chris_thames.jpeg","circuit.jpg","code.svg","daoxuan.jpg","email.svg","file.svg","file_outline.svg","github.svg","gnnmark.pdf","googlescholar.png","hpca2020.pdf","ieeevis_2022.pdf","location.svg","mengyang.jpeg","mgpusim-isca2019.pdf","mgpusim_logo.png","most24.pdf","msinclair-2019.jpg","multigpu.jpg","navisim_pact_2022.pdf","pcb.png","publication_list.json","sabila_profile.jpeg","sarchlab.svg","spartan_tpds_2021.pdf","tcarlson.jpeg","twitter.svg","valkyrie_pact_2020.pdf","vis4mesh.pdf","wsc18.pdf","xiaohongshu.png","yexi_zheng.jpg","yifan.jpg","yifan_cv.pdf","yifan_profile.png","yifan_sun.svg","ying_profile.png","youtube.svg","zhuoyan_profile.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".pdf":"application/pdf",".jpeg":"image/jpeg",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.DErHd-WB.js","app":"_app/immutable/entry/app.CkeB_kj0.js","imports":["_app/immutable/entry/start.DErHd-WB.js","_app/immutable/chunks/entry.gHcnEYIA.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/entry/app.CkeB_kj0.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CS9allBQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js'))
		],
		routes: [
			{
				id: "/(lab)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/akita",
				pattern: /^\/akita\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/akita/akita24",
				pattern: /^\/akita\/akita24\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/akita/akita24/zoom",
				pattern: /^\/akita\/akita24\/zoom\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(cams)/cams24",
				pattern: /^\/cams24\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(lab)/grant",
				pattern: /^\/grant\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/lwsim",
				pattern: /^\/lwsim\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/lwsim/people",
				pattern: /^\/lwsim\/people\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(lab)/news",
				pattern: /^\/news\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(lab)/people",
				pattern: /^\/people\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(lab)/publication",
				pattern: /^\/publication\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(lab)/software",
				pattern: /^\/software\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/syifan",
				pattern: /^\/syifan\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/syifan/publication",
				pattern: /^\/syifan\/publication\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/syifan/teaching",
				pattern: /^\/syifan\/teaching\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 21 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
