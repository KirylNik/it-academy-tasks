function getStrLength(str) {
    return str.length;
}

function getLowerCase(str) {
    return str.toLowerCase();
}

function getUpperCase(str) {
    return str.toUpperCase();
}

function getIndexOf(str, substr) {
    return str.indexOf(substr);
}

function sliceStr(str, start, end) {
    return str.slice(start, end);
}

describe('Tests for string methods (length)', function () {
    it('Tests for a string of length 10', function () {
        let result;

        result = getStrLength('qwertyuiop');

        expect(result).toBe(10);
    });

    it('Tests for a string of length 1', function () {
        let result;

        result = getStrLength('q');

        expect(result).toBe(1);
    });

    it('Tests for a string of length 0', function () {
        let result;

        result = getStrLength('');

        expect(result).toBe(0);
    });

    it('Tests for a string consisting of a space', function () {
        let result;

        result = getStrLength(' ');

        expect(result).toBe(1);
    });

    it('Tests for a string with a special character', function () {
        let result;

        result = getStrLength('\n123456');

        expect(result).toBe(7);
    });

});

describe('Tests for string methods (toLowerCase)', function () {
   it('Checking the string "qwerty"', function () {
       let result;

       result = getLowerCase('qwerty');

       expect(result).toBe('qwerty');
   });

   it('Checking the string "QWERTY"', function () {
       let result;

       result = getLowerCase('QWERTY');

       expect(result).toBe('qwerty');
   });

   it('Checking the string " qWertY "', function () {
        let result;

        result = getLowerCase(' qWertY ');

        expect(result).toBe(' qwerty ');
    });
});

describe('Tests for string methods (toUpperCase)', function () {
    it('Checking the string "qwerty"', function () {
        let result;
 
        result = getUpperCase('qwerty');
 
        expect(result).toBe('QWERTY');
    });
 
    it('Checking the string "QWERTY"', function () {
        let result;
 
        result = getUpperCase('QWERTY');
 
        expect(result).toBe('QWERTY');
    });
 
    it('Checking the string " qWertY "', function () {
         let result;
 
         result = getUpperCase(' qWertY ');
 
         expect(result).toBe(' QWERTY ');
     });
 });

 describe('Tests for string methods (indexOf)', function () {
    it('Checking the string "Hello World!" and substring "Hello"', function () {
        let result;
 
        result = getIndexOf("Hello World!", "Hello")
 
        expect(result).toBe(0);
    });
 
    it('Checking the string "Hello World!" and substring " "', function () {
        let result;
 
        result = getIndexOf("Hello World!", " ")
 
        expect(result).toBe(5);
    });
 
    it('Checking the string "Hello World!" and substring "!"', function () {
        let result;
 
        result = getIndexOf("Hello World!", "!")
 
        expect(result).toBe(11);
    });

    it('Checking the string "Hello World!" and substring "h"', function () {
        let result;
 
        result = getIndexOf("Hello World!", "h")
 
        expect(result).toBe(-1);
    });
 });

 describe('Tests for string methods (slice)', function () {
    it('Checking the string "Hello World!" starting with 6 characters', function () {
        let result;
 
        result = sliceStr("Hello World!", 6)
 
        expect(result).toBe('World!');
    });
 
    it('Checking the string "Hello World!" starting with 0 characters', function () {
        let result;
 
        result = sliceStr("Hello World!", 0);
 
        expect(result).toBe("Hello World!");
    });
 
    it('Checking the string "Hello World!" from 6 characters to 11 characters', function () {
        let result;
 
        result = sliceStr("Hello World!", 6, 11);
 
        expect(result).toBe('World');
    });

    it('Checking the string "Hello World!" beginning with the second element from the end', function () {
        let result;
 
        result = sliceStr("Hello World!", -2);
 
        expect(result).toBe('d!');
    });
 });

 describe('Unicode encoding. Character-by-character comparison.', function () {
    it('Character Comparison', function () {
        expect('a' > 'Z').toBe(true);
        expect('a' < 'Z').toBe(false);
        expect('ё' > 'я').toBe(true);
    });

    it('By character string comparison', function () {
        expect('test0' > 'test').toBe(true);
        expect("Вася" > "Варя").toBe(true);
    });

    it('Comparison of numbers and strings', function () {
        expect('9' > '199').toBe(true);
        expect(9 < '199').toBe(true);
    });

    it('The "localeCompare" method', function () {
        let str = 'Welcom';
        expect(str.localeCompare('Welcom')).toBe(0);
        expect(str.localeCompare('Walk')).toBe(1);
        expect(str.localeCompare('Zorro')).toBe(-1);
    });

    it('The "fromCharCode" and "charCodeAt" methods', function () {
        expect(String.fromCharCode(1072)).toEqual('а');
        expect('акация'.charCodeAt(0)).toEqual(1072);
    });
});



