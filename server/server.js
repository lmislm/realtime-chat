/**
 * Created by lmislm on 2018/2/23- 16:29.
 */

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');

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

    socket.on('join', (params, callback) => {
        if(!isRealString(params.name) || !isRealString(params.room)) {
            callback('输入房间名和名字');
        }

        socket.join(params.room);
        // socket.leave('xx离开');

        // io.emit
        //socket.broadcast.emit -> socket.broadcast.to('所有人').emit
        //socket.emit
        socket.emit('newMessage', generateMessage('Admin', '欢迎进入'));
        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} 加入了聊天`));
        callback();     
    });

    socket.on('createMessage', function (message, callback) {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        // callback('来自服务器的消息');
        callback('来自服务器的消息');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin',coords.latitude, coords.longitude))
    })

    socket.on('disconnect', function() {
        console.log('User was disconnected')
    })
});

server.listen(port,function() {
    console.log('服务已经启动')
});