# BaiduAsrPlugin

Baidu Asr Plugin

## 参考
https://github.com/rxnh8255/baiduasr

## 作用
百度在线语音识别和语音合成

ionic cordova plugin ls

ionic cordova plugin remove cordova-plugin-zzl-baiduasr

ionic cordova plugin add D:\Git\CordovaPlugin\baidu\BaiduAsrPlugin --variable APIKEY=tuooOeOPy34lRUBXdjGVTva8 --variable BAPPID=14929116 --variable SECRETKEY=EkGIsL54NwFvK5H3ys3bgKn8dq4gVWE0

## 使用示例
```
constructor(private media: Media) {
    var that = this;
    cordova.plugins.BaiduAsrPlugin.registerNotify(
      function(data) {
        console.log(data);

        if (data.type == 'asrBegin') {
          console.log('开始识别');
        }
        if (data.type == 'asrFinish') {
          console.log('识别结束');
        }
        if (data.type == 'asrText') {
          console.log(data.message);
          var dataModel = JSON.parse(data.message);
          if (dataModel.result_type == 'final_result') {
            alert(dataModel.best_result);
          } else {
            // alert(dataModel.best_result);
          }
        }
      },
      function(err) {
        console.log(err);
      }
    );
  }

  //配合另外一个BluetoothButtonPlugin可以实现蓝牙麦克风语音识别
  cordova.plugins.BluetoothButtonPlugin.start(msg => {
    alert('语音按键点击：' + msg);
    console.log(msg);
    if (msg) {
      //1. 从蓝牙麦克风获取语音   0. 从手机麦克风获取语音
      cordova.plugins.BaiduAsrPlugin.begin(1);
    }
  });

  //语音合成
  cordova.plugins.BaiduAsrPlugin.ttsPlay(
    '星期五啦',
    '',
    function(data) {
      console.log(data);
    },
    function(err) {
      console.log(err);
    }
  );
```
