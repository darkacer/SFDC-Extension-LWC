let states = {
    sharedValue: 0
};

const setValue = (key, value) => {
    console.log('inside set');
    states[key] = value;
};

const getValue = (key) => {
    console.log('inside get');
    return states[key];
};

export { setValue, getValue };
