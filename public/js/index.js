/**
 * Created by lmislm on 2018/3/1- 15:27.
 */
var socket = io();

socket.on('connect',() => {
    console.log('connect to server')

    socket.emit('createMessage',{
        from: 'booml.cn',
        text: '能用了'
    })
});
socket.on('disconnect',() => {
    console.log('Disconnect to server')
});

socket.on('newMessage', function (message) {
   console.log('NewMessage', message);
});