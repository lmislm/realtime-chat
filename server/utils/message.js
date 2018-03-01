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

module.exports = {generateMessage};