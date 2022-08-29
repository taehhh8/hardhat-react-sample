require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const OPTIMISM_GOERLI_PRIVATE_KEY =
  "56da9b1c3f87870b3b44cbfb357304c8ef736850c24c5cb6829ff7c58abf126a";
const optimismGoerliUrl = process.env.ALCHEMY_API_KEY
  ? `https://opt-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
  : process.env.OPTIMISM_GOERLI_URL;

module.exports = {
  solidity: "0.8.9",
  networks: {
    "optimism-goerli": {
      url: optimismGoerliUrl,
      accounts: [OPTIMISM_GOERLI_PRIVATE_KEY],
    },
  },
};
