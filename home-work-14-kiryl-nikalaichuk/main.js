document.addEventListener('contextmenu', showMenuByClickCoordinates);

function showMenuByClickCoordinates (e) {
    e.preventDefault();
    showMenu(menu, e.clientX, e.clientY);
}

function showMenu(element, x, y) {
    let classList = element.classList,
        style = element.style,
        hideClass = 'hide',
        pxUnit = 'px';

    style.left = x + pxUnit;
    style.top = y + pxUnit;

    classList.remove(hideClass);

    element.addEventListener('click', () => {
        classList.add(hideClass);
    }, {once: true})
}

