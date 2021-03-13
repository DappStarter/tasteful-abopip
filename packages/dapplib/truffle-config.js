require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain clump hunt local foster gaze'; 
let testAccounts = [
"0x43ba266f62cc3be68c438360a9d364456b4d149cc5b2c44880c4dec6b6aae5ef",
"0x9716e7b3d34f20371d64fcbbf545f56f851c29c6be4cbee55e27308ef0a6497f",
"0x653d715ebe4a95d9f31c41fa247cf933f086428eb0de8d1af7a487ae0760af47",
"0x9caf4c01a7b3fa4383fef8703d99799133b28bc2f4bf7f01a0e682c8321922b6",
"0xdc681d0ce48755fb5397ce494d7702b80a62eb085010cf35b6a5fc9168a1d291",
"0x9f2672a87700df7ef9efe47c1c054e381a2cd39c6ed959b1d937256ddaf78c2c",
"0x10a60a889e3a8c2e419accea9a452fa90bd5f40e3b24e4d58600e59cad8f3102",
"0xc892a3981f8638d7d8fff02824d0995d6e796512210c1f84e15989b7439694a9",
"0xbb245d34937b3dcd35660ff2ab2ffe321e3c305f1c53330aa81feca9742c154e",
"0x722397e7ec87ee82e4867dab179db9c4fecc120aea3deb50ffa4b4fb20f49068"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
