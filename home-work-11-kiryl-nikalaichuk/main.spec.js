describe('API for working with users in the OOP style.', function () {
    
    const kirillData = {
        name: 'Kiryl Nikalaichuk',
        age: 26,
        sex: 'male',
        married: true,
        hasChildren: 0
    };

    const pavelData = {
        name: 'Pavel Ivanov',
        age: 24,
        sex: 'male',
        married: false,
        hasChildren: 0
    };

    const annaData = {
        name: 'Anna Petrova',
        age: 28,
        sex: 'female',
        married: true,
        hasChildren: 1
    };

    const users = new User();

    describe('Test create method.', function () {

        it('test create method with user 1', function () {
            users.create(1, kirillData);
            expect(users.usersList[1]).toEqual(kirillData);
        });

        it('test create method with user 2', function () {
            users.create(2, pavelData);
            expect(users.usersList[2]).toEqual(pavelData);
        });

        it('test create method with user 3', function () {
            users.create(3, annaData);
            expect(users.usersList[3]).toEqual(annaData);
        });
    });

    describe('Test get method.', function () {

        it('test get method with user 1', function () {
            const user = users.get(1);
            expect(user).toEqual(kirillData);
        });

        it('test get method with user 3', function () {
            const user = users.get(3);
            expect(user).toEqual(annaData);
        });

        it('test get method with non-existent id', function () {
            expect( function(){ users.get(4) } ).toThrow(new Error("User not found by id:4"));
        });
    });

    describe('Test find method.', function () {

        it('test find method with user 2', function () {
            const user = users.find(2);
            expect(user).toEqual(pavelData);
        });

        it('test find method with user 3', function () {
            const user = users.find(3);
            expect(user).toEqual(annaData);
        });

        it('test get method with non-existent id', function () {
            expect( function(){ users.find(0) } ).toThrow(new Error("User not found by id:0"));
        });
    });

    describe('Test findAll method.', function () {

        it('test findAll method with user 2', function () {
            const user = users.findAll([2]);
            expect(user).toEqual([pavelData]);
        });

        it('test findAll method with user 1, 2, 3', function () {
            const user = users.findAll([1, 2, 3]);
            const usersArr = [kirillData, pavelData, annaData];
            expect(user).toEqual(usersArr);
        });

        it('test findAll method with non-existent id', function () {
            expect( function(){ users.findAll([1, 2, 3, 4]) } ).toThrow(new Error("User not found by id:4"));
        });
    });

    describe('Test update method.', function () {

        it('test update method with user 2', function () {
            users.update(2, kirillData);
            const user = users.get(2);
            expect(user).toEqual(kirillData);
        });

        it('test update method with non-existent id', function () {
            expect( function(){ users.update(5, kirillData) } ).toThrow(new Error("User not found by id:5"));
        });
    });

    describe('Test delete method.', function () {

        it('test delete method with user 2', function () {
            users.delete();
            expect( function(){ users.get(2) } ).toThrow(new Error("User not found by id:2"));
        });
    });

});