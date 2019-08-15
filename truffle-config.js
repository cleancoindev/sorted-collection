module.exports = {
    networks: {
        development: {
            host: 'localhost',
            network_id: '*', // eslint-disable-line camelcase
            port: 8545,
        },
        coverage: {
            host: 'localhost',
            network_id: '*', // eslint-disable-line camelcase
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        reporter: 'eth-gas-reporter',
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: '0.5.10',    // Fetch exact version from solc-bin (default: truffle's version)
            docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {           // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 20000,
                },
                evmVersion: 'petersburg',
            },
        },
    },
};
