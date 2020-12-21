const removeAttributes = (element) => {
    //let colSet = new Set()
    let tempObj = {};
    for (const iterator in element) {
        if (!iterator.includes('attributes')) {
            tempObj[iterator] = element[iterator];
            // colSet.add(iterator);
        }
    }
    //  this.columns = [...colSet];
    return tempObj;
};

let response0 = [
    {
        id: '0057F000002yOpXQAU',
        name: 'omkar deokar',
        'profile.name': 'System Administrator',
        profileid: '00e7F000001iDChQAM'
    },
    {
        id: '0057F000000bF6qQAE',
        name: 'Omkar Deokar',
        'profile.name': 'System Administrator',
        profileid: '00e7F000001iDChQAM'
    },
    {
        id: '0057F000004e3ymQAA',
        name: 'Omkar Deokar',
        'profile.name': 'System Administrator',
        profileid: '00e7F000001iDChQAM'
    }
];
let response1 = [
    {
        id: '0052w000005E5SJAA0',
        name: 'Omkar Deokar',
        'profile.name': 'System Administrator',
        profileid: '00e2w000002JFBGAA4'
    }
];
let key = ['name', 'profile.name'];

const compareResponses = (res0, res1, key) => {
    let map0 = res0.reduce((map, obj) => {
        map[obj.query + obj.orgName] = obj;
        return map;
    }, {});
};

compareResponses(response0, response1, key);
