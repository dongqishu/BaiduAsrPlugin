var exec = require('cordova/exec');

exports.begin = function(success, fail) {
  return cordova.exec(success, fail, 'BaiduAsrPlugin', 'begin', [{}]);
};
exports.stop = function(success, fail) {
  return cordova.exec(success, fail, 'BaiduAsrPlugin', 'stop', [{}]);
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
