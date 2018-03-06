const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: '赵五',
            room: '赵五房'
        },{
            id: '2',
            name: '张三',
            room: '张三房'
        },{
            id: '3',
            name: '李四',
            room: '张三房'
        }]
    })

    it('应该是添加用户', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: '赵六',
            room: '聊天室所有人'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    })
    
    
    it('应移除用户', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    })
    it('不应移除用户', () => {
       var userId = "99";
       var user = users.removeUser(userId);

       expect(user).toNotExist();
       expect(users.users.length).toBe(3);
    })

    it('应该找到用户', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    })

    it('不应该找到用户', () => {
        var userId = '89';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    })

    it('应该返回张三房间的用户名', () => {
        var userList = users.getUserList('张三房');

        expect(userList).toEqual(['张三','李四'])
    })

    it('应该返回赵五房间的用户名', () => {
        var userList = users.getUserList('赵五房');

        expect(userList).toEqual(['赵五'])
    })


})