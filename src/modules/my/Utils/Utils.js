/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
import { getValue, setValue } from 'my/stateManager';
const myBrowser = typeof chrome === 'undefined' ? browser : chrome;
const serviceData = '/services/data';
const version = '/v49.0/';

const getOrgNames = (callback) => {
    // uncomment me later
    if (myBrowser.cookies) {
        myBrowser.cookies.getAll(
            {
                name: 'sid'
            },
            callback
        );
    }
};

const fireRest2 = async (orgURL, purpose, token) => {
    let url = 'https://' + orgURL + serviceData + version + purpose;
    let response;
    let settings = {
        async: true,
        crossDomain: true,
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + token
        }
    };
    try {
        response = await fetch(url, settings);
    } catch (err) {
        console.log('erroris ', err);
    }
    return response ? response.json() : null;
    //console.log('respornc ', response)
};

const flattenObject = (ob) => {
    let newObject = {};
    for (let i in ob) {
        if (typeof ob[i] === 'object' && ob[i] !== null) {
            let retObj = flattenObject(ob[i]);
            for (let j in retObj) {
                newObject[i.toLowerCase() + '.' + j.toLowerCase()] = retObj[j];
            }
        } else {
            newObject[i.toLowerCase()] = ob[i];
        }
    }
    return newObject;
};

const getOrgUrl = (id) => {
    return id
        ? getValue('idToOrgObj')[id].domain
        : getValue('idToOrgObj')[getValue('selectIndex')].domain;
};
const getOrgToken = (id) => {
    return id
        ? getValue('idToOrgObj')[id].value
        : getValue('idToOrgObj')[getValue('selectIndex')].value;
};
const makeQueryAll = (orgURL, token, query) => {
    query = query.replace(/\s\s+/g, ' ');
    return fireRest2(orgURL, 'query/?q=' + query, token);
};

const makeQuery = (query) => {
    query = query.replace(/\s\s+/g, ' ');
    return fireRest2(getOrgUrl(), 'query/?q=' + query, getOrgToken());
};

const getSobjectList = () => {
    let index = getValue('selectIndex');
    let org = getValue('idToOrgObj')[index];
    fireRest2(org.domain, 'sobjects/', org.value).then((response) => {
        setValue('sobjectList', response.sobjects);
    });
};

const getSobjectFieldList = (sobjectName) => {
    let index = getValue('selectIndex');
    let org = getValue('idToOrgObj')[index];
    return fireRest2(
        org.domain,
        'sobjects/' + sobjectName + '/describe',
        org.value
    );
};

export {
    getOrgNames,
    fireRest2,
    flattenObject,
    makeQuery,
    makeQueryAll,
    getSobjectList,
    getSobjectFieldList
};
