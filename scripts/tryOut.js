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

let responses = [
    {
        totalSize: 6,
        done: true,
        records: [
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0052w000005AVZcAAO'
                },
                Id: '0052w000005AVZcAAO',
                Name: 'Automated Process',
                Profile: null,
                Username: 'autoproc@00d2w000008u2zjeac',
                FirstName: 'Automated'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0052w000005AVZbAAO'
                },
                Id: '0052w000005AVZbAAO',
                Name: 'Integration User',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e2w000002JFBHAA4'
                    },
                    Name: 'Analytics Cloud Integration User'
                },
                Username: 'integration@00d2w000008u2zjeac.com',
                FirstName: 'Integration'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0052w000005AVZiAAO'
                },
                Id: '0052w000005AVZiAAO',
                Name: 'Security User',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e2w000002JFBMAA4'
                    },
                    Name: 'Analytics Cloud Security User'
                },
                Username: 'insightssecurity@00d2w000008u2zjeac.com',
                FirstName: 'Security'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0052w000005E5SJAA0'
                },
                Id: '0052w000005E5SJAA0',
                Name: 'Omkar Deokar',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e2w000002JFBGAA4'
                    },
                    Name: 'System Administrator'
                },
                Username: 'omkarde@resilient-goat-4hopaw.com',
                FirstName: 'Omkar'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0052w000005E5SOAA0'
                },
                Id: '0052w000005E5SOAA0',
                Name: 'Platform Integration User',
                Profile: null,
                Username: 'cloud@00d2w000008u2zjeac',
                FirstName: null
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0052w000005AVZjAAO'
                },
                Id: '0052w000005AVZjAAO',
                Name: 'Chatter Expert',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e2w000002JFBNAA4'
                    },
                    Name: 'Chatter Free User'
                },
                Username:
                    'chatty.00d2w000008u2zjeac.jjz3dzq8ecpl@chatter.salesforce.com',
                FirstName: null
            }
        ]
    },
    {
        totalSize: 10,
        done: true,
        records: [
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000001ck5rQAA'
                },
                Id: '0057F000001ck5rQAA',
                Name: 'Automated Process',
                Profile: null,
                Username: 'autoproc@00d7f000001wtp7uaa',
                FirstName: 'Automated'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000000T4MIQA0'
                },
                Id: '0057F000000T4MIQA0',
                Name: 'Dev batman Site Guest User',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e7F000000IBWGQA4'
                    },
                    Name: 'Dev batman Profile'
                },
                Username:
                    'dev_batman@iambatman-developer-edition.ap5.force.com',
                FirstName: 'Dev batman'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000006hFcJQAU'
                },
                Id: '0057F000006hFcJQAU',
                Name: 'MyTest Site Guest User',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e7F0000033utEQAQ'
                    },
                    Name: 'MyTest Profile'
                },
                Username: 'mytest@batcommunity-developer-edition.ap5.force.com',
                FirstName: 'MyTest'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000002yOpXQAU'
                },
                Id: '0057F000002yOpXQAU',
                Name: 'omkar deokar',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e7F000001iDChQAM'
                    },
                    Name: 'System Administrator'
                },
                Username: 'omkardeokar22@gmail.com',
                FirstName: 'omkar'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000000bF6qQAE'
                },
                Id: '0057F000000bF6qQAE',
                Name: 'Omkar Deokar',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e7F000001iDChQAM'
                    },
                    Name: 'System Administrator'
                },
                Username: 'omkarde@cybage.com',
                FirstName: 'Omkar'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000001ck5qQAA'
                },
                Id: '0057F000001ck5qQAA',
                Name: 'Integration User',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e7F000001iDCjQAM'
                    },
                    Name: 'Analytics Cloud Integration User'
                },
                Username: 'integration@00d7f000001wtp7uaa.com',
                FirstName: 'Integration'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000001ck5uQAA'
                },
                Id: '0057F000001ck5uQAA',
                Name: 'Security User',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e7F000001iDCkQAM'
                    },
                    Name: 'Analytics Cloud Security User'
                },
                Username: 'insightssecurity@00d7f000001wtp7uaa.com',
                FirstName: 'Security'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000004e3ymQAA'
                },
                Id: '0057F000004e3ymQAA',
                Name: 'Omkar Deokar',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e7F000001iDChQAM'
                    },
                    Name: 'System Administrator'
                },
                Username: 'omkardeokar96@gmail.com',
                FirstName: 'Omkar'
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000007bu2GQAQ'
                },
                Id: '0057F000007bu2GQAQ',
                Name: 'Platform Integration User',
                Profile: null,
                Username: 'cloud@00d7f000001wtp7uaa',
                FirstName: null
            },
            {
                attributes: {
                    type: 'User',
                    url: '/services/data/v49.0/sobjects/User/0057F000001ck5tQAA'
                },
                Id: '0057F000001ck5tQAA',
                Name: 'Chatter Expert',
                Profile: {
                    attributes: {
                        type: 'Profile',
                        url:
                            '/services/data/v49.0/sobjects/Profile/00e7F000001iDCiQAM'
                    },
                    Name: 'Chatter Free User'
                },
                Username:
                    'chatty.00d7f000001wtp7uaa.fftislsd1byd@chatter.salesforce.com',
                FirstName: null
            }
        ]
    }
];
