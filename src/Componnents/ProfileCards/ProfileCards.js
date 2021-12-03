import img from '../../Images/img.png'
import '../ProfileCards/profile.card.style.css'
function ProfileCards({name,status,img}){
    // const {name,status,img}=props
    return(
            <div className='profile'>
                <img height='100px' alt='avatar' src={img}/>
                <h1>{name}</h1>
                <p>{status}</p>
            </div>
    )

}

export default ProfileCards