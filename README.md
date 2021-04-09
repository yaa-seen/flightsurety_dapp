# About : 
An Ethereum Dapp with multiple smart contracts which are autonomously triggered by external sources, and which handle payments based on flight delay scenarios.\
Project built using Truffle and solidity. 

# Used Libraries

| Library       | Version       |
| ------------- | ------------- |
| "@openzeppelin/contracts" | "2.5.1" |
|  "@truffle/hdwallet-provider" | "1.2.6" | 
| "bignumber.js" | "9.0.1" |
| "truffle-assertions" | "0.9.2" | 
| "truffle-hdwallet-provider" | "1.0.17" |

Solidity version : 0.5.16

## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle), dApp scaffolding (using HTML, CSS and JS) and server app scaffolding.

To install, download or clone the repo, then:

`npm install`
`truffle compile`

## Develop Client

To run truffle tests:

`truffle test ./test/flightSurety.js`
`truffle test ./test/oracles.js`

To use the dapp:

`truffle migrate`
`npm run dapp`

To view dapp:

`http://localhost:8000`

## Develop Server

`npm run server`
`truffle test ./test/oracles.js`

## Deploy

To build dapp for prod:
`npm run dapp:prod`

Deploy the contents of the ./dapp folder


