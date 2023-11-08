import React from 'react'
import './ReplayCard.css'
import CardChat from '../CardChat/CardChat'
import { AdamGreenInfo, DavidInfo } from '../../../data/chats'

const ReplayCard = () => {
  return (
    <div className='ma-container-replay'>
      <div className='ma-replay'>
          <CardChat ChatInfo={DavidInfo}/>

          <div className='ma-line'>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="94" 
            viewBox="0 0 34 94" fill="none"><path d="M1 1V85C1 89.4183 4.58172 93 9 93H33" 
            stroke="#363A3D" stroke-width="1.5" stroke-linecap="round" 
            stroke-linejoin="round"/>
            </svg>
          </div>

          <div className='ma-replay-two'>
            <CardChat ChatInfo={AdamGreenInfo}/>
          </div>

      </div>
    </div>
  )
}

export default ReplayCard