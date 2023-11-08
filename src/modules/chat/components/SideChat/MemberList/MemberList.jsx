import Heading from "./Heading/Heading"
import Members from "./Members/Members"
import './MemberList.css'
import {userOnlineInfo} from "../../../data/users"
import {userOfflineInfo} from "../../../data/users"
import FooterSidebarChat from "../FooterSidebarChat/FooterSidebarChat"

const MemberList = () => {

  return (
    <div>
      <Heading
        TypeList="Currently Online"
        NumberUser="4" />
      <Members userInfo={userOnlineInfo}/>
      <Heading
        TypeList="Offline"
        NumberUser="12" />

<div className="sn-member-offline">
      <Members userInfo={userOfflineInfo}/>
      </div>
      <FooterSidebarChat/>
    </div>
  )
}

export default MemberList