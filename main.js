
  document.querySelector('#share').onclick = function(){
      navigator.share({
        title: document.title,
        text: 'Hello World',
        url: 'https://www.baidu.com',
      });
  }


const sendMessageToSW = msg => new Promise((resolve, reject) => {
    const messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = event => {
        alert(event.data);
        if (event.data.error) {
            reject(event.data.error);
        } else {
            resolve(event.data);
        }
    };

    navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage(msg, [messageChannel.port2]);
});

        if ('serviceWorker' in navigator) { 
         window.addEventListener('load', function() {   
           navigator.serviceWorker.register('/sw.js').then(
             function(registration) { 
               // Registration was successful
               console.log('ServiceWorker registration successful with scope: ', registration.scope); 
           }, 
             function(err) { 
               // registration failed :( 
               console.log('ServiceWorker registration failed: ', err); 
            })
           .then(()=> sendMessageToSW('hellow'))
           .then(data=>{
                    alert(data);
            })
            .catch(e=>console.log(e))

         });
        }



        // window.addEventListener('message',event => alert(event.data));

