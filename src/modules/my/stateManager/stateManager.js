let states = {
    sharedValue: 0,
    sobjectList: [],
    idToOrgObj: {},
    selectIndex: 0
};

const setValue = (key, value) => {
    states[key] = value;
};

const getValue = (key) => {
    return states[key];
};

export { setValue, getValue };
