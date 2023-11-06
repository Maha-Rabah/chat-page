import FooterSidebarChat from "./FooterSidebarChat/FooterSidebarChat"
import MemberList from "./MemberList/MemberList"
 import ChatList from "./ChatList/ChatList"
import './SideChat.css'

const SideChat = () => {
  return (
    <div className="sn-side-chat">
      <MemberList/>
      {/* <ChatList/> */}
    </div>
  )
}

export default SideChat