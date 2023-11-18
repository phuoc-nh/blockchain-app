// https://eth-sepolia.g.alchemy.com/v2/1wNO9TPtyD_10BgeOvCH4Sf7KL5qF8i2

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/1wNO9TPtyD_10BgeOvCH4Sf7KL5qF8i2',
      accounts: ['f88b2b30205317122f322baa43a1083d40f2f5c08a6c23dfa8e09db504ddf123']
    }
  }
}