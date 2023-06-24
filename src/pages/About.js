//pages & components
import Avatar from '@mui/material/Avatar';

//styles & images 
import "./About.css"
import DivyanshuRoom from "../assets/divyanshu_room.jpg"

function About() {
    return(
        <div className="about" id="About">
            <Avatar
            alt="Divyanshu"
            src={DivyanshuRoom}
            sx={{ width: 240, height: 'auto', borderRadius: 5, boxShadow: 2 }}
            />
        </div>
    )
}

export default About