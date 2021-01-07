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

const removeKeys = (obj, keys) => {
    keys.forEach((el) => delete obj[el]);
    return obj;
};

const convertResponseToMap = (res, keys) => {
    let map = res.reduce((map, obj) => {
        let tempKey = keys.map((el) => obj[el]).join(',');
        map[tempKey] = removeKeys(obj, keys);
        return map;
    }, {});
    console.log(map);
    return map;
};

let map1 = convertResponseToMap(response0, key);
let map2 = convertResponseToMap(response1, key);
let datatable0 = [];
let datatable1 = [];
let datatable2 = [];
Object.keys(map1).forEach((el) => {
    datatable0.push({ key: el });
    datatable1.push({ ...map1[el] });
    if (map2.hasOwnProperty(el)) {
        datatable2.push({ ...map2[el] });
        delete map2[el];
    } else {
        datatable2.push({});
    }
});

Object.keys(map2).forEach((el) => {
    datatable0.push({ key: el });
    datatable2.push({ ...map2[el] });
    if (map2.hasOwnProperty(el)) {
        datatable1.push({ ...map1[el] });
        delete map1[el];
    } else {
        datatable1.push({});
    }
});
console.log('$$$$$$$$$$$');
console.log(datatable0);
console.log(datatable1);
console.log(datatable2);
