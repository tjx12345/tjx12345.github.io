// const http = require('http');

// let server = http.createServer();

// server.on('request',(req,res)=>{
//   console.log(req.url);
//   req.on('data',data=>{
//     console.log(data.toString());
//   });
// });


// server.listen(8080);



const Koa = require('koa');
let app = new Koa();
// 向推送服务,发送消息
const webPush = require('web-push');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const endPoints = [];

// 也可以直接根据 web-push 库生成
const vapidKeys = webPush.generateVAPIDKeys();
console.log(vapidKeys);


let router = new Router();
router
.post('/test1', ctx => {
  console.log(ctx.request.body);
  console.log('请求进入post:/test1')
  // 保存客户端点标识
  endPoints.push(ctx.request.body.endpoint);
  ctx.status = 200;
  ctx.body = '<h1>ok</h1>';
})
.options('/test1', ctx => {
  ctx.body = '<h1>ok</h1>';
})
.get('/pushmessage', async ctx => {
   
   ctx.status = 200;
   ctx.body = {};
   console.log('xxxx',endPoints)
   endPoints.forEach( endpoint=>{
      console.log('app-server1:' + endpoint)
    // 发送消息
      webPush.sendNotification({ endpoint })
                      .then(console.log)
                      .catch(console.error);
    })
})


app.use(require('koa-static')('../last_test_pwa'));
app.use(bodyParser() );
app.use(router.routes());

app.listen(3000);