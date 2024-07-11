/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');
//import { HardhatUserConfig } from "hardhat/config";
//import "@nomicfoundation/hardhat-toolbox";
//typescript
//import "@nomicfoundation/hardhat-web3-v4";  
//require("@nomicfoundation/hardhat-web3-v4");
require("@nomiclabs/hardhat-web3");

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
