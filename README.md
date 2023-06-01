# Game-center

Game center is a social platform for game live betting .Tournaments and game events are hosted on the platform for gamers to competively participate.
Bettors can place bets on the outcome of each tournaments and earn payouts .



## Table of contents

1. Project description
1. Technologies
1. Dapp Architecture and features
1. Details on implementation of hackathon challanges 




### Project description

Game center is built to accomodate live betting on game tournaments hosted on the platform.Our smart contract implements back and lay betting concepts.

In live  betting, these types of bets are particularly useful because they will allow bettors to react and adjust their  bets based on the ongoing events in the game. The odds for back and lay bets can change in real-time as the game progresses, reflecting the current state of the match and the perceived likelihood of different outcomes.
Payouts are handed out based on outcome and odds to bettors .

### Technologies
1. Banana sdk and rainbowkit
2. Gateway Rpc endpoint use
3. Azuro contracts
4. Reactjs
5. Firebase
6. Livepeer 




### Dapp architecture /Features

Our dapp include the following features;

1. Live bettings
2. Live streaming 
3. Live chats 
4. Analytics 


### Details on implementation of hackathon challanges 

###   Integration of Banana wallet sdk

The integration was done using both the Rainbowkit and directly using the Banana wallet sdk.The wallet will be use to sign transactions on chain.

Source code:
 1. [Connect wallet file,Banana wallet sdk](https://github.com/scapula07/Game-center/blob/master/client/Azuro/src/components/connectWallet/banana.js)
 2. [App.jsx file ,Rainbowkit](https://github.com/scapula07/Game-center/blob/master/client/Azuro/src/App.jsx)


###   Use of Gateway Rpc endpoint.

[App.jsx file ,Rainbowkit](https://github.com/scapula07/Game-center/blob/master/client/Azuro/src/App.jsx)

The Rpc point are used dynamically with different chain.
````
     const { chains, provider } = configureChains( 
   
    [goerli,gnosisChiado],
 
    [
      jsonRpcProvider({
        rpc: (chain) => ({
          https: `https://rpc.${chain.id}.gateway.fm`
         
        }),
      }),
    ],
  );



````





