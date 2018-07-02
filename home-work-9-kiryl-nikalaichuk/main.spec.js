'use strict';

describe('OOP in prototype style.', function () {

    describe('Tests __proto__', function () {

        var animal = {
            eats: true
        };
        var rabbit = {
            jumps: true
        };

        rabbit.__proto__ = animal;

        it('Tests __proto__ #1', function () {

            expect(rabbit.jumps).toBe(true);
    
        });

        it('Tests __proto__ #2', function () {
    
            expect(rabbit.eats).toBe(true);
        
        });

    });

    describe('Testing: the prototype is used exclusively for reading.', function () {

        it('check by write', function () {
            var animal = {
                eats: true
            };
            var rabbit = {
                jumps: true,
                eats: false
            };
            
            rabbit.__proto__ = animal;

            expect(rabbit.eats).toBe(false);

        });

        it('deletion check', function () {

            var animal = {
                eats: true
            };
            var rabbit = {
                jumps: true,
                eats: false
            };
            
            rabbit.__proto__ = animal;

            expect(rabbit.eats).toBe(false);
        
            delete rabbit.eats;
            delete rabbit.eats;
            expect(rabbit.eats).toBe(true);

        });

    });

    describe('Testing method hasOwnProperty.', function () {

        var animal = {
            eats: true
        };
        
        var rabbit = {
            jumps: true,
            __proto__: animal
        };

        it('Testing method hasOwnProperty #1)', function () {
            
            expect(rabbit.hasOwnProperty('jumps')).toBe(true);

        });

        it('Testing method hasOwnProperty #2)', function () {
            
            expect(rabbit.hasOwnProperty('eats')).toBe(false);

        });

    });

    describe('Testing instanceof', function () {

        it('Testing instanceof #1', function () {

            function Rabbit() {}
            var rabbit = new Rabbit();
            
            expect(rabbit instanceof Rabbit).toBe(true);

        });

        it('Testing instanceof #2', function () {

            var arr = [];
            
            expect(arr instanceof Array).toBe(true);
            expect(arr instanceof Object).toBe(true);

    });

});

    it('Testing method Object.create(null)', function () {

        var data = Object.create(null);
        data.text = "Привет";
        
        expect(data.text).toBe(`Привет`);
        expect(data.toString).toBeUndefined();

    });

    it('Testing property constructor', function () {

        function Rabbit() {}

        Rabbit.prototype = {
            constructor: Rabbit
        };

        function Rabbit() {}
        
        expect(Rabbit.prototype.constructor == Rabbit).toBe(true);

    });

    it('Built-in prototypes can be changed. Add your own methods.', function () {

        String.prototype.repeat = function(times) {
            return new Array(times + 1).join(this);
        };
        
        expect('ля'.repeat(3)).toBe(`ляляля`);

    });

    it('Create a class using prototypes.', function () {

        function Animal(name) {
            this.name = name;
            this.speed = 0;
        }
        
        Animal.prototype.run = function(speed) {
            this.speed += speed;
        };
        
        var animal = new Animal('Зверь');
        
        expect(animal.speed).toBe(0);
        animal.run(5);
        expect(animal.speed).toBe(5);
        animal.run(5);
        expect(animal.speed).toBe(10);

    });

});
