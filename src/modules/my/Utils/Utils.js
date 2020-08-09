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

export { getOrgNames };
