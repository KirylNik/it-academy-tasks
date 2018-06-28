// Code goes here

const routeConfig = {
    home: 'home',
    info: 'info',
    user: {
        list: 'user-list',
        edit: 'edit-user',
        create: 'create-user'
    }
};

function getTemplateId(route, path) {

    this.temp = '';

    if (route.length > 1) {
        let currentRoute = route.shift();
        let newPath = path[currentRoute];
        getTemplateId(route, newPath);
    } else {
        this.temp = path[roure[0]];
    }

    return this.temp;

}

templateId = getTemplateId(['user', 'create'], routeConfig);
alert(templateId);