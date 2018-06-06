  // 单向发送消息到sw
  let postToSW = msg => navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage(msg);
  var self = navigator.serviceWorker;
// 与sw之间的交互
  self.addEventListener('message', event => alert(event.data));

  

function askPermission() {
    return new Promise(function (resolve, reject) {
        var permissionResult = Notification.requestPermission(function (result) {
            // 旧版本
            resolve(result);
        });
        if (permissionResult) {
            // 新版本
            permissionResult.then(resolve, reject);
        }
    })
    .then(function (permissionResult) {
        if (permissionResult !== 'granted') {
            // 用户未授权
        }
    });
}

  // 管道方式 可以双向交互sw
  const sendMessageToSW = msg => new Promise((resolve, reject) => {

      const messageChannel = new MessageChannel();
      // 监听接收消息
      messageChannel.port1.onmessage = event => {
          if (event.data.error) {
              reject(event.data.error);
          } else {
              resolve(event.data);
          }
      };
      // 发送消息到sw
      navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage(msg, [messageChannel.port2]);
  });


  function urlBase64ToUint8Array(base64String) {
      var padding = '='.repeat((4 - base64String.length % 4) % 4);
      var base64 = (base64String + padding)
          .replace(/\-/g, '+')
          .replace(/_/g, '/');
      var rawData = window.atob(base64);
      var outputArray = new Uint8Array(rawData.length);
      for (var i = 0, max = rawData.length; i < max; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
  }

  const vapidPublicKey = 'BBWV1KJk7_O3On9mX8fGPk2NY0EtFtH4eQP96ikhfg8Aly1MuHXscH1Ro2FA5qiWZ3IOVz1Zlnp7oF59HwnN8S0';


  function sendEndpointInSubscription (subscription) {
        const endpoint = subscription.endpoint;

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscription)
        };
        console.log('fetch到后台');
        return fetch('/test1', options);
  }

  function subscribe(serviceWorkerReg) {
      serviceWorkerReg.pushManager.subscribe({ // 2. 订阅
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)
          })
          .then(function(subscription) {
              // 3. 发送推送订阅对象到服务器，具体实现中发送请求到后端api
              console.log('订阅完成发送push给后台')
              sendEndpointInSubscription(subscription)
              .then(function(res) {
                console.log(res);
              })
              .catch(console.log);
          })
          .catch(function(e) {
            console.log(e)
              if (Notification.permission === 'denied') {
                  // 用户拒绝了订阅请求
              }
          });
  }


  // 测试是否包含该对象
  if ('serviceWorker' in navigator && 'PushManager' in window) {

          // 注册
          navigator.serviceWorker.register('sw.js') // 1. 注册Service Worker
              .then(function(reg) { 



                console.log('注册sw成功'); 
                // reg.pushManager.getSubscription()
                // .then(function (subscrip) {
                //   console.log('xxx:',subscrip);
                // })
                // .catch(console.error) 
                // 

              })
              .then(() => postToSW('客户端给sw=>不要求接受的post')) // 单发sw
              .then(() => sendMessageToSW('客户端给sw的hellow')) // 双通sw
              .then(data => {
                  // alert('sw返回给客户端的信息:'+data);
              });

          navigator.serviceWorker.ready.then(function(reg) {
            console.log('准备订阅')
           subscribe(reg) 
         })

          
  }


  // 状态 granted 统一  denied 拒绝 default 默认
  //  需求: 判断是否支持,并给与提示hello       
  // 1: 判断浏览器是否支持
  if (!'Notifycation' in window) alert('浏览器不支持!');
  // 2: 判断用户是否确认通知
  if (Notification.permission === 'granted') {
      // 2.2: 支持直接通知
      new Notification('你好,欢迎!');
  } else {
      // 2.1: 如果不支持 继续询问支持
      Notification.requestPermission()
          .then(permission => {
              if (permission === 'denied') return false;
              else if (permission === 'default' || permission === 'granted')
                  return true;
          })
          .then(isOk => {
              if (isOk) {
                  new Notification('你同意了,谢谢,欢迎')
              }
          })

  }


