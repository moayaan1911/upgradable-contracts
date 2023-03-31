const { ethers, upgrades } = require("hardhat");
async function main() {
  const proxy = "0xf8Cd0fEC652Af1081D7D9Dac29e2B9c7113eB311";
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Deploying Box...");
  await upgrades.upgradeProxy(proxy, BoxV2);
  console.log("Box upgraded");
}
main();
