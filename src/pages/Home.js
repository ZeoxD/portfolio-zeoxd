//pages & components
import Avatar from '@mui/material/Avatar';
import HomeComponent from "../components/HomeComponent"

//styles & images 
import "./Home.css"
import DivyanshuRoom from "../assets/divyanshu_room.jpg"

function Home() {
    return(
        <div className="home" id="Home">
            <Avatar
            alt="Divyanshu"
            src={DivyanshuRoom}
            sx={{ width: 280, height: 'auto', borderRadius: 5, boxShadow: 2 }}
            />
            <HomeComponent />
        </div>
    )
}

export default Home