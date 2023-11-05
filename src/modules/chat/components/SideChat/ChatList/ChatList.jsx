import Line from '../../../assets/Line.png'
 import Line1 from '../../../assets/Line (1).png'
import Adam from '../../../assets/Adam.png'
import David from '../../../assets/David.png'
import Harper from '../../../assets/Harper.png'
import Lily from '../../../assets/Lily.png'
import SpaceshipItem from './SpaceshipItem/SpaceshipItem'
import chevronright from '../../../assets/chevron-right.svg'
import chevrondown from '../../../assets/chevron-down.svg'
import padlouk from '../../../assets/padlock.svg'
import globe from '../../../assets/Globe-02.svg'
import glow from '../../../assets/Badge.png'
import '../ChatList/ChatList.css'

const ChatList = () => {
  return (
    <div className='sn-chatlist'>
      <div className='sn-heading-chat'>
        <p className='sn-chat-p'> <img className='sn-chevron' src={chevronright}/> Information</p>
      </div>
      <div className='sn-divider'></div>
        
      <div className='sn-heading-chat'>
        <p className='sn-chat-p'> <img className='sn-chevron' src={chevrondown}/> Public Channels</p>
      </div>
      <div>
      <div className='sn-itemlist-chat'>
        <p className='sn-chat-p'> <img className='sn-icon-chat' src={padlouk}/> Top Secret</p>
      </div>
      <div className='sn-itemlist-chat'>
        <p className='sn-chat-p'> <img className='sn-icon-chat' src={globe}/> Feedback</p>
      </div>
        
      <div className='sn-spaceship-list'>
        <div className='sn-itemlistspace-chat'>
        <img src={globe}/>
        <p>Spaceship Crew</p>
        <img className='sn-spaceship-glow' src={glow}/>
      </div>
        <SpaceshipItem
        line={Line}
        img={Adam}
        name="Adam Green"
        />
        <SpaceshipItem
        line={Line1}
        img={David}
        name="David Singh"
        />
        <SpaceshipItem
        line={Line1}
        img={Harper}
        name="Harper Singh"
        />
        <SpaceshipItem
        line={Line1}
        img={Lily}
        name="Lily Patel"
        />
        </div>
        <div className='sn-itemlist-chat'>
        <p className='sn-chat-p'> <img className='sn-icon-chat' src={globe}/> User interface</p>
      </div>
      <div className='sn-itemlist-chat'>
        <p className='sn-chat-p'> <img className='sn-icon-chat' src={globe}/> User experience</p>
      </div>
      </div>
      <div className='sn-divider'></div>
      <div className='sn-heading-chat'>
        <p className='sn-chat-p'> <img className='sn-chevron' src={chevronright}/> Information</p>
      </div>
      
    </div>
  )
}

export default ChatList