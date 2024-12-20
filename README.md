# 📚⛓️ SkillChain - Web3 NFT Verification Project

This project includes smart contracts for issuing NFTs and a frontend for verifying ownership and metadata.

## 💡 Concept

A **decentralized platform for verifying skills and certifications** on the blockchain. It aims to provide gig workers, freelancers, and employers with a trustless way to verify credentials, reducing fraud and increase credibility.

## 🧠 Core Idea

Users can mint **NFT-based certificates** representing verified skills and achievements. Each certificates is recorded on-chain, making it transparent and immutable. Employers can instantly verify a candidate's skills without relying on third parties.

## 📂 Directory Structure

- **`contract/`**: Solidity smart contracts and deployment scripts.
- **`frontend/`**: React/Next.js frontend for interacting with the smart contracts.

## 🚀 Getting Started

### 1. Frontend

1. **Install dependencies**:

```bash
cd frontend
npm install
```

## Key Features

1. Skill Certification NFT:

    - Users can claim verified NFTs for skills (e.g., "Full-Stack Development").
    - Certificates include metadata: skill type, issuing authority, date, and unique identifier.

2. Minting & Verification:

    - Smart contracts handle minting and verifying skill NFTs.
    - Employers can check certificate authenticity directly on the platform.

3. Frontend Portal (Angular/Next.js):

    - **Profile Page**: Showcases a user's certified skills and achievements.
    - **Skill Verification Page**: Allows employers to input NFT IDs and verify credentials.
    - **Minting Dashboard**: For users to request or mint new skill certifications.

4. Blockchain Integration:

    - Smart contracts on Ethereum or Polygon for minting NFTs.
    - **Gas-fee optimization** for cost-effective transactions.

5. DAO Governance (Future Scope):
    - A decentralized community to decide on new skills, certification standards, and platform improvements.

## Tech Stack

    - **Backend**: Solidity smart contracts
    - **Frontend**: Next.js
    - **Blockchain**: Ethereum (mainnet/testnet)
    - **Storage**: IPFS (for storing metadata like certificates)
