
class RouterManager {
	constructor(router) {
		this.router = router;
		this.initRouter();
	}
	initRouter() {
		this.router.get('/',function(ctx,next){
			ctx.body = 'hello';
		});
	}
}

module.exports = RouterManager;