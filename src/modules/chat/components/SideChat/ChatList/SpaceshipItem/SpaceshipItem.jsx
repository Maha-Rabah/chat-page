import './SpaceshipItem.css'
const SpaceshipItem = ({line,img,name}) => {
  return (
    <div className="sn-spaceship-item">
        <img className='sn-spaceship-line' src={line} alt=""/>
        <img  className='sn-spaceship-img'src={img} alt=""/>
        <p className="sn-name-space-item">{name} </p>


    </div>
  )
}

export default SpaceshipItem