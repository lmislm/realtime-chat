const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: '王一样',
            room: '爸爸屋1'
        },{
            id: '2',
            name: '张二',
            room: '爸爸屋2'
        },{
            id: '3',
            name: '李三',
            room: '爸爸屋3'
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
})