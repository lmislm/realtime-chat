/**
 * Created by lmislm on 2018/2/23- 16:29.
 */

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

var server = http.createServer(app);

var io = socketIO(server);

io.on('connection',function(socket) {
    console.log('new user connect');

    socket.emit('newMessage',{
        from: 'lm',
        text: '你好',
        createdAt: 123123
    });

    socket.on('createMessage', function (message) {
        console.log('createMessage', message)
    })

    socket.on('disconnect', function() {
        console.log('User was disconnected')
    })
});

server.listen(port,function() {
    console.log('服务已经启动')
});