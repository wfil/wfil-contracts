var WFIL = artifacts.require("WFIL");
const rinkeby = require('./rinkeby');

module.exports = function(deployer) {

	deployer.deploy(WFIL, rinkeby.wfil.minter);
};
