let idToOrgInfo = new Map();

const getOrgUrls = () => {
    // eslint-disable-next-line no-undef
    const myBrowser = typeof chrome === 'undefined' ? browser : chrome;

    var count = 0;
    myBrowser.cookies.getAll({ name: 'sid' }, function (sidcook) {
        sidcook.forEach((elem) => {
            var domain = elem.domain;
            if (new RegExp('.*salesforce.com').test(domain)) {
                console.log(elem);

                idToOrgInfo.set(count, {
                    value: elem.value,
                    domain: elem.domain
                });
                count++;
            }
        });
    });

    return idToOrgInfo;
};

export { getOrgUrls };
