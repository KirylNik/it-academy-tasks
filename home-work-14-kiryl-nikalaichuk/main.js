document.addEventListener('contextmenu', showMenuByClickCoordinates);
document.addEventListener('click', hideContextMenu);

function showMenuByClickCoordinates (e) {
    e.preventDefault();
    showMenu(menu, e.clientX, e.clientY);
}

function hideContextMenu() {
    const menu = document.getElementById('menu');
          classList = menu.classList,
          hideClass = 'hide';

          classList.add(hideClass);
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

