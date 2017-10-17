module.exports = function (env) {
  env == undefined && (env = 'prod'); //防止上线环境全局webpack命令出错
  return require('./webpack.' + env + '.js');
}