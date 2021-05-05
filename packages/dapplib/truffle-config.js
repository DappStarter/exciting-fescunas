require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain smile inflict brick fortune search'; 
let testAccounts = [
"0x03107045cc078d77f5f9760208c61ab213e6339fe20919b4f7d97dc111fde745",
"0xeb3e732595e03aa106845ee212cb6d3a897240df641856295337d90993da34a0",
"0xcd764c0fe3eb817c8697479f57638d790fa385e60a49d402c9f8399de9408744",
"0x5809af6378dfaa2d04cc6e30bc8a38dbbd20edbb27980a7c2ccbab84992a9871",
"0xfd7094c53fc6777118072bf76f01bfb25bbc2a5b425750b21fea6a5de6766ef6",
"0x1f80502b40c8378698f5ee8dcf2b36e81b820d366593a9b8a5866b42c510de5e",
"0xc547951a7ec42c89535516021943383d52abfe211474fd4b4c676fe6f5fb6954",
"0x8ceabc624ee13beee1b8fe5d6cde9bc2d6d8b4c241e6b5451a6e1fd9f947714c",
"0xbcae0a0cd8150e3b9e29cfea5ed102bae7ecaad8890000c7019382bf79a9471e",
"0x39de84501496e2e8400ccc70e43f2f0f1d8f2099bf09258f10bb789bf1d797ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
