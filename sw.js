'use strict';
importScripts('sw-toolbox.js');
toolbox.precache(["index.html"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});




// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/5.0.0/firebase-app.js');
// importScripts('/__/firebase/5.0.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

// var messaging = firebase.messaging();

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.
 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
 firebase.initializeApp({
   'messagingSenderId': 'YOUR-SENDER-ID'
 });
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]
 **/


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]


/// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   var notificationTitle = 'Background Message Title';
//   var notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });



 const _self = this;

        console.dir(_self);
        _self.addEventListener('message',(event,port) => {

            // 被托管的页面对象
            // event.source.postMessage('aaa')


            // event.ports[0] && event.ports[0].postMessage('我也来了');
            

            //参数promise  保证sw不会再改promise执行时结束
            // event.waitUntil(_self.registration.showNotification('sw通知了'));
            // 
            // 
            // 
    


        });
        console.log('In service worker.');

        _self.addEventListener('install', function () {
            console.log('Install success');
            // new Notification('Hello world.');
        });

        _self.addEventListener('activate', function (event) {
            console.log('Activated');

             event.waitUntil(
             setInterval(function() {
                _self.registration.showNotification('后台推送', {
                      title:'sw消息的推送'
                });
            },5000) );
          });
              // 群发所有tab
              // _self.clients.matchAll().then(function(clients) {
              //   clients.forEach(function(client) {
              //       console.log(client)
              //           client.postMessage('Service worker attached.');
              //       })
              //   });
                
              // 在 SW 中使用
        // _self.registration.showNotification("柏链道捷", {
        //   actions: [{action: '真赞', title: "差评"}]
        // });

        _self.addEventListener('notificationclick', function(event) {
          event.notification.close();
          if (event.action === 'archive') {
            console.log('.....archive....sw')
          } else {
            console.log('.....NoArchive....sw')
          }
        }, false);

       

     
          // sw推送消息
         
        //  const onPush = function(event) {
        //     // 一下API容易混淆,注意
        //     event.waitUntil(_self.registration.showNotification('后台推送', {
        //         title:'sw消息的推送'
        //     }));
        // };

        // _self.addEventListener('push', onPush);

    

          

