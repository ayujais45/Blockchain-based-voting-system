const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
    deployer.deploy(Voting, ["Alice", "Bob", "Charlie"]); // Default candidates
};
