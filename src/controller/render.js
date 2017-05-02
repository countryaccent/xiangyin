//swig模版不更新了，自己维护一套
const swig = require('../utils/swig/index');
//模版配置
const config = {
    dir: global.BASE_PATH+'/src/views',
    ext: 'html'
}
//前端使用了vue框架
swig.setDefaults({
  varControls: ['<%','%>'],
});
//缓存
swig.setDefaults({
  cache: false
});

module.exports = function(view,locals){
  locals = locals || {};
  var template = swig.compileFile(config.dir+'/'+view+'.'+config.ext);
  return template(locals);
};
