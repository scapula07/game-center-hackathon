import React,{useEffect, useState,useCallback} from 'react'
import { AccountState } from '../../recoil/globalState'
import { useRecoilState } from 'recoil'

import detectEthereumProvider from "@metamask/detect-provider"
import { ethers } from 'ethers'


export default function ConnectAccount() {
    const [account,setAccount]=useRecoilState(AccountState)  
    const [ensName,setENSName] =useState( "")
    const [ensAvater,setENSAvater] =useState("" )
    const [chainId,setChainId]=useState("")

  const web3loader = useCallback(
      async() => {
  
       const webProvider = await detectEthereumProvider();
  
      // console.log(webProvider)
          if(webProvider){
            const chainid = await window.ethereum?.request({ method: 'eth_chainId' });
            setChainId(chainid)
            console.log(chainid)
  
      const accounts = await window.ethereum?.request({ method: 'eth_accounts' })
          handleAccountsChanged(accounts)
        }
    }
    , [])
    useEffect(()=>{
        window.addEventListener('load', web3loader)
        window.ethereum?.on('accountsChanged', handleAccountsChanged);
    
        return () => {
          web3loader()
        }
        },[web3loader])

    function handleAccountsChanged(accounts) {
      //window.location.reload();
      }
    
    
      const connectWallet=async()=>{
        console.log("connecting")
      try{
 
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          console.log(provider)

          await provider.send("eth_requestAccounts", []);
          
           const newsigner = provider.getSigner()
          
         
         const account= await newsigner .getAddress()
         console.log(account)

         if(chainId ==="0x13881"){
             setAccount( account)
         }else if(chainId ==="0x89"){
          setAccount( account)
         }
         else{

          const resolvedENSname= await provider?.lookupAddress(account);
          console.log(resolvedENSname)
          const resolvedENSAvater= await provider?.getAvatar(resolvedENSname ) 
          setENSName(resolvedENSname)
          setENSAvater(resolvedENSAvater)
           setAccount( account)
   
         }
       
        
         

         }catch(error){
           if(error.code === 4001) {
              // EIP-1193 userRejectedRequest error
              // If this happens, the user rejected the connection request.
             //  console.log('metamask did not connect');
            } else {
              console.error(error);
           }
       }
   }


  return (
    <>
    {account?.length===0&&
     <div className='px-4 text-sm font-semibold  text-xs py-3 ' 
       onClick={connectWallet}
       style={{background:"#324fe6"}}
      >
        Connect wallet
     </div>
      }

    {account?.length>1&&
   <>

  {ensName?.length>1?
 <div className=' px-4 rounded-lg text-sm font-semibold py-3 flex items-center space-x-2' 
 style={{background:"#324fe6"}}
     >
       <img src={ensAvater} className="rounded-full h-5 w-5"/>
    <span className='text-md font-semibold'> {ensName}</span>
  </div>
    :

    <div className='px-4 text-sm font-semibold  py-3 flex items-center space-x-2' 
    style={{background:"#324fe6"}}
   
   >
    
       <span className='text-md font-semibold'> {account?.slice(0,7)+"..."+account?.slice(-4)}</span>
     </div>
  }
  </>
}
   </>
    
 


  
  )
}
