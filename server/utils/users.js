[{
    id: '/#124afasfs',
    name: '张三',
    room: '所有室内人'
}]

// addUsers(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

//es6
class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        //return user that was remove
        var user = this.getUser(id);

        if(user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0]
    }
    getUserList(room){
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

       return namesArray; 
    }
}

module.exports = {Users}

// -----------例子
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription(){
//         return `${this.name} 已经 ${this.age} 岁了 `;
//     }
// }

// var me = new Person('李四', 23);
// var description = me.getUserDescription();
// console.log(description);
// console.log('this name', me.name);
// console.log('this.age', me.age);

// ----------------------
// var users = [];

// var addUser = (id, name, room) => {
//     users.push({})
// }

// module.exports = {addUsers}