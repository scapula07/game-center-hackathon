
 

import React from 'react'
import "./betmodal.css"


export default function BetModal({children ,cname,trigger,onClose}) {
  return (
    <div>
          { trigger?
            <div className="overlay-style">
                <div className={`bet-modal-upload ${cname}`}>
                   {children}
                </div> 
                
            </div>
         : <div></div>
            
            }

    </div>
  )
}