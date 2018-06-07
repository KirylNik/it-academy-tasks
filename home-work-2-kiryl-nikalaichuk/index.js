let data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined];

let result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]
let resultForMyFunctionSort = myPrioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);

console.log('result', result);
console.log('result2', resultForMyFunctionSort);

function prioritySort(array, dataPriority) {
    return array.sort(function (left, right) {
        if (dataPriority.indexOf(isNull(left) || typeof left) > dataPriority.indexOf(isNull(right) ||typeof right)) {
            return (true);
        };
    });
};

function isNull(value) {
    if (value === null) {
        return ('null');
    };
};

function myPrioritySort(array, dataPriority) {
    let arraySort = [];
    for (let i = 0; i < dataPriority.length; i++) {
        for (let y = 0; y < array.length; y++) {
            if ((isNull(array[y]) || typeof array[y]) === dataPriority[i]) {
                arraySort.push(array[y]);
            };
        };
    };
    return arraySort;
};

