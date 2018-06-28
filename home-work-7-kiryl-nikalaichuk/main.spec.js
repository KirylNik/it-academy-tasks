describe('MatrixUtil', function () {
    describe('create', function () {
        it('simple', function () {
            var result = MatrixUtil.create(2, 2);

            expect(result).toEqual([
                [undefined, undefined],
                [undefined, undefined]
            ]);
        });

        it('with one argument', function () {
            var result = MatrixUtil.create(3);

            expect(result).toEqual([
                [undefined, undefined, undefined],
                [undefined, undefined, undefined],
                [undefined, undefined, undefined]
            ]);
        });

        it('with a default value', function () {
            var result = MatrixUtil.create(3, 3, true);

            expect(result).toEqual([
                [true, true, true],
                [true, true, true],
                [true, true, true]
            ]);
        });
    });

    it('toString', function () {
        var toStringForMatrixBooleanValue = MatrixUtil.toString(function (item) {
                return item ? 'x' : 'o';
            }),
            matrix = MatrixUtil.create(2, 2, true);

        expect(toStringForMatrixBooleanValue(matrix)).toEqual(
            'xx\n' +
            'xx'
        );

        matrix[0][0] = false;
        matrix[1][1] = false;

        expect(toStringForMatrixBooleanValue(matrix)).toEqual(
            'ox\n' +
            'xo'
        );
    });

    describe('setValueForSector', function () {
        it('set for all, left and top part', function () {
            var matrix = MatrixUtil.create(3, 3, true),
                setValueForMyMatrix = MatrixUtil.setValueForSector(matrix),
                setValueForAll = setValueForMyMatrix(0, 0, 2, 2),
                setValueForLeftPart = setValueForMyMatrix(0, 0, 2, 0);
                setValueForTopPart = setValueForMyMatrix(0, 0, 0, 2);
                setValueForCenterElem = setValueForMyMatrix(1, 1, 1, 1);
                setValueForBottomPart = setValueForMyMatrix(2, 0, 2, 2);

                setValueForFirstElem = setValueForMyMatrix(0, 0, 0, 0);
                setValueForSecondElem = setValueForMyMatrix(0, 1, 0, 1);
                setValueForThirdElem = setValueForMyMatrix(0, 2, 0, 2);
                setValueForFourthElem = setValueForMyMatrix(1, 0, 1, 0);
                setValueForSixElem = setValueForMyMatrix(1, 2, 1, 2);

                setValueForAll(false);

                expect(matrix).toEqual([
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]);

                setValueForLeftPart(true);

                expect(matrix).toEqual([
                    [true, false, false],
                    [true, false, false],
                    [true, false, false]
                ]);

                setValueForTopPart(true);

                expect(matrix).toEqual([
                    [true, true,  true],
                    [true, false, false],
                    [true, false, false]
                ]);

                setValueForCenterElem('Hello');

                expect(matrix).toEqual([
                    [true, true,  true],
                    [true, 'Hello', false],
                    [true, false, false]
                ]);

                setValueForBottomPart('World');

                expect(matrix).toEqual([
                    [true, true,  true],
                    [true, 'Hello', false],
                    ['World', 'World', 'World']
                ]);

                setValueForAll('');

                expect(matrix).toEqual([
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ]);

                setValueForFirstElem('This');

                expect(matrix).toEqual([
                    ['This', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ]);

                console.log(matrix);

                setValueForSecondElem('student');

                expect(matrix).toEqual([
                    ['This', 'student', ''],
                    ['', '', ''],
                    ['', '', '']
                ]);

                setValueForThirdElem('needs');

                expect(matrix).toEqual([
                    ['This', 'student', 'needs'],
                    ['', '', ''],
                    ['', '', '']
                ]);

                setValueForFourthElem('to put');

                expect(matrix).toEqual([
                    ['This', 'student', 'needs'],
                    ['to put', '', ''],
                    ['', '', '']
                ]);

                setValueForCenterElem('100');

                expect(matrix).toEqual([
                    ['This', 'student', 'needs'],
                    ['to put', '100', ''],
                    ['', '', '']
                ]);

                setValueForSixElem('points ;-)');

                expect(matrix).toEqual([
                    ['This', 'student', 'needs'],
                    ['to put', '100', 'points ;-)'],
                    ['', '', '']
                ]);
        });
    });
});
