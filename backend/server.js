require('dotenv').config(); // ✅ Load environment variables
const express = require('express');
const { Web3 } = require('web3'); // ✅ Web3.js v4+ import
const cors = require('cors');
const path = require('path');

const { submitThreat, getThreats } = require('./services/blockchain'); // Blockchain service

const app = express(); // ✅ Initialize Express

// ✅ Secure CORS configuration (allow only frontend domain)
const corsOptions = {
  origin: ['http://localhost:3000', 'http://192.168.98.126:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));
app.use(express.json());

// ✅ Blockchain Connection
const GANACHE_URL = process.env.GANACHE_URL || 'http://localhost:7545';
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS?.trim(); // Trim whitespace

if (!CONTRACT_ADDRESS) {
  console.error('❌ CONTRACT_ADDRESS is not set in .env file!');
  process.exit(1);
}

const web3 = new Web3(new Web3.providers.HttpProvider(GANACHE_URL));
console.log(`✅ Connected to Ganache at ${GANACHE_URL}`);

// ✅ Load Contract ABI
const contractPath = path.join(__dirname, '../blockchain/build/contracts/ThreatIntelligence.json');
let contractJSON;
try {
  contractJSON = require(contractPath);
} catch (error) {
  console.error(`❌ Error loading contract ABI: ${error.message}`);
  process.exit(1);
}

const contract = new web3.eth.Contract(contractJSON.abi, CONTRACT_ADDRESS);
console.log(`📌 Contract Address: ${CONTRACT_ADDRESS}`);

// 🔥 API: Submit Threat
app.post('/threats', async (req, res) => {
  try {
    const { ip, hash, domain, proof } = req.body;
    if (!ip || !hash || !domain || !proof) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log(`📌 Submitting Threat: IP: ${ip}, Hash: ${hash}, Domain: ${domain}`);
    const accounts = await web3.eth.getAccounts();

    await contract.methods
      .submitThreat(ip, hash, domain, proof.a, proof.b, proof.c, proof.input)
      .send({ from: accounts[0] });

    console.log('✅ Threat successfully logged on blockchain');
    res.status(201).json({ success: true, message: 'Threat successfully logged' });
  } catch (error) {
    console.error('❌ Error submitting threat:', error.message);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// 🔥 API: Get All Threats
app.get('/threats', async (req, res) => {
  try {
    console.log('🔍 Fetching all logged threats...');
    const threats = await contract.methods.getAllThreats().call();
    console.log(`📌 Retrieved ${threats.length} threats`);
    res.json(threats);
  } catch (error) {
    console.error('❌ Error fetching threats:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 🚀 Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
