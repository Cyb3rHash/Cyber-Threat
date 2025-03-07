require('dotenv').config(); // Load environment variables from .env
const { Web3 } = require('web3'); // ✅ Correct import for Web3.js v4+
const ThreatIntelligenceJSON = require('../../blockchain/build/contracts/ThreatIntelligence.json');

// ✅ Ensure Web3 connects to the correct blockchain network
const web3 = new Web3(process.env.GANACHE_URL || 'http://localhost:7545'); // ✅ Fixed for Web3.js v4+

const contractAddress = process.env.CONTRACT_ADDRESS || '0x50C1b78FEd48BfbfF46570d4383bdeb7Eff8a0E3'; // Replace with deployed contract address

console.log('📌 Contract Address:', contractAddress);

// ✅ Initialize contract instance
const contract = new web3.eth.Contract(ThreatIntelligenceJSON.abi, contractAddress);

// ✅ Method to submit a new threat
const submitThreat = async (threatData, proof) => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(`🚀 Submitting threat: IP: ${threatData.ip}, Hash: ${threatData.hash}, Domain: ${threatData.domain}`);

    await contract.methods.submitThreat(
      threatData.ip,
      threatData.hash,
      threatData.domain,
      proof
    ).send({ from: accounts[0] });

    console.log('✅ Threat submitted successfully!');
  } catch (error) {
    console.error('❌ Error submitting threat:', error);
  }
};

// ✅ Method to fetch all threats
const getThreats = async () => {
  try {
    console.log('🔍 Fetching threats from blockchain...');
    const threats = await contract.methods.getThreats().call();
    console.log('✅ Threats fetched successfully:', threats);
    return threats;
  } catch (error) {
    console.error('❌ Error fetching threats:', error);
  }
};

// Export functions for use in other files
module.exports = {
  submitThreat,
  getThreats
};
