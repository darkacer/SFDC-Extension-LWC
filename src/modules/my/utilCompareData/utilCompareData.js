/* eslint-disable no-prototype-builtins */
const removeKeys = (obj, keys) => {
    keys.forEach((el) => delete obj[el]);
    return obj;
};

const convertResponseToMap = (res, keys) => {
    let mapper = res.reduce((map, obj) => {
        let tempKey = keys.map((el) => obj[el]).join(',');
        map[tempKey] = removeKeys(obj, keys);
        return map;
    }, {});
    console.log(mapper);
    return mapper;
};

// appends given char to all keys of json
const renameObjKeys = (obj, appendChar) => {
    Object.keys(obj).forEach((el) => {
        obj[el + appendChar] = obj[el];
        delete obj[el];
    });
    return obj;
};

const compareData = (response0, response1, key) => {
    let keyList = key.split(',');
    let map1 = convertResponseToMap(response0, keyList);
    let map2 = convertResponseToMap(response1, keyList);
    let datatable0 = [];
    let datatable1 = [];
    let datatable2 = [];
    console.log(JSON.stringify(map1));
    console.log(JSON.stringify(map2));
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
    console.log(JSON.stringify(datatable0));
    console.log(JSON.stringify(datatable1));
    console.log(JSON.stringify(datatable2));
    let finalDatatable = datatable0.map((el, i) => {
        return {
            ...el,
            ...renameObjKeys(datatable1[i], '1'),
            ...renameObjKeys(datatable2[i], '2')
        };
    });

    console.log(JSON.stringify(finalDatatable));

    return finalDatatable;
};

export { compareData };
