// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/EdpModulo4.sol";


contract DeployKipuBank is Script {
    function run() external {
    string memory pk = vm.envString("PRIVATE_KEY");
    uint256 privateKey = vm.parseUint(pk);

    vm.startBroadcast(privateKey);
    new KipuBank(100 ether);
    vm.stopBroadcast();
    }
}
