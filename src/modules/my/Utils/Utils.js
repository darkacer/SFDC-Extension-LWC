/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
import { getValue } from 'my/stateManager';
const myBrowser = typeof chrome === 'undefined' ? browser : chrome;
const serviceData = '/services/data';
const version = '/v48.0/';

const getOrgNames = (callback) => {
    myBrowser.cookies.getAll(
        {
            name: 'sid'
        },
        callback
    );
};

const fireRest = (orgURL, purpose, token) => {
    let url = 'https://' + orgURL + serviceData + version + purpose;
    let settings = {
        async: true,
        crossDomain: true,
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + token
        }
    };
    return fetch(url, settings);
};

const fireRest2 = async (orgURL, purpose, token) => {
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

export {
    getOrgNames,
    fireRest,
    fireRest2,
    flattenObject,
    makeQuery,
    makeQueryAll
};
