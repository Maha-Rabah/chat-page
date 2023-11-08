import React from 'react'
import MainHeading from './MainHeading/MainHeading'
import CardChat from './CardChat/CardChat'
import ArtificiumCard from './ArtificiumCard/ArtificiumCard'
import ReplayCard from './ReplayCard/ReplayCard'
import './MainChat.css'
import img1 from './../../assets/Adam.png'
import img2 from './../../assets/Emily.png'

const MainChat = () => {
  return (
    <div className='ma-container-mainchat'>
      <MainHeading/>
      <div className='ma-chat-container'>
      <CardChat
        img={img1} 
        title="Adam Green "
        action="  5 min ago"
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M11.6665 6.00002H11.9998C12.7362 6.00002 13.3332 6.59697 13.3332 7.33335V12C13.3332 12.7364 12.7362 13.3334 11.9998 13.3334H7.33317C6.59679 13.3334 5.99984 12.7364 5.99984 12V11.6667M3.99984 10H8.6665C9.40288 10 9.99984 9.40307 9.99984 8.66669V4.00002C9.99984 3.26364 9.40288 2.66669 8.6665 2.66669H3.99984C3.26346 2.66669 2.6665 3.26364 2.6665 4.00002V8.66669C2.6665 9.40307 3.26346 10 3.99984 10Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>}
      disc="Hey guys, I was thinking about some character ideas for our show. What do you think we should focus on?"
       active={true}
        />
      <div className='ma-today'>Today</div>
      <CardChat
        img={img2} 
        title="Emily Liu"
        action="  5 sec ago"
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M11.6665 6.00002H11.9998C12.7362 6.00002 13.3332 6.59697 13.3332 7.33335V12C13.3332 12.7364 12.7362 13.3334 11.9998 13.3334H7.33317C6.59679 13.3334 5.99984 12.7364 5.99984 12V11.6667M3.99984 10H8.6665C9.40288 10 9.99984 9.40307 9.99984 8.66669V4.00002C9.99984 3.26364 9.40288 2.66669 8.6665 2.66669H3.99984C3.26346 2.66669 2.6665 3.26364 2.6665 4.00002V8.66669C2.6665 9.40307 3.26346 10 3.99984 10Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>}
        disc="Well, we definitely need a strong leader character who can command the crew and make tough decisions. @Artificium, can you help?"      
        active={true}
/>
<CardChat
        img={img2} 
        title="Emily Liu"
        action="  5 sec ago"
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M11.6665 6.00002H11.9998C12.7362 6.00002 13.3332 6.59697 13.3332 7.33335V12C13.3332 12.7364 12.7362 13.3334 11.9998 13.3334H7.33317C6.59679 13.3334 5.99984 12.7364 5.99984 12V11.6667M3.99984 10H8.6665C9.40288 10 9.99984 9.40307 9.99984 8.66669V4.00002C9.99984 3.26364 9.40288 2.66669 8.6665 2.66669H3.99984C3.26346 2.66669 2.6665 3.26364 2.6665 4.00002V8.66669C2.6665 9.40307 3.26346 10 3.99984 10Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>}
        disc="Well, we definitely need a strong leader character who can command the crew and make tough decisions. @Artificium, can you help?"      
        active={true}
/>
      <ArtificiumCard/>
      <ReplayCard/>
      {/* <Footer/> */}
      </div>
    </div>
  )
}

export default MainChat