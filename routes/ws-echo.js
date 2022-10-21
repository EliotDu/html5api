const WebSocket = require('ws');


const createEchoServer = server=>{
    
    const wsServer  = new WebSocket.Server({server});

    wsServer.on('connection', (ws,res)=>{
        //目前用戶的連線數
        ws.send('-----連線數'+ wsServer.clients.size);
        ws.on('message', (message)=>{
            ws.send(message.toString())
        })
    })
}
module.exports = createEchoServer;