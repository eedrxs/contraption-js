const { createClient, ClientContract } = require("./lib/contraption");
const { ACCOUNT_ID, PRIVATE_KEY } = require("./src/details");
const { POLLFACTORY_ID, POLLFACTORY_ABI } = require("./src/abi");

let client = createClient(ACCOUNT_ID, PRIVATE_KEY);
let pollFactory = new ClientContract(POLLFACTORY_ID, POLLFACTORY_ABI);

async function main() {
  console.log(`Calling getPollCount------------------------>`);

  let { 0: result } = await pollFactory.getPollCount.call()({
    client: client,
    maxQueryPay: 0.03,
    gas: 1000000,
  });

  console.log(`- Current poll count: ${result}`);
}

main();
