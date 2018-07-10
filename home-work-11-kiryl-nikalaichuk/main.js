'use strict';

class User {
    constructor () {
        this.usersList = {};
        this.nameFormat = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    } 

    create (id, user) {
        if (this.myTypeOf(id) !== 'number' ||
            this.myTypeOf(user) !== 'object') {
            throw new Error('Wrong arguments');
        }
        if (this.myTypeOf(user.name) !== 'string') {
            throw new Error('user.name toBe string');
        }

        if (!this.nameFormat.test(user.name)) {
            throw new Error('Wrong name format');
        }
    
        this.usersList[id] = user;
    }

    get (id) {
        const result = this.find(id);

        return result;
    }

    find (id) {
        let result = this.usersList[id];

        if (result === undefined) {
            throw new Error('User not found by id:' + id);
        } else {
            result = Object.assign({}, result)
        }

        return result;
    }

    findAll (idArr) {
        const result = [];

        for (let i = 0; i < idArr.length; i++) {
            const user = this.find(idArr[i]);
            result.push(user);
        }

        return result;
    }

    update (id, user) {
        this.create(id, user);
    }

    delete (id) {

        if (this.usersList[id] === undefined) {
            throw new Error('User not found by id:' + id);
        } else {
            delete this.usersList[id];
        }
    }

    myTypeOf (value) {
        let result;

        if (value === null) {
            result = 'null';
        } else {
            result = typeof value;
        }
        
        return result;
    }
}