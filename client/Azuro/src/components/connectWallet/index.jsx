import React,{useEffect, useState} from 'react'
import { AccountState } from '../../recoil/globalState'
import { useRecoilState } from 'recoil'
import Modal from '../Modal'
import "./connect.css"
import banana from "../../assets/banana.png"
import metamask from "../../assets/metamask.png"
import {AiOutlineClose} from "react-icons/ai"
import { useSigner, useProvider, useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { connectBananaWallet} from './banana'


export default function ConnectWallet() {
    const [trigger,setTrigger] =useState(false)
    const [wallet, setWallet] = useState('')
    const [bananaWalletName,setWalletName]=useState()
 
    const [account,setAccount]=useRecoilState(AccountState) 
    
    const { isConnected } = useAccount();
    const provider = useProvider();
    const {  signer } = useSigner({});
    
    useEffect(()=>{
      const getAddress=async()=>{
        console.log(signer,"signer")
        const account = await signer.getAddress();
        console.log(account,acct)
  
      }
      getAddress()

    },[isConnected ])
 
  return (
    
    <ConnectButton />


  
  )
}
