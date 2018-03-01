/**
 * Created by lmislm on 2018/3/1- 15:27.
 */
var socket = io();

socket.on('connect',() => {
    console.log('connect to server')

});
socket.on('disconnect',() => {
    console.log('Disconnect to server')
});

socket.on('newMessage', function (message) {
   console.log('newMessage', message);
   var li = jQuery('<li></li>');
   li.text(`${message.from}: ${message.text}`);

   jQuery('#messages').append(li);
});

socket.emit('createMessage', {
    from: '张三',
    text: '张三来了！',
},function (data) {
    console.log('已获取数据',data);
});

jQuery('#message-form').on('submit', function (e) {
   e.preventDefault();

   socket.emit('createMessage', {
       from: 'User',
       text: jQuery('[name=message]').val()
   },function () {

   });
});