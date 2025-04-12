// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/EdpModulo4.sol";


contract DeployKipuBank is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        uint256 initialCap = 100 ether;

        vm.startBroadcast(deployerPrivateKey);

        new KipuBank(initialCap);

        vm.stopBroadcast();
    }
}
