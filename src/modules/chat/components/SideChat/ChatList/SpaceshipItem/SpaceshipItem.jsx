import './SpaceshipItem.css'
const SpaceshipItem = ({img,name}) => {
  return (
    <div className="sn-spaceship-item">
      <div className='sn-spaceship-line1'></div>
      <div className='sn-spaceship-line2'></div>

         
        <img  className='sn-spaceship-img'src={img} alt=""/>
        <p className="sn-name-space-item">{name} </p>


    </div>
  )
}

export default SpaceshipItem