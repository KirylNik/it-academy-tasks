function addition(left, right) {
    return left + right;
}

function isNull(value) {
    return value === null;
}

function getGreeting(name) {
    return 'Hello ' + name;
}

function parseBoolean(value) {
    return value.trim().toLowerCase() === 'true';
}

function getPathByHash(hash) {
    return hash.split('/').map(function (item) {
        return item.trim();
    }).filter(function (item) {
        return item !== ''
    });
}

describe('Test for addition', function () {
    it('Test for addition number', function () {
        let result;

        result = addition(31, 2901);

        expect(result).toBe(2932);
    });

    it('Test for addition number (negative numbers)', function () {
        let result;

        result = addition(-6301, -231);

        expect(result).toBe(-6532);
    });

    it('Test for addition number (with zero)', function () {
        let result;

        result = addition(0, 10000000);

        expect(result).toBe(10000000);
    });

    it('Test for addition string', function () {
        let result;

        result = addition('part1', 'part2');

        expect(result).toBe('part1part2');
    });

    it('Test for addition null and null', function () {
        let result;

        result = addition(null, null);

        expect(result).toBe(0);
    });

    it('Test for addition null and string', function () {
        let result;

        result = addition(null, '5');

        expect(result).toBe('null5');
    });

    it('Test for addition number and object', function () {
        let result;
        let object = new Object;

        result = addition(1, object);

        expect(result).toBe('1[object Object]');
    });

    it('Test for addition object and object', function () {
        let result;
        let object = new Object;

        result = addition(object, object);

        expect(result).toBe('[object Object][object Object]');
    });

    it('Test for addition boolean (true) and number', function () {
        let result;
        let object = new Object;

        result = addition(true, 9);

        expect(result).toBe(10);
    });

    it('Test for addition boolean (false) and number', function () {
        let result;
        let object = new Object;

        result = addition(false, 9);

        expect(result).toBe(9);
    });

    it('Test for addition (check for absence of arguments)', function () {
        let result;
        result = addition();

        expect(result).toBeNaN;
    });

});

describe('Test for isNull', function () {
    it('Test for isNull', function () {
        let result = isNull(null);

        expect(result).toBeTrue;
    });

    it('Test for isNull (string check)', function () {
        let result = isNull('null');

        expect(result).toBeFalse;
    });

    it('Test for isNull (check undefined)', function () {
        let result = isNull(undefined);

        expect(result).toBeFalse;
    });

    it('Test for isNull (check NaN)', function () {
        let result = isNull(NaN);

        expect(result).toBeFalse;
    });

    it('Test for isNull (check zero)', function () {
        let result = isNull(0);

        expect(result).toBeFalse;
    });

    it('Test for isNull (check empty sting)', function () {
        let result = isNull('');

        expect(result).toBeFalse;
    });

    it('Test for isNull (check object)', function () {
        let object = new Object;
        let result = isNull(object);

        expect(result).toBeFalse;
    });

    it('Test for isNull (check for absence of arguments)', function () {
        let object = new Object;
        let result = isNull(object);

        expect(result).toBeFalse;
    });
});

describe('Test for getGreeting', function () {
    it('Test for getGreeting (check string)',function () {
        let result = getGreeting('Alex');

        expect(result).toBe('Hello Alex');
    });

    it('Test for getGreeting (check number)',function () {
        let result = getGreeting('1000');
        
        expect(result).toBe('Hello 1000');
    });

    it('Test for getGreeting (check undefined)',function () {
        let result = getGreeting(undefined);
        
        expect(result).toBe('Hello undefined');
    });

    it('Test for getGreeting (check boolean)',function () {
        let result = getGreeting(false);
        
        expect(result).toBe('Hello false');
    });

    it('Test for getGreeting (check boolean)',function () {
        let object = new Object;
        let result = getGreeting(object);
        
        expect(result).toBe('Hello [object Object]');
    });

    it('Test for getGreeting (check for absence of arguments)',function () {
        let result = getGreeting();
        
        expect(result).toBe('Hello undefined');
    });
});

describe('Test for parseBoolean', function () {

    it('must return true for " TruE" string', function () {
        expect(parseBoolean(' TruE')).toBeTrue;
    });

    it('must return true for " TRUE " string', function () {
        expect(parseBoolean(' TRUE ')).toBe(true);
    });

    it('must return true for "True      " string', function () {
        expect(parseBoolean('True      ')).toBeTrue;
    });

    it('must return true for "   TRUE   " string', function () {
        expect(parseBoolean('   TRUE   ')).toBeTrue;
    });

    it('must return true for "TRUE/n" string', function () {
        expect(parseBoolean('TRUE\n')).toBeTrue;
    });

    it('must return true for "\rTRUE" string', function () {
        expect(parseBoolean('\rTRUE')).toBeTrue;
    });
    
    it('must return true for "\TRUE\n" string', function () {
        expect(parseBoolean('\"TRUE\n')).toBeFalse;
    });
});

describe('Test for getPathByHash', function () {

    it('must return ["user", "create"] for "user/create" hash string', function () {
        expect(getPathByHash('user/create')).toEqual(['user', 'create']);
    });

    it('must return ["0123", "0110"] for "user/create" hash string', function () {
        expect(getPathByHash('0123/0110')).toEqual(['0123', '0110']);
    });

    it('must return ["false", "null"] for "user/create" hash string', function () {
        expect(getPathByHash('false/null')).toEqual(['false', 'null']);
    });

    it('must return ["undefined", "undefined"] for "user/create" hash string', function () {
        expect(getPathByHash('undefined/undefined')).toEqual(['undefined', 'undefined']);
    });

    it('must return ["undefined"] for "undefined" hash string', function () {
        expect(getPathByHash('undefined')).toEqual(['undefined']);
    });

    it('must return ["undefined", "undefined", "0123", "0110"] for "user/create/0123/0110" hash string', function () {
        expect(getPathByHash('undefined/undefined/0123/0110')).toEqual(['undefined', 'undefined', '0123', '0110']);
    });

    it('must return ["undefined", "0110"] for "undefined///0110" hash string', function () {
        expect(getPathByHash('undefined///0110')).toEqual(['undefined', '0110']);
    });

    it('must return ["qwertyuiopasdfghjklzxcvbnm", qwertyuiopasdfghjklzxcvbnm] for "qwertyuiopasdfghjklzxcvbnm/qwertyuiopasdfghjklzxcvbnm" hash string', function () {
        expect(getPathByHash('qwertyuiopasdfghjklzxcvbnm/qwertyuiopasdfghjklzxcvbnm')).toEqual(['qwertyuiopasdfghjklzxcvbnm', 'qwertyuiopasdfghjklzxcvbnm']);
    });
});



