import Heading from "./Heading/Heading"
import Members from "./Members/Members"
// import Adam from '../../../assets/Adam.png'
// import David from '../../../assets/David.png'
// import Harper from '../../../assets/Harper.png'
// import Lily from '../../../assets/Lily.png'
// import Lucas from '../../../assets/Lucas.png'
// import Marcus from'../../../assets/Markus.png'
// import Mia from '../../../assets/Mia.png'
// import Olivia from '../../../assets/Olivia.png'
import './MemberList.css'
import {userOnlineInfo} from "../../../data/users"
import {userOfflineInfo} from "../../../data/users"

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
    </div>
  )
}

export default MemberList