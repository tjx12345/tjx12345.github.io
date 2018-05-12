'use strict';
importScripts('sw-toolbox.js');
toolbox.precache(["index.html"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});


 const _self = this;
        console.log(_self);
        _self.addEventListener('message',event => {

            console.log(event.data);

            _self.clients.matchAll().then(function(clients) {
                clients.forEach(function(client) {
                    client.postMessage('Service worker attached.');
                })
            });
            // 群发所有tab

        });
        console.log('In service worker.');

        _self.addEventListener('install', function () {
            console.log('Install success');
        });

        _self.addEventListener('activate', function () {
            console.log('Activated');
        });

