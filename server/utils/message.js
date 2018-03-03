/**
 * Created by lmislm on 2018/3/1- 16:25.
 */
var moment = require('moment');

var momentTime = moment().valueOf();
var generateMessage = function (from, text) {
    return {
        from,
        text,
        createdAt: momentTime
    };
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        //调用高德地图URI API https://ditu.amap.com/lng=126.5537929&lat=45.8686024
        url: `https://ditu.amap.com/lng=${longitude}&lat=${latitude}`, 
        createdAt: momentTime
    }
}

module.exports = {generateMessage, generateLocationMessage};