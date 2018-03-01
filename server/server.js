/**
 * Created by lmislm on 2018/2/23- 16:29.
 */

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

var server = http.createServer(app);

var io = socketIO(server);

io.on('connection',function(socket) {
    console.log('new user connect');

    //emit from Admin text 欢迎进入App
    socket.emit('newMessage', generateMessage('Admin', '欢迎进入聊天App'));

    //broadcast.emit from Admin 通知新用户的加入
    socket.broadcast.emit('newMessage', generateMessage('Admin', '有新用户加入'));

    socket.on('createMessage', function (message, callback) {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('来自服务器的消息');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newMessage', generateMessage('Admin',`${coords.latitude}, ${coords.longitude}`))
    })

    socket.on('disconnect', function() {
        console.log('User was disconnected')
    })
});

server.listen(port,function() {
    console.log('服务已经启动')
});