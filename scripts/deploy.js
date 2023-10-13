const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const ERC20 = await hre.ethers.getContractFactory("ERC20");
    const eRC20 = await ERC20.deploy(1000000);

    console.log("ERC20 deployed to:", await eRC20.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
