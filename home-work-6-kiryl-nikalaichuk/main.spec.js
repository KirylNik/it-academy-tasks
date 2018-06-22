describe('Testing the receipt of date components', function () {

    const date = new Date(1000000000000);

    it('Tests "getDate()" method', function () {

        expect(date.getDate()).toBe(9);

    });

    it('Tests "getFullYear()" method', function () {

        expect(date.getFullYear()).toBe(2001);

    });

    it('Tests "getMonth()" method', function () {

        expect(date.getMonth()).toBe(8);

    });

    it('Tests "getTime()" method', function () {

        expect(date.getTime()).toBe(1000000000000);

    });
});

describe('Testing the installation of date components', function () {

    const someDate = new Date(1000000000000);

    it('Tests "setFullYear()" method', function () {

        someDate.setFullYear(2018);

        expect(someDate.getFullYear()).toBe(2018);

    });

    it('Tests "setMinutes()" method', function () {

        someDate.setMinutes(55);

        expect(someDate.getMinutes()).toBe(55);

    });
});

describe('Test autocorrection data', function () {
    it('Test autocorrection data (data)', function () {

        const someDate = new Date(2018, 0, 32);
        expect(someDate.getDate()).toBe(1);

    });

    it('Test autocorrection data (month)', function () {

        const someDate = new Date(2017, 12, 32);
        expect(someDate.getMonth()).toBe(1);

    });
});

describe('Testing Date Formatting', function () {

    const someDate = new Date(2018, 11, 31, 12, 30, 0);
    const optionsDate = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    it('Testing Date Formatting (en-US)', function () {

        const dateUsa = someDate.toLocaleString("en-US", optionsDate);
        expect(dateUsa).toBe('Monday, December 31, 2018 Anno Domini, 12:30:00 PM');

    });
});

describe('Parsing a string, Date.parse', function () {
    
    it('Zone UTC', function () {

        const msUTC = Date.parse('2018-06-26T13:51:50.417Z');

        expect(msUTC).toBe(1530021110417);

    });

    it('Timezone +02: 00 GMT', function () {

        const msGMT2 = Date.parse('2018-06-26T13:51:50.417+02:00');
        expect(msGMT2).toBe(1530013910417);

    });
});
