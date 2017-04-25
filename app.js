const Koa = require('koa');
const Static = require('koa-static');
const Router =  require('koa-router');

const RouterManager = require('./src/controller/router.js');

const app = new Koa();
const router = new Router();

/*静态服务*/
app.use(Static('./public'));
/*路由服务*/
new RouterManager(router);
app.use(router.routes()).use(router.allowedMethods());


app.listen(9000);