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
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

app.listen(port,() => {
    console.log('服务已经启动')
});