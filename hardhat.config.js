/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');

const INFURA_URL = '';
const PRIVATE_KEY = '';

module.exports = {
  solidity: "0.8.24",
  /* networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  } */
};
