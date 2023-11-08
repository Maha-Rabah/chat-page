import FooterSidebarChat from "./FooterSidebarChat/FooterSidebarChat"
import MemberList from "./MemberList/MemberList"
 import ChatList from "./ChatList/ChatList"
import './SideChat.css'

const SideChat = () => {
  return (
    <div className="sn-side-container">
    <div className="sn-side-chat">
      <MemberList/>
      {/* <ChatList/> */}
    </div>
    </div>
  )
}

export default SideChat