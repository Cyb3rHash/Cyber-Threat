module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Ensure this is the correct host
      port: 7545,        // Match your Ganache port
      network_id: "*",   // Accept any network ID
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",  // Make sure this matches your contract version
    },
  },
};
