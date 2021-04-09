var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "include sibling then poem flight share father rebel minute seven skull weekend";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:9545/", 0, 50);
      },
      network_id: '*',
      gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.5.16"
    }
  }
};