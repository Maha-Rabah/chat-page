import './CardChat.css'

const CardChat = ({img , title, action , icon ,disc}) => {
  return (
<div className='LI-Massage'>
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
     </div>
       
           
       
  
</div>
  )
}

export default CardChat