const Koa = require('koa');
const Static = require('koa-static');
const Router =  require('koa-router');
const log4js = require('log4js');

global.BASE_PATH = __dirname;

const RouterManager = require('./src/controller/router.js');
const Config = require('./src/lib/config.js');

const app = new Koa();
const router = new Router();
const logger = log4js.getLogger();

/*静态服务*/
app.use(Static('./public'));
/*路由服务*/
new RouterManager(router);
app.use(router.routes()).use(router.allowedMethods());


app.listen(Config.port);
logger.debug("Server run in "+Config.port);