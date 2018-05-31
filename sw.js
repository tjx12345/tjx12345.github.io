'use strict';
importScripts('sw-toolbox.js');
toolbox.precache(["index.html"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});


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

        _self.addEventListener('activate', function () {
            console.log('Activated');
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




        });

     
          // sw推送消息
         
         const onPush = function(event) {
            // 一下API容易混淆,注意
            event.waitUntil(_self.registration.showNotification('后台推送', {
                title:'sw消息的推送'
            }));
        };

        _self.addEventListener('push', onPush);



          

