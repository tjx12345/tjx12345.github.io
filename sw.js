'use strict';
importScripts('sw-sstoolbox.js');
toolbox.precache(["index.html", "style/style.css"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});