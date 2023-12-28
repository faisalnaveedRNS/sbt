require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

// Replace "INFURA PROJECT ID" with your INFURA project id
// Go to https://infura.io/, sign up, create a new App in its dashboard, and replace "KEY" with its key
const INFURA_PROJECT_ID = "INFURA INFURA PROJECT ID";

// Replace "PRIVATE KEY" with your account private key
// To export your private key from Metamask, open Metamask and go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const PRIVATE_KEY = "YOUR PRIVATE KEY HERE";

const WEMIX_SCAN_API_KEY = "YOUR WEMIX SCAN API KEY HERE"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
      viaIR: true,
    },

  },
  networks: {
    wemix_testnet: {
      url: "https://api.test.wemix.com",
      accounts: [`${PRIVATE_KEY}`],
      gasPrice: 101000000000
    },
    wemix_mainnet: {
      url: "https://api.wemix.com",
      accounts: [`${PRIVATE_KEY}`],
      gasPrice: 101000000000
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: `${WEMIX_SCAN_API_KEY}`,
    customChains: [
      {
        network: "WEMIX_Testnet",
        chainId: 1112,
        urls: {
          apiURL: "https://api-testnet.wemixscan.com/api",
          browserURL: "https://testnet.wemixscan.com"
        }
      }
    ]
  },
};
