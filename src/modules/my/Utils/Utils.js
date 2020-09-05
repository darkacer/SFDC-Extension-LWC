/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
const myBrowser = typeof chrome === 'undefined' ? browser : chrome;

const getOrgNames = (callback) => {
    myBrowser.cookies.getAll(
        {
            name: 'sid'
        },
        callback
    );
};

const fireRest = (orgURL, purpose, token) => {
    const serviceData = '/services/data';
    const version = '/v48.0/';
    let url = 'https://' + orgURL + serviceData + version + purpose;
    let settings = {
        async: true,
        crossDomain: true,
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + token
        }
    };
    console.log(url);
    return fetch(url, settings);
};

const fireRest2 = async (orgURL, purpose, token) => {
    const serviceData = '/services/data';
    const version = '/v48.0/';
    let url = 'https://' + orgURL + serviceData + version + purpose;
    let settings = {
        async: true,
        crossDomain: true,
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + token
        }
    };
    let response = await fetch(url, settings);
    return response.json();
    //console.log('respornc ', response)
};

const flattenObject = (ob) => {
    let newObject = {};
    for (let i in ob) {
        if (typeof ob[i] === 'object' && ob[i] !== null) {
            let retObj = this.flattenObject(ob[i]);
            for (let j in retObj) {
                newObject[i.toLowerCase() + '.' + j.toLowerCase()] = retObj[j];
            }
        } else {
            newObject[i.toLowerCase()] = ob[i];
        }
    }
    return newObject;
};

export { getOrgNames, fireRest, fireRest2, flattenObject };
