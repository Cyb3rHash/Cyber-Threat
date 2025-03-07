const Verifier = artifacts.require("Verifier");
const ThreatIntelligence = artifacts.require("ThreatIntelligence");

module.exports = async function (deployer) {
  try {
    // Deploy Verifier contract first
    await deployer.deploy(Verifier);
    const verifierInstance = await Verifier.deployed();
    console.log("Verifier deployed at:", verifierInstance.address);

    // Deploy ThreatIntelligence contract (WITHOUT PARAMETERS)
    await deployer.deploy(ThreatIntelligence);
    const threatIntelligenceInstance = await ThreatIntelligence.deployed();
    console.log("ThreatIntelligence deployed at:", threatIntelligenceInstance.address);
  } catch (error) {
    console.error("Deployment failed:", error);
  }
};
