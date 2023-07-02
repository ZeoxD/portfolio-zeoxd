//pages & components
import Avatar from '@mui/material/Avatar';
import HomeComponent from "../components/HomeComponent"

//styles & images 
import "./Home.css"
import DivyanshuRoom from "../assets/divyanshu_bg.png"

function Home({prefersDarkMode}) {
    return(
        <div className={`home ${prefersDarkMode ? "": "radial-bg"}`} id="Home">
            <h1 className={prefersDarkMode ? 'text-shadow-dark' : 'text-shadow-light'}>HEY, I AM DIVYANSHU TRIPATHI</h1>
            <div className="home-container">
                <Avatar
                alt="Divyanshu"
                src={DivyanshuRoom}
                className="avatar"
                sx={{ 
                    width: 300, 
                    height: 'auto', 
                    borderRadius: 2
                }}
                />
                <HomeComponent />
            </div>
        </div>
    )
}

export default Home