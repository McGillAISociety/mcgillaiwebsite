module.exports = {
    async redirects() {
        return [
            {
                source: '/mtlai',
                destination: '/resources',
                permanent: true,
            },
            {
                source: '/ourteam',
                // TODO: fix this ugly hardcoded route; Next is being finnicky when trying to import the execs object here
                destination: '/team/2021-2022',
                permanent: false,
            },
        ];
    },
};
