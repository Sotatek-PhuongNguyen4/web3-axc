// In Node.js use: const Web3 = require('web3');
const Web3 = require("web3");

require('dotenv').config()

const web3 = new Web3(process.env.RPC_URL);
const fromPrivateKey = process.env.PRIVATE_KEY

const estimateGas = async tx => {
  return web3.eth.estimateGas(tx)
}

const runTest = async () => {
  // check balance
  const balance = await web3.eth.getBalance(
    "0x9b500a4b354914d420c3d1497aee4ba9d45b7df0"
  );
  console.log(balance);

  // send transaction
  await web3.eth.accounts.wallet.add(fromPrivateKey);

  const fromAddress = "0x9b500a4b354914d420c3d1497aee4ba9d45b7df0"
  const toAddress = "0xDBA77eb478285ae2518056F785eF6190a2B3185C"
  const valueTransferred = "0x56BC75E2D63100000"

  const gas = await estimateGas({
    from: fromAddress,
    to: toAddress,
    value: valueTransferred,
  })

  txResult = await web3.eth.sendTransaction({
    from: fromAddress,
    to: toAddress,
    value: valueTransferred,
    gas: gas,
  });

  console.log(txResult)

};

runTest();
