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
    //mustache template
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });
    jQuery('#messages').append(html);
//    console.log('newMessage', message);
//    var li = jQuery('<li></li>');
//    li.text(`${message.from}   ${formattedTime} ${message.text}`);

//    jQuery('#messages').append(li);
});

socket.emit('createMessage', {
    from: '张三',
    text: '张三来了！',
},function (data) {
    console.log('已获取数据',data);
});

socket.on('newLocationMessage',function (message) {
   var formattedTime = moment(message.createdAt).format("h:mm a");  
    var template = jQuery('#location-message-template').html();
    var html = Mustache.render(template, {
        from: message.from,
        url: message.url,
        createdAt: formattedTime
    });

//    var li = jQuery('<li></li>') ;
//    var a = jQuery('<a target="_blank">我的大概位置（链接）</a>') ;

//    li.text(`${message.from} ${formattedTime}`);
//    a.attr('href', message.url);
//    li.append(a);
   jQuery('#messages').append(html);
});

jQuery('#message-form').on('submit', function (e) {
   e.preventDefault();

    var messageTextbox = jQuery('[name=message]')

   socket.emit('createMessage', {
       from: 'User',
       text: messageTextbox.val()
   },function () {
       messageTextbox.val('')
   });
});

var localtionButton = jQuery('#send-location');
localtionButton.on('click', function () {
    if(!navigator.geolocation) {
        return alert('不支持发送地理位置');
    }

    localtionButton.attr('disabled','disabled').text('正在发送位置...')

    navigator.geolocation.getCurrentPosition(function (position) {
        localtionButton.removeAttr("disabled").text('发送位置');
        socket.emit('createLocationMessage', {
            longitude: position.coords.longitude, //经度
            latitude: position.coords.latitude,
        });
    },function () {
        localtionButton.removeAttr('disabled').text('发送位置');
        alert('请开启获取位置有关设置');
    })
})