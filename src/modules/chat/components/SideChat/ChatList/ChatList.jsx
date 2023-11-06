// import Line from '../../../assets/Line.svg'
// import Line1 from '../../../assets/Line (1).svg'
import Adam from '../../../assets/Adam.png'
import David from '../../../assets/David.png'
import Harper from '../../../assets/Harper.png'
import Lily from '../../../assets/Lily.png'
import SpaceshipItem from './SpaceshipItem/SpaceshipItem'
import '../ChatList/ChatList.css'

const ChatList = () => {
  return (
    <div>
        
        <div className='sn-spaceship-list'>
        <SpaceshipItem
       // line={Line}
        img={Adam}
        name="Adam Green"
        />
        <SpaceshipItem
       // line={Line1}
        img={David}
        name="David Singh"
        />
        <SpaceshipItem
       // line={Line1}
        img={Harper}
        name="Harper Singh"
        />
        <SpaceshipItem
      //  line={Line1}
        img={Lily}
        name="Lily Patel"
        />
        </div>
    </div>
  )
}

export default ChatList