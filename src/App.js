import './App.css';
import ProfileContainer from '../src/Componnents/ProfileCardContainer/ProfileContainer'
import img from '../../first-app/src/Images/img.png'
import img2 from '../../first-app/src/Images/img_1.png'
import img3 from '../../first-app/src/Images/img_2.png'
import ProfileCards from "./Componnents/ProfileCards/ProfileCards";

const users = [
    {
        id: 1,
        name: 'Sima',
        status: 'Student',
        img: "img"
    },
    {
        id: 2,
        name: 'Zhra',
        status: 'Student',
        img: 'img2'
    },
    {
        id: 3,
        name: 'Alis',
        status: 'Teacher',
        img: 'img3'
    }
]
function App() {
  return (
      <div className='App'>
          <ProfileContainer>
              {users.map((user) => (<ProfileCards key={user.id} name={user.name} status={user.status} img={user.img}/>))
              }
          </ProfileContainer>
      </div>
  );
}

export default App;
