(function () {
    const loadDataButtonElement = document.getElementById('loadData'),
          dataContainerElement = document.getElementById('dataContainer');

    loadDataButtonElement.addEventListener('click', () => {
        loadData('./users.json', addUsersElementsInContainer, dataContainerElement)
        const dataBlockElement = createUserDataBlockElement({name: 'Maksim Yakusik', age: 25});

        dataContainerElement.appendChild(dataBlockElement);
    });

    function loadData(url, callback, ...arg) {
        const request = new XMLHttpRequest();

        request.open('get', url);
        request.addEventListener('load', () => {
            const result = JSON.parse(request.response);

            callback(result, ...arg);
        });

        request.send();
    }

    function createUserDataBlockElement(user) {
        const result = document.createElement('div'),
              nameElement = document.createElement('span'),
              ageElement = document.createElement('span');

        nameElement.textContent = user.name;
        ageElement.textContent = user.age;

        result.appendChild(nameElement);
        result.appendChild(ageElement);

        return result;
    }

    function addUsersElementsInContainer (arr, container) {
        const fragment = document.createDocumentFragment();

        arr.forEach(user => {
            const userElem = createUserDataBlockElement(user);
            fragment.append(userElem)
        });

        container.append(fragment);
    }
})();
