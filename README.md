# 282-hardhat-tutorial

https://www.youtube.com/watch?v=9Qpi80dQsGU

need node v12 or above

npm install -D (development dependency)

npm init -y

npm install -D hardhat

npx hardhat      - to create a hardhat project

npm install -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

compile smart contract `npx hardhat compile`

testing - `npx hardhat test`

deploy to local blockchain - `npx hardhat run scripts/deploy.js`

deploy to rinkeby test blockchain - `npx hardhat run scripts/deploy.js --network rinkeby`

`npx hardhat node` - eq to ganache-cli

`npx hardhat run scripts/deploy.js --network localhost`

https://www.npmjs.com/package/hardhat-deploy?activeTab=readme

