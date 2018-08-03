const canvas = document.getElementById("myCanvas"), 
      context = canvas.getContext("2d")

paintChessField(canvas, context)
canvas.addEventListener('click', handlerClickChessField)


function paintChessField(canvasElem, context) {
    const sizeCell = getSizeCellForChessField(canvasElem)

    for (let i = 0; i < 8; i++) {
        let y = i % 2 === 0 ? 1 : 0;
        for (; y < 8; y=y+2) {
            const startPosititionX = y * sizeCell,
                  startPosititionY = i * sizeCell
            context.fillRect(startPosititionX, startPosititionY, sizeCell, sizeCell)
        }
    }
}

function getSizeCellForChessField(elem) {
    const canvasElemWidth = elem.offsetWidth,
          canvasElemHeight = elem.offsetHeight,
          sizeChessField = (canvasElemWidth > canvasElemHeight) ? canvasElemHeight : canvasElemWidth

    return sizeChessField / 8
}

function handlerClickChessField(e) {
    const sizeCell = getSizeCellForChessField(e.target)
          offsetX = e.offsetX
          offsetY = e.offsetY
          positionX = Math.floor(offsetX / sizeCell)
          positionY = Math.floor(offsetY / sizeCell)
    
    alert(`Вы кликнули по ячейке с позицей ${positionX}:${positionY}`)
}



