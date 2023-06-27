//pages & components
import Avatar from '@mui/material/Avatar';
import HomeComponent from "../components/HomeComponent"

//styles & images 
import "./Home.css"
import DivyanshuRoom from "../assets/divyanshu_room.jpg"

function Home({prefersDarkMode}) {
    return(
        <div className="home" id="Home">
            <Avatar
            alt="Divyanshu"
            src={DivyanshuRoom}
            sx={{ 
                width: 300, 
                height: 300, 
                borderRadius: 100, 
                boxShadow: `${prefersDarkMode ? '1px 1px 2px 0px #444' : '1px 1px 2px 1px #999'}`, 
                border: `${prefersDarkMode ? '1px solid #333' : '1px solid #eee'}` 
            }}
            />
            <HomeComponent />
        </div>
    )
}

export default Home