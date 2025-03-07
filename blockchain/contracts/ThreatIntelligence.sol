// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Verifier.sol";

contract ThreatIntelligence is Verifier {
    struct Threat {
        string ip;
        string hash;
        string domain;
        uint256 timestamp;
        address submitter;
    }

    Threat[] public threats;

    event ThreatLogged(address indexed submitter, string ip, string hash, string domain);
    event Debug(string message); // Add Debug event explicitly

    constructor() {
        emit Debug("ThreatIntelligence contract deployed!");
    }

    function submitThreat(
        string memory _ip,
        string memory _hash,
        string memory _domain,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[1] memory input
    ) public {
        emit Debug("Starting proof verification...");
        
        require(verifyTx(a, b, c, input), "Invalid ZKP proof");
        emit Debug("Proof verified successfully...");
        
        threats.push(Threat(_ip, _hash, _domain, block.timestamp, msg.sender));
        emit ThreatLogged(msg.sender, _ip, _hash, _domain);
    }

    function getAllThreats() public view returns (Threat[] memory) {
        return threats;
    }
   

}
