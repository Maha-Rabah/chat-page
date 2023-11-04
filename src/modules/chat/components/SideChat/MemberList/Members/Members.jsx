import './Members.css'
<<<<<<< HEAD
const Members = ({img,name,descreption1,descreption2,descreption3,descreption4,descreption5 }) => {
  return (
    <div className="sn-member">
       <img src={img} alt=""/>
       <div className="sn-text-member">
        <h1 className='sn-name-member'>{name}</h1>
        <p className='sn-descreption1'><span className='sn-descreption2'>{descreption2}</span>{descreption1}</p>
        <p className='sn-descreption3'><span className='sn-descreption4'>{descreption3}</span>{descreption4}</p>
        <p className='sn-descreption5'>{descreption5}</p>


        
       </div>

=======
const Members = ({userInfo}) => {
  return (
    <div className="">
      {userInfo.map ((item , index)=> (
        <div  key={index} className="sn-member">
            <img src={item.img} alt=""/>
            <div className="sn-text-member">
             <h1 className='sn-name-member'>{item.name}</h1>
             <p className='sn-descreption1'><span className='sn-descreption2'>{item.descreption2}</span>{item.descreption1}</p>
             <p className='sn-descreption3'><span className='sn-descreption4'>{item.descreption3}</span>{item.descreption4}</p>
             <p className='sn-descreption5'>{item.descreption5}</p> 
            </div>
          </div>
      ))}
>>>>>>> master
    </div>
  )
}

export default Members