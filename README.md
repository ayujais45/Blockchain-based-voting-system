<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blockchain-Based Voting System</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; padding: 20px; }
        h1, h2, h3 { color: #333; }
        code { background: #f4f4f4; padding: 5px; border-radius: 5px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>Blockchain-Based Voting System</h1>
    <p>This project implements a decentralized voting system using the Ethereum blockchain. It ensures secure, transparent, and tamper-proof elections using smart contracts.</p>
    
    <h2>Features</h2>
    <ul>
        <li>Secure voter registration and authentication</li>
        <li>Transparent voting process with immutable records</li>
        <li>Real-time vote counting</li>
        <li>Web-based user interface for ease of access</li>
    </ul>
    
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Ethereum Blockchain:</strong> Smart contract execution</li>
        <li><strong>Solidity:</strong> Smart contract programming language</li>
        <li><strong>Web3.js:</strong> Interaction between front-end and blockchain</li>
        <li><strong>HTML, CSS, JavaScript:</strong> Front-end development</li>
        <li><strong>MetaMask:</strong> Ethereum wallet for transactions</li>
    </ul>
    
    <h2>Setup and Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js and npm installed</li>
        <li>MetaMask browser extension</li>
        <li>Ganache (for local Ethereum blockchain testing)</li>
    </ul>
    
    <h3>Steps</h3>
    <pre><code>git clone https://github.com/your-repo/blockchain-voting.git
cd blockchain-voting
npm install</code></pre>
    
    <h3>Compile and Deploy Smart Contract</h3>
    <pre><code>truffle compile
truffle migrate --network development</code></pre>
    
    <h3>Start Local Blockchain</h3>
    <pre><code>ganache-cli</code></pre>
    
    <h3>Run Front-End</h3>
    <pre><code>npm start</code></pre>
    
    <h2>Smart Contract Deployment (Ethereum Testnet)</h2>
    <p>Replace <code>contractAddress</code> in <code>app.js</code> with the deployed contract address.</p>
    <p>Use Remix IDE or Truffle to deploy the contract to the Ethereum testnet.</p>
    <p>Fund your MetaMask wallet with test ETH from a faucet.</p>
    
    <h2>Usage</h2>
    <p>Open the web interface, select a candidate, and cast your vote. The election results update in real time.</p>
    
    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
</body>
</html>
