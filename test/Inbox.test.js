const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// create web3 instance with ganache provider
const web3 = new Web3(ganache.provider());