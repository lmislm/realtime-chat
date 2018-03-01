var expect = require('expect');

var {generateMessage} = require('./message');

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