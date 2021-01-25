/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
import { getValue, setValue } from 'my/stateManager';
import PubSub from 'pubsub-js';
const myBrowser = typeof chrome === 'undefined' ? browser : chrome;
const serviceData = '/services/data';
const version = '/v49.0/';

// removes attributes and gathers possoble columnnames
const removeAttributes = (element) => {
    //let colSet = new Set()
    let tempObj = {};
    for (const iterator in element) {
        if (!iterator.includes('attributes')) {
            tempObj[iterator] = element[iterator];
        }
    }
    return tempObj;
};

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
        if (!response.ok)
            // or check for response.status
            throw new Error(response.statusText);
    } catch (err) {
        PubSub.publish('customException', {
            message: 'Something went wrong while communicating with your org',
            type: 'error',
            details: err
        });
    }
    return response ? response.json() : null;
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
    query = query.replace(/%/g, '%25');
    query = query.replace(/ /g, '+');
    return fireRest2(orgURL, 'query/?q=' + query, token);
};

const makeQuery = (query) => {
    query = query.replace(/\s\s+/g, ' ');
    query = query.replace(/%/g, '%25');
    query = query.replace(/ /g, '+');
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

const getRecordDetail = (sobjectName, recordId) => {
    let index = getValue('selectIndex');
    let org = getValue('idToOrgObj')[index];
    return fireRest2(
        org.domain,
        'sobjects/' + sobjectName + '/' + recordId,
        org.value
    );
};
const convertToCSV = (objArray) => {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    if (!Array.isArray(array)) array = [array];

    let str = '';
    for (const key in array[0]) {
        if (str !== '') str += ',';
        str += key;
    }
    str += '<br>';
    for (let i = 0; i < array.length; i++) {
        let line = '';
        for (let index in array[i]) {
            if (line !== '') line += ',';

            const item = array[i][index] ? array[i][index] : '';

            line +=
                typeof item === 'object' && item !== null && item !== undefined
                    ? convertToCSV(item)
                    : item;
        }
        str += line + '\r\n';
    }
    return str.replace(/(\r\n|\n|\r)/gm, '<br>'); //removing line breaks: https://stackoverflow.com/a/10805198/4508758
};

export {
    getOrgNames,
    fireRest2,
    flattenObject,
    makeQuery,
    makeQueryAll,
    getSobjectList,
    getSobjectFieldList,
    convertToCSV,
    removeAttributes,
    getRecordDetail
};
