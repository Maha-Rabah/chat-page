<<<<<<< HEAD
import Line from '../../../assets/Line.svg'
import Line1 from '../../../assets/Line (1).svg'
=======
// import Line from '../../../assets/Line.svg'
// import Line1 from '../../../assets/Line (1).svg'
>>>>>>> master
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
<<<<<<< HEAD
        line={Line}
=======
       // line={Line}
>>>>>>> master
        img={Adam}
        name="Adam Green"
        />
        <SpaceshipItem
<<<<<<< HEAD
        line={Line1}
=======
       // line={Line1}
>>>>>>> master
        img={David}
        name="David Singh"
        />
        <SpaceshipItem
<<<<<<< HEAD
        line={Line1}
=======
       // line={Line1}
>>>>>>> master
        img={Harper}
        name="Harper Singh"
        />
        <SpaceshipItem
<<<<<<< HEAD
        line={Line1}
=======
      //  line={Line1}
>>>>>>> master
        img={Lily}
        name="Lily Patel"
        />
        </div>
    </div>
  )
}

export default ChatList