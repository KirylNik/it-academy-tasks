import States from './states.js';

const states = new States({
    name: 'maksim',
    age: '25'
});

pringState();

states.push({
    name: 'dima'
});

pringState();

states.push({
    age: '55'
});

pringState();

states.undo();

pringState();

function pringState() {
    console.log();
    console.log('====================');

    console.log('name:', states.get('name'));
    console.log('age:', states.get('age'));
}

const nameField = document.getElementById('name')
const ageField = document.getElementById('age')
const undoButton = document.getElementById('undo')

let timeoutFlag = false

nameField.addEventListener('input', throttleHandler)
ageField.addEventListener('input', throttleHandler)
undoButton.addEventListener('click', undoHandler)

function throttleHandler(e) {
    if (!timeoutFlag) {
        timeoutFlag = true
        setTimeout(() => {
            timeoutFlag = false
            states.push({
                [e.target.id]: e.target.value
            })
        }, 1000)
    }
}

function undoHandler(e) {
    states.undo()

    const prevValueName = states.get('name')
    const prevValueAge = states.get('age')
    
    nameField.value = prevValueName
    ageField.value = prevValueAge
}