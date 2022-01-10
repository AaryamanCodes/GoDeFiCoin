const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec  = new EC('secp256k1');

const myKey = ec.keyFromPrivate('d9709316b31e78d9dbc24032b580a728bfa2f7d8c8ed049b226286d9f58de2e2');
const myWalletAddress = myKey.getPublic('hex');

console.log(myWalletAddress);
let GoDeFiCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
GoDeFiCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
GoDeFiCoin.minePendingTransactions(myWalletAddress);


console.log('\nBalance of minerAddress is', GoDeFiCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', GoDeFiCoin.isChainValid());
