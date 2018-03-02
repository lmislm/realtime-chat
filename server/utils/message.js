/**
 * Created by lmislm on 2018/3/1- 16:25.
 */
var generateMessage = function (from, text) {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        //调用高德地图URI APIhttps://ditu.amap.com/lng=126.5537929&lat=45.8686024
        url: `https://ditu.amap.com/lng=${longitude}&lat=${latitude}`,
        // url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: new Date().getTime()
    }
}

module.exports = {generateMessage, generateLocationMessage};