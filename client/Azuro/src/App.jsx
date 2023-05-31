import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Layout from './Layout'
import LiveStreaming from './pages/Livestream'
import Tournament from './pages/Tournament'
import Gameroom from './pages/Gameroom'
import { livepeerClient } from './livepeerConfigUtil'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react'
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { polygonMumbai, optimismGoerli, goerli, gnosis, gnosisChiado  } from "@wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { BananaWallet } from '@rize-labs/banana-rainbowkit-plugin'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
// https://rpc.chiado.gnosis.gateway.fm
function App() {
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
  console.log(chains,"chain")
  const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        BananaWallet({ chains, connect: { networkId: 80001 } }),
        metaMaskWallet({ chains, shimDisconnect: true }),
        rainbowWallet({ chains }),
        walletConnectWallet({ chains }),
        injectedWallet({ chains, shimDisconnect: true }),
      ],
    },
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <div className="App ">
        <LivepeerConfig client={livepeerClient}>
        <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
      
            <Routes>
                <Route exact path="/"  element={ <Layout ><Home   /></Layout>} />
                <Route exact path="/tournaments"  element={ <Layout >< Tournament  /></Layout>} />
                <Route exact path="/livestreaming"  element={ <Layout >< LiveStreaming  /></Layout>} />
                <Route exact path="/gameroom"  element={ <Layout >< Gameroom  /></Layout>} />
              
          </Routes>
          </RainbowKitProvider>
      </WagmiConfig>

        </LivepeerConfig>
        
     
    </div>
  )
}

export default App
