import './CardChat.css'
import { useState } from 'react';

const CardChat = ({img , title, action , icon ,disc}) => {

  let red = '	#C0C0C0';
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
<div className='LI-Massage' onClick={() => {
          changeColor();
          handleClick();
        }} style={{background: bgColor}} >
     <div> 
     <img className='LI-avatar' src={img}/>
     </div>
     <div className='LI-content'>
     <div className='LI-name'>   
         <div className='LI-LEEN' >
         <p className='LI-title'>{title} </p><p className='LI-action'>{action}</p>
         </div>
         <div className='LI-icon'>
          {icon}
         </div>
     </div>
     <div> <p className='LI-disc'>{disc}</p></div>
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
  )
}

export default CardChat