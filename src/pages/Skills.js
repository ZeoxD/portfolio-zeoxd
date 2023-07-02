//pages & components
import Avatar from '@mui/material/Avatar';

//styles & images 
import "./Skills.css"
import DivyanshuRoom from "../assets/divyanshu_tripathi.jpg"

function Skills({prefersDarkMode}) {
    return(
        <div className={`skills ${prefersDarkMode ? "": "radial-bg"}`} id="Skills">
            <Avatar
            alt="Divyanshu"
            src={DivyanshuRoom}
            sx={{ width: 240, height: 240, borderRadius: 20, boxShadow: 2 }}
            />
        </div>
    )
}

export default Skills