import ProfileCards from "../ProfileCards/ProfileCards";
import '../ProfileCardContainer/Profile.componnent.style.css'
import img from '../../Images/img.png'
import img2 from '../../Images/img_1.png'
import img3 from '../../Images/img_2.png'

function profileContainer({children}) {
    return (
        <div className='ProfileContainer'>
            {children}

            {/*<ProfileCards name='Sima' status='student' img={img}/>*/}
            {/*<ProfileCards name={'Zahra'} status={'student'} img={img2}/>*/}
            {/*<ProfileCards name={'Alis'} status={'teacher'} img={img3}/>*/}

        </div>
    )
}

export default profileContainer