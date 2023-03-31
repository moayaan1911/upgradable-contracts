// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract Box {
    uint public value;

    function initialize(uint _value) external {
        value = _value;
    }
}
