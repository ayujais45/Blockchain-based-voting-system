<div class="container">
    <h1></b>Blockchain-Based-Voting-System</h1>
  <b> The Decentralized Voting System is a blockchain-based application that ensures secure, transparent, and tamper-proof elections. By leveraging Ethereum's blockchain technology, the system eliminates the need for intermediaries and prevents election fraud while maintaining voter anonymity. This solution enables remote voting, making the electoral process more accessible and reliable.</b>

   <div class="container">
    <h2>Features</h2>
       
   <ul>
        <li>Secure voter registration and authentication</li>
        <li>Transparent voting process with immutable records</li>
        <li>Real-time vote counting</li>
        <li>Web-based user interface for ease of access</li>
    </ul>
    <div class="container">
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Ethereum Blockchain:</strong> Smart contract execution</li>
        <li><strong>Solidity:</strong> Smart contract programming language</li>
        <li><strong>Web3.js:</strong> Interaction between front-end and blockchain</li>
        <li><strong>HTML, CSS, JavaScript:</strong> Front-end development</li>
        <li><strong>MetaMask:</strong> Ethereum wallet for transactions</li>
    </ul>
    <h2>Requirements</h2>
<ul>
    <li><strong>Node.js</strong> (Version 18.14.0) – Backend server and package management</li>
    <li><strong>Python</strong> (Version 3.9) – Required for backend services using FastAPI</li>
    <li><strong>MetaMask</strong> – Browser extension for Ethereum transactions</li>
    <li><strong>FastAPI</strong> – Python-based web framework for API management</li>
    <li><strong>MySQL Database</strong> (Port 3306) – For storing user and voting data</li>
</ul>

<h3>Blockchain Dependencies</h3>
<ul>
    <li><strong>Ethereum Blockchain</strong> – Used for secure and transparent voting</li>
    <li><strong>Solidity</strong> – Smart contract programming language</li>
    <li><strong>Web3.js</strong> – JavaScript library for blockchain interaction</li>
    <li><strong>Truffle</strong> – Development framework for Ethereum smart contracts</li>
    <li><strong>Ganache</strong> – Local Ethereum blockchain for testing</li>
</ul>

<h3>System Requirements</h3>
<ul>
    <li><strong>OS:</strong> Windows, macOS, or Linux</li>
    <li><strong>RAM:</strong> Minimum 4GB (8GB recommended)</li>
    <li><strong>Storage:</strong> At least 10GB free space</li>
</ul>
<h2>Setup and Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js and npm installed</li>
        <li>MetaMask browser extension</li>
        <li>Ganache (for local Ethereum blockchain testing)</li>
    </ul>
            <li>Open a terminal.</li>
            <li>Clone the repository by using the command:
            <pre><code>git clone https://github.com/your-repo/blockchain-voting.git</code></pre>
            </li>
        <li>Download and install <a href="https://trufflesuite.com/ganache/">Ganache</a>.</li>
        <li>Create a workspace named <code>development</code> in Truffle projects and add <code>truffle-config.js</code>.</li>
        <li>Download <a href="https://metamask.io/">MetaMask</a> extension for the browser.</li>
        <li>Create a wallet and import accounts from Ganache.</li>
        <li>Add a network to MetaMask (Network Name - Localhost 7575, RPC URI - <a href="http://localhost:7545">http://localhost:7545</a>, Chain ID - 1337, Currency Symbol - ETH).</li>
        <li>Open MySQL and create a database named <code>voter_db</code> (Do not use XAMPP).</li>
        <li>In the database, create a table named <code>voters</code> using the following SQL command:
            <pre><code>CREATE TABLE voters (
    voter_id VARCHAR(36) PRIMARY KEY NOT NULL,
    role ENUM('admin', 'user') NOT NULL,
    password VARCHAR(255) NOT NULL
);</code></pre>
        </li>
        <li>Install Truffle globally:
            <pre><code>npm install -g truffle</code></pre>
        </li>
        <li>Go to the repository root and install node modules:
            <pre><code>npm install</code></pre>
        </li>
        <li>Install Python dependencies:
            <pre><code>pip install fastapi mysql-connector-python pydantic python-dotenv uvicorn</code></pre>
        </li>
    </ol>
    
