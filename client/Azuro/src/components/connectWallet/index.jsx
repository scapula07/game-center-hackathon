import React,{useState} from 'react'
import { AccountState } from '../../recoil/globalState'
import { useRecoilState } from 'recoil'
import Modal from '../Modal'
import "./connect.css"
import banana from "../../assets/banana.png"
import metamask from "../../assets/metamask.png"
import {AiOutlineClose} from "react-icons/ai"


export default function ConnectWallet() {
    const [trigger,setTrigger] =useState(false)
    // const [Wallet, setWallet] = useState('')
    // const [privatek,setPk]=useRecoilState(PkState)
    const [account,setAccount]=useRecoilState(AccountState)   

    const connectWallet=()=>{

    }
  return (
    <>
    <div>
       {account?.length===0&&
            <button className='py-3 px-4 text-xs   text-white rounded-lg  '
                 style={{background:"#324fe6"}} 
                    onClick={()=>setTrigger(true)}
                >
                Connect Wallet
                </button>
         }
  
         {account?.length>1&&
            <Link to="/profile"
            state={{
            account
                }}
            >
            <button  className='py-3 px-4 text-xs   text-white rounded-lgl'
                
             >
              {/* <img src={Avater} alt="" /> */}
            <span>{ account.slice(0,9)+"..."}</span>
           </button>
       </Link>
       }

    </div>

    <Modal trigger={trigger} cname="h-80 w-2/5 shadow rounded-lg py-4 px-8 z-30 relative bg-color"  >

         <div className=' z-30 relative' >
               <main className='flex justify-end'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md text-white" /></button>
                </main>

                <main className='flex flex-col items-center space-y-2'>
                    <h5 className='text-2xl font-semibold text-white'>Connect Wallet</h5>
                    <p className='text-slate-700'>Link your wallet and account to continue</p>
                </main>

                <main className='flex flex-col space-y-4 pt-4'>
                   <div className='flex  space-x-2 items-center wallet-bg py-4 px-4 rounded-sm'
                       onClick={connectWallet}
                     >
                    <img src={banana} className="h-10 w-10" alt='' />
                    <main>
                        <h5 className='font-semibold text-sm text-slate-300'>Banana wallet</h5>
                        <p className='text-xs text-slate-700'>The popular crypto wallet is secure and flexible</p>
                    </main>
                   </div>

                   <div className='flex space-x-2 items-center wallet-bg py-4 px-4 rounded-sm '
                     onClick={()=>setWallet("otherWallets")}
                    >
                    <h5 className='bg-white'>
                     <img src={ metamask} alt='' className='h-8 w-8 rounded-full  '/>
                    </h5>
                    <main>
                      <h5 className='font-semibold text-sm text-slate-300'>Metamask</h5>
                      <p className='text-xs text-slate-700'>The popular crypto wallet is secure and flexible</p>
                     </main>
                   </div>
                </main>
          </div>

    </Modal>

    </>
  )
}
