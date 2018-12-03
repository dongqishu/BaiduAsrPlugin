var exec = require('cordova/exec');

exports.begin = function(from, success, fail) {
  return cordova.exec(success, fail, 'BaiduAsrPlugin', 'begin', [{from:from}]);
};
exports.stop = function(success, fail) {
  return cordova.exec(success, fail, 'BaiduAsrPlugin', 'stop', [{}]);
};
exports.finish = function(success, fail) {
  return cordova.exec(success, fail, 'BaiduAsrPlugin', 'finish', [{}]);
};
exports.registerNotify = function(success, fail) {
  return cordova.exec(success, fail, 'BaiduAsrPlugin', 'registerNotify', [{}]);
};
exports.ttsPlay = function(message, utteranceId, success, fail) {
  return cordova.exec(success, fail, 'BaiduAsrPlugin', 'ttsPlay', [
    { text: message, utteranceId: utteranceId }
  ]);
};
exports.ttsStop = function(success, fail) {
  return cordova.exec(success, fail, 'BaiduAsrPlugin', 'ttsStop', [{}]);
};
