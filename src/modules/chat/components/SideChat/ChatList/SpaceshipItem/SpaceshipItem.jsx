import './SpaceshipItem.css'
const SpaceshipItem = ({img,name}) => {
  return (
    <div className="sn-spaceship-item">
    
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="53" viewBox="0 0 25 53" fill="none">
<path d="M12 1V41H24" stroke="#363A3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>   
        <img  className='sn-spaceship-img'src={img} alt=""/>
        <p className="sn-name-space-item">{name} </p>


    </div>
  )
}

export default SpaceshipItem