import { groth16 } from 'snarkjs';

export const verifyZKProof = async (proof, publicSignals) => {
  const vKey = await fetch('/verification_key.json');
  return groth16.verify(await vKey.json(), publicSignals, proof);
};
