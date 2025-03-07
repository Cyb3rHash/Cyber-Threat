// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Verifier {
    function verifyTx(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[1] memory input
    ) public pure returns (bool) { // Use pure since it does not modify state
        // Ensure valid input values
        if (a.length != 2 || b.length != 2 || c.length != 2 || input.length != 1) {
            return false;
        }
        
        // Check for zero values
        if (a[0] == 0 || b[0][0] == 0 || c[0] == 0 || input[0] == 0) {
            return false;
        }

        return true;
    }
}
