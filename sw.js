'use strict';
importScripts('sw-toolbox.js');
toolbox.precache(["index.html"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});


 const _self = this;
 console.log(_self);
        _self.addEventListener('message',event => {

            console.log(event.data);

            event.source.postMessage('ok');

                        // 群发所有tab
            // 页面
            // _self.clients.matchAll().then(function(clients) {
            // clients.forEach(function(client) {
            //     console.log(client);
            //     client.postMessage('Service worker attached.');
            // })

        });
        console.log('In service worker.');

        _self.addEventListener('install', function () {
            console.log('Install success');
        });

        _self.addEventListener('activate', function () {
            console.log('Activated');
        });


});