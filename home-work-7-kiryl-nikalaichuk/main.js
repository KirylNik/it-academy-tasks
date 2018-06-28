(function (global) {
    'use strict';

    var MatrixUtil = {};

    global.MatrixUtil = MatrixUtil;
    
    MatrixUtil.create = function (height, width, value) {
        var result = new Array(height),
            line;

        width = width || height;

        for (var index = 0 ; height > index; index++) {
            line = new Array(width);
            line.fill(value);

            result[index] = line;
        }

        return result;
    };

    MatrixUtil.toString = function (valueConverter) {
        return function (matrix) {
            return matrix.map(function (line) {
                return line.map(function (item) {
                    return valueConverter(item);
                }).join('');
            }).join('\n');
        };
    }

    MatrixUtil.setValueForSector = function (matrix) {
        return function (aY, aX, bY, bX) {
            return function (value) {
                for (let i = 0; i < matrix.length; i++) {
                    if (i >= aY && i <= bY) {
                        for (let y = 0; y < matrix[i].length; y++) {
                            if (y >= aX && y <= bX) {
                                matrix[i][y] = value;
                            };
                        };
                    };
                };
            };
        };
    };


})(typeof module !== 'undefined' ? module.exports : window);
