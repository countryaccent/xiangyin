
class RouterManager {
	constructor(router) {
		this.router = router;
		this.initRouter();
	}
	getRouter(path,url) {
		this.router.get(path,(ctx,next)=>{
			require(global.BASE_PATH+url).getControl(ctx,next);
		});
	}
	postRouter(path,url) {
		this.router.post(path,(ctx,next)=>{
			require(global.BASE_PATH+url).getControl(ctx,next);
		});
	}
	initRouter() {
		//首页
		this.getRouter('/','/src/controller/home/pages/home.js');
	}
}

module.exports = RouterManager;