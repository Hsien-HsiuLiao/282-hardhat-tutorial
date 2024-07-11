//import { web3 } from "hardhat";
const fs = require('fs');

//const {web3} = require("hardhat");
//const {web3} = require("web3");

//const web3 = new Web3();
//https://github.com/NomicFoundation/hardhat/tree/main/packages/hardhat-web3
require("@nomiclabs/hardhat-web3");
//@type import artifacts from "../artifacts/contracts/Lock.sol/Lock.json";
const artifacts = require("../artifacts/contracts/DAO.sol/DAO.json");

async function main() {

  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = web3.utils.toWei("0.001", 'ether');

  const [deployer] = await web3.eth.getAccounts();
  //deployer.deploy(artifacts, 120, 120, 50);
//console.log(deployer);
  const daoContract = new web3.eth.Contract(artifacts.abi);
  //console.log(daoContract);
  const rawContract = await daoContract.deploy({
    data: artifacts.bytecode,
    //arguments: [unlockTime],
    arguments: [120, 120, 50],
    //https://ethereum.stackexchange.com/questions/50554/deploying-a-contract-with-web3-js
//https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html
  }).send({
    from: deployer, 
    gasPrice: '10000000000', gas: 2310334
   });



  /*  const lock = await rawContract.send({
    from: deployer,
    gasPrice: "10000000000",
    value: lockedAmount.toString()
  });  */

//console.log(rawContract);
console.log(`DAO address: ${rawContract.options.address}`);

  const data = {
    //https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html?highlight=address#id16
    address: rawContract.options.address,
    //https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html?highlight=address#options-jsoninterface
   abi: /* JSON.parse( */rawContract.options.jsonInterface/* .format('json') )*/
 ///abi: JSON.parse(rawContract)
  };

  fs.writeFileSync('frontend/src/DAOweb3.json', JSON.stringify(data)); 

  /*
  console.log(
    `Lock with ${web3.utils.toWei(
      lockedAmount,
      'ether'
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.options.address}`
  ); */
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
