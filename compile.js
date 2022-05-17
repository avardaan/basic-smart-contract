const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');

// compile solidity code and export relevant bytecode
module.exports = solc.compile(source, 1).contracts[':Inbox'];