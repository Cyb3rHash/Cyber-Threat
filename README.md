
# 🔥 **Firewall: Blockchain-Powered Cyber Threat Intelligence Platform**



## 🚀 **About the Project**

**Firewall** is a decentralized cyber threat intelligence platform that securely shares real-time threat indicators across organizations. Leveraging **blockchain for data integrity**, **smart contracts for automation**, and **zero-knowledge proofs (ZKP) for secure data sharing**, this platform ensures privacy, transparency, and trust in threat intelligence sharing.

### **Key Features**
- 📜 **Immutable Threat Logging**: Store malicious IPs, file hashes, and domains on an Ethereum blockchain.
- 🔒 **Privacy-Preserving Sharing**: Use ZKP to verify threat intelligence without exposing sensitive data.
- ⚡ **Real-Time Monitoring**: React-based dashboard to visualize live threats.
- 🛡️ **Reputation System**: Reward contributors for verified threat submissions.

---

## 🛠️ **Tech Stack**

### **Blockchain**
- Ethereum (Ganache for local development)
- Solidity (Smart Contracts)
- Truffle (Deployment & Testing)

### **Backend**
- Node.js with Express.js
- Web3.js (Blockchain Integration)

### **Frontend**
- React.js
- Axios (API Integration)

### **Zero-Knowledge Proofs**
- ZoKrates (ZKP Generation & Verification)

---

## 📂 **Project Structure**

```plaintext
blockchain-threat-intel/
├── blockchain/
│   ├── contracts/              # Smart Contracts
│   │   ├── ThreatIntelligence.sol
│   │   └── Verifier.sol
│   ├── migrations/             # Deployment Scripts
│   │   └── 2_deploy_contracts.js
│   └── truffle-config.js       # Truffle Configuration
├── backend/
│   ├── src/
│   │   ├── services/           # Blockchain & ZKP Integration
│   │   │   ├── blockchain.js
│   │   │   └── zkp.js
│   │   └── server.js           # Backend Server
│   └── package.json            # Backend Dependencies
├── frontend/
│   ├── src/
│   │   ├── components/         # React Components
│   │   │   ├── Dashboard.jsx
│   │   │   └── ThreatForm.jsx
│   │   └── App.js              # Main React App
│   └── package.json            # Frontend Dependencies
└── zokrates/
    ├── threat_check.zok        # ZKP Program
    └── generate_proofs.sh      # Proof Generation Script
```

---

## 🌟 **Getting Started**

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Ganache CLI (`npm install -g ganache-cli`)
- Truffle (`npm install -g truffle`)
- ZoKrates (`curl -LSfs get.zokrates.co | sh`)

---

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/firewall/blockchain-threat-intel.git
    cd blockchain-threat-intel
    ```

2. Install dependencies:
    ```bash
    cd backend && npm install
    cd ../frontend && npm install
    ```

3. Configure environment variables:
    ```bash
    echo "CONTRACT_ADDRESS=0xYourContractAddress" > backend/.env
    echo "APIVOID_API_KEY=your_apivoid_key" >> backend/.env
    ```

---

### Running the Project

1. Start Ganache:
    ```bash
    ganache-cli -d --gasLimit 8000000
    ```

2. Deploy Smart Contracts:
    ```bash
    cd blockchain && truffle migrate --reset --network development
    ```

3. Start Backend Server:
    ```bash
    cd backend && node src/server.js
    ```

4. Start Frontend Application:
    ```bash
    cd frontend && npm start
    ```

5. Generate ZKP Proofs (Optional):
    ```bash
    cd zokrates && ./generate_proofs.sh
    ```

---

## 🎮 **Usage**

### Submitting Threats

1. Open the frontend at `http://localhost:3000`.
2. Fill out the form with malicious IP, file hash, and domain.
3. Submit the form to log the threat on the blockchain.

### Viewing Threats

1. Navigate to the "Dashboard" section in the frontend.
2. View all logged threats retrieved from the blockchain.

---



## 🛡️ **Team Firewall**

| Name          | Role                | GitHub Profile                                |
|---------------|---------------------|-----------------------------------------------|
| Harish        | Blockchain Developer| [@harish](https://github.com/Cyb3rHash)       |
| Akshat        | Backend Developer   | [@Akshat](https://github.com/AkshatTriCode)   |
| Reji vincent  | Frontend Developer  | [@Reji](https://github.com/member3)           |

---




## 🎉 Acknowledgments

Special thanks to:
- Ethereum Community for blockchain tools.
- ZoKrates for ZKP integration.
- APIVoid and VirusTotal APIs for threat intelligence analysis.

---
