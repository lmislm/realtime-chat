var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('已生成正确消息对象', () => {
        var from = '张三';
        var text = '消息';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text})

       //存储 响应对象res 在变量中
       //断言 from match
        // 断言 text match
        //断言 createdAt is number
    });
});

describe('generateLocationMessage', () => {
    it('已生成正确的位置对象', () => {
        var from = 'Deb';
        var latitude = 45.8686024;
        var longitude = 126.5537929;
        var url = 'https://ditu.amap.com/lng=126.5537929&lat=45.8686024';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    })
})