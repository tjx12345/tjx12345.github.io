  
  // 单向发送消息到sw
 let postToSW = msg => navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage(msg);

    navigator.serviceWorker.addEventListener('message',event=> alert(event.data));

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
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
 
const vapidPublicKey = 'BDXYAegyN90ysm252LqCuL34bgSNdnvEoxH-g9tvssTnsuUIstgTFSMtYwyHcgMCuMKNtMGcVmb4VUYW62yLerM';
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);



    // 测试是否包含该对象
        if ('serviceWorker' in navigator) { 
         window.addEventListener('load', function() {   
          // 注册
           navigator.serviceWorker.register('/sw.js')
           .catch(err => console.log('ServiceWorker registration failed: ', err))
           .then( 
              registration => registration.pushManager.getSubscription()
              .then( subscription => subscription || registration.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:convertedVapidKey}) )
            )
           // 订阅信息会过期，所以不要忘了在 servier worker 中监听 pushsubscriptionchange 事件，当订阅过期后自动重新订阅。
           .then( subscription => {
                console.log('2222')
              const endpoint = subscription.endpoint;

              const options = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ endpoint })
              };
              return fetch('/test1', options);
           })
           .then(()=>postToSW('客户端给sw=>不要求接受的post')) // 单发sw
           .then(()=> sendMessageToSW('客户端给sw的hellow')) // 双通sw
           .then(data=>{
                  // alert('sw返回给客户端的信息:'+data);
           });
         });
        }


        // 状态 granted 统一  denied 拒绝 default 默认
        //  需求: 判断是否支持,并给与提示hello       
         // 1: 判断浏览器是否支持
         if (!'Notifycation' in window ) alert('浏览器不支持!');
         // 2: 判断用户是否确认通知
         if (Notification.permission === 'granted') {
             // 2.2: 支持直接通知
             new Notification('你好,欢迎!');
         } else {
             // 2.1: 如果不支持 继续询问支持
             Notification.requestPermission()
             .then(permission=> {
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


 document.querySelector('.js-push-button').onclick = function () {
      const options = {
        method: 'get'
      };
      
      fetch('/pushmessage', options)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>console.log(err));
      
    
 }