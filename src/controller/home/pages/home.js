const render = require(global.BASE_PATH+'/src/controller/render.js');


exports.getControl = function(ctx,next) {
    ctx.body = render('pc/home/home',{
        
    });
}