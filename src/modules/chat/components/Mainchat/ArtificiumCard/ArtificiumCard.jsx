import './ArtificiumCard.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from './../../../assets/Artificium.png'
import img4 from './../../../assets/Drake1.png'
import img5 from './../../../assets/Drake2.png'
import img6 from './../../../assets/Drake3.png'
import { useState } from 'react';

const ArtificiumCard = () => {
 

  return (
    <div className='Card'>
    
       <div><img className='LI-cardavatar' src={img3}/></div>
      
       <div className='LI-cardcontent'>
       <div className='LI-cardname'>
          <div className='LI-LEEN'>
          <p className='LI-cardtitle'> Artificium </p> <p className='LI-cardaction'>    just now</p>
          </div>
        
        <div className='LI-cardicon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M11.6665 5.99996H11.9998C12.7362 5.99996 13.3332 6.59691 13.3332 7.33329V12C13.3332 12.7363 12.7362 13.3333 11.9998 13.3333H7.33317C6.59679 13.3333 5.99984 12.7363 5.99984 12V11.6666M3.99984 9.99996H8.6665C9.40288 9.99996 9.99984 9.40301 9.99984 8.66663V3.99996C9.99984 3.26358 9.40288 2.66663 8.6665 2.66663H3.99984C3.26346 2.66663 2.6665 3.26358 2.6665 3.99996V8.66663C2.6665 9.40301 3.26346 9.99996 3.99984 9.99996Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        </div>
        <div> <p className='LI-carddisc'>Of course, I'd be happy to help. How about a character named Captain Drake? He's a natural born leader with years of experience in space exploration. Here are a few concept arts that might help bring him to life.</p>
          </div>
          <div className='LI-container'>
          <div> <img src={img4}/></div>
          <div><img src={img5}/></div>
          <div>  <img src={img6}/></div>
        </div>
        <div className='LI-btn'>
            
      <button className='LI-btn1'>Regenerate response</button>
      <button className='LI-btn2'>Modify<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.6668 7.33337L8.42695 9.19994C8.17972 9.40596 7.8206 9.40596 7.57337 9.19994L5.3335 7.33337" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></button>
        </div>
       </div>
      
    
  

</div>
  )
}

export default ArtificiumCard