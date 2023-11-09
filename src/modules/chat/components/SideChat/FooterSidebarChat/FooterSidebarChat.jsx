import { useState } from 'react'
import comment from '../../../assets/chat-bubble.svg'
import users from '../../../assets/users.svg'
import './FooterSidebarChat.css'
import ChatList from '../ChatList/ChatList'
const FooterSidebarChat = () => {

  return (
    <div>
      <div className="sn-footer-sidebar">

        <button className="sn-btn-chat" ><img src={comment} alt="" /> Chat</button>
        <button className="sn-btn-member" > Member <img src={users} alt="" /> </button>
      </div>
    </div>
  )
}

export default FooterSidebarChat