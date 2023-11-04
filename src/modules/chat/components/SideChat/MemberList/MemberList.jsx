import Heading from "./Heading/Heading"
import Members from "./Members/Members"
import Adam from '../../../assets/Adam.png'
import David from '../../../assets/David.png'
import Harper from '../../../assets/Harper.png'
import Lily from '../../../assets/Lily.png'
import Lucas from '../../../assets/Lucas.png'
import Marcus from'../../../assets/Markus.png'
import Mia from '../../../assets/Mia.png'
import Olivia from '../../../assets/Olivia.png'
import './MemberList.css'
<<<<<<< HEAD

const MemberList = () => {
=======
import {userOnlineInfo} from "../../../data/users"
import {userOfflineInfo} from "../../../data/users"

const MemberList = () => {

>>>>>>> master
  return (
    <div>
      <Heading
        TypeList="Currently Online"
        NumberUser="4" />
<<<<<<< HEAD
      <Members
        img={Adam}
        name="ADAM GREEN"
        descreption1="Exploring"
        descreption2="Library"
      />
      <Members
        img={David}
        name="David Singh 👹"
        descreption1="Exploring"
        descreption2="Library"
      />
      <Members
        img={Harper}
        name="Harper Singh"
        descreption3="Away"
        descreption4="for 20 minutes"

      />
      <Members
        img={Lily}
        name="Lily Patel 💅🏻"
        descreption5="Do not disturb"
      />
=======
        
      <Members userInfo={userOnlineInfo}/>
>>>>>>> master

      <Heading
        TypeList="Offline"
        NumberUser="12" />

<<<<<<< HEAD

<div className="sn-member-offline">
      <Members
        img={Lucas}
        name="Lucas Ortiz"
        descreption1="Last visit: 14 hr ago"
      />
      <Members
        img={Marcus}
        name="Marcus Chen"
        descreption1="Last visit: 14 hr ago"
      />
      <Members
        img={Mia}
        name="Mia Park"
        descreption1="Last visit: 17 hr ago"

      />
      <Members
        img={Olivia}
        name="Olivia Sharma"
        descreption1="Last visit: 3 days ago"
      />
      <Members
        img={Lily}
        name="Olivia Sharma"
        descreption1="Last visit: 3 days ago"
      />
      <Members
        img={Lily}
        name="Sophia Zhang"
        descreption1="Last visit: 3 days ago"
      />
      <Members
        img={Lily}
        name="Olivia Sharma"
        descreption1="Last visit: 3 days ago"
      />
       <Members
        img={Lucas}
        name="Lucas Ortiz"
        descreption1="Last visit: 14 hr ago"
      />
      <Members
        img={Marcus}
        name="Marcus Chen"
        descreption1="Last visit: 14 hr ago"
      />
      <Members
        img={Mia}
        name="Mia Park"
        descreption1="Last visit: 17 hr ago"

      />
      <Members
        img={Olivia}
        name="Olivia Sharma"
        descreption1="Last visit: 3 days ago"
      />
        <Members
        img={Marcus}
        name="Marcus Chen"
        descreption1="Last visit: 14 hr ago"
      />
     
=======
<div className="sn-member-offline">
      <Members userInfo={userOfflineInfo}/>
>>>>>>> master
      </div>
    </div>
  )
}

export default MemberList