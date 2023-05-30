
import { Banana, Chains } from '@rize-labs/banana-wallet-sdk'

const gatewayRpcEndpoint = 'https://rpc.chiado.gnosis.gateway.fm/'
export const bananaInstance = new Banana(Chains.gnosis,gatewayRpcEndpoint);
 console.log(bananaInstance,"banaa")
export const createWalletBanana=async(walletName)=>{
    
    try{
        

      
        const wallet = await bananaInstance?.createWallet(walletName)
        const address = await wallet.getAddress();
      
        return address
    }catch(e){
        console.log(e)
    }

}

export const connectBananaWallet=async(walletName)=>{
    try{
        console.log("connecting")
        const walletName = bananaInstance?.getWalletName();
        const wallet = await bananaInstance?.connectWallet(walletName)
        const address = await wallet?.getAddress();
        if (walletName) {
          
      
            const wallet = await bananaInstance?.connectWallet(walletName);
    
            const address = await wallet?.getAddress();
           return address 
          } else {
           const address= createWalletBanana(walletName)
           return address
          }

    }catch(e){
        console.log(e)
    }
 
    if (walletName) {



    }

}