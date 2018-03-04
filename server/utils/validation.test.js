/*
 * @Author: lmislm 
 * @Date: 2018-03-03 21:01:03 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-03 21:13:08
 */
const expect = require('expect');

//import isRealString
const {isRealString} =require('./validation');


//isRealString
    //非字符值报错
    //填入空格报错
    //可以填入字符串和无空格的字母
describe('isRealString', () => {
    it("非字符值报错", () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it("填入空格报错", () => {
        var res = isRealString('     ');
        expect(res).toBe(false);
    });
    it("可以填入字符串和无空格的字母", () => {
        var res = isRealString('   张三  ');
        expect(res).toBe(true);
    });
});