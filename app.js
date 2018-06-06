const fs = require('fs');
const https = require('https'),
    pem = require('pem');

pem.config({

    pathOpenSSL: 'C:\\cygwin64\\bin\\openssl.exe'

});



pem.createCertificate({ days: 1, selfSigned: true }, function(err, keys) {

    const Koa = require('koa');
    let app = new Koa();
    // 向推送服务,发送消息

    const bodyParser = require('koa-bodyparser');
    const Router = require('koa-router');

    const endPoints = [];
    // const webPush = require('web-push');
    // const vapidKeys = webPush.generateVAPIDKeys();

    // webPush.setGCMAPIKey('AIzaSyDRVcdXVgwqQTIAkdIqJt3i-PlcrjEcSJk');
    // 也可以直接根据 web-push 库生成
    var webpush = require('web-push');
    var vapidKeys = webpush.generateVAPIDKeys(); // 1.生成公私钥
    webpush.setVapidDetails( // 2.设置公私钥
        'mailto:tujunxiong@tokenpai.com',
        vapidKeys.publicKey,
        vapidKeys.privateKey
    );
    console.log(vapidKeys.publicKey);

    let router = new Router();
    router
        .post('/test1', ctx => {
            console.dir(ctx.request.body);
            console.log('请求进入post:/test1')
            // 保存客户端点标识
            endPoints.push(ctx.request.body);
            ctx.status = 200;
            endPoints.forEach(pushSubscription => {
                setInterval(function() {
                    console.log(pushSubscription)
                    // 发送消息
                    webpush.sendNotification(pushSubscription, '服务器的消息来啦!')
                        .then(res => {
                            console.log('ok');
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }, 5000)
                // 
                // 

            });
        })
        .get('/pushmessage', async ctx => {

            ctx.status = 200;
            ctx.body = {};
            console.log('xxxx', endPoints)
            endPoints.forEach(endpoint => {
                console.log('app-server1:' + endpoint)
                // 发送消息
                webPush.sendNotification({ endpoint })
                    .then(console.log)
                    .catch(console.error);
            })
        })


    app.use(require('koa-static')('../tjx12345.github.io'));
    app.use(bodyParser());
    app.use(router.routes());


    https.createServer({key: keys.serviceKey, cert: keys.certificate}, app.callback()).listen(9900);


})