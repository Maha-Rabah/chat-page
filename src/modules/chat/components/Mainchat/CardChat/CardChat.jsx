import './CardChat.css'
import { useState } from 'react';

const CardChat = ({ChatInfo}) => {

  let red = '#131619';
  const [bgColor, setBgColor] = useState(red);
  const changeColor =()=>{
      let black = '#000000';
      setBgColor(black);
    }

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  };

return (
<div>
  {ChatInfo?.map((item , index)=> (
    <div key={index} className={(item.active)? "LI-Massage active":"LI-Massage"}
         onClick={() => {
          changeColor();
          handleClick();
        }} style={{background: bgColor}} 
    >
    <div> 
      <img className='LI-avatar' src={item.img} alt='not found'/>
    </div>
    <div className='LI-content'>
        <div className='LI-name'>   
           <div className='LI-LEEN' >
               <p className='LI-title'>{item.title} </p>
               <p className='LI-action'>{item.action}</p>
           </div>
         <div className='LI-icon'>{item.icon}</div>
        </div>
        <div> 
          <p className='LI-disc'>{item.disc}</p>
        </div>
     {isShown && (
     <div>
        <div className='LI-hidden'>
             <button>Reply</button>
             <p>🔥    💅🏻    🙄</p>
         </div>
      </div>
      )}
    </div> 
    </div>
    ))}
</div>
  )
}

export default CardChat