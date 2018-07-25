const startContainer = document.getElementById('container-start');
const containerFinish = document.getElementById('container-finish');
const dropElem = document.getElementById('drop-elem');

startContainer.addEventListener('drop', drop);
startContainer.addEventListener('dragover', dragover)
containerFinish.addEventListener('drop', drop);
containerFinish.addEventListener('dragover', allowDrop);
dropElem.addEventListener('dragstart', dragstart);

function dragover(e) {
    e.preventDefault()
}

function dragstart(e) {
    e.dataTransfer.setData("Text",event.target.id)
}

function drop(e) {
    e.preventDefault();
    const data=event.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
}