import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";


const About= ()=>{

    return (
        <div>
            <h1>About us Page !</h1>
            <h2>food villa About us page</h2>
            <Outlet />
            
            <ProfileClass name={"Dileep yadav"} />
            
            
            

        </div>
    )
}

export default About;