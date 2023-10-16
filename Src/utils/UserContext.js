import { createContext } from "react";
// createContext make data available all across the Application 

const UserContext= createContext({ user:
    {
        name: "dummy  yadav",
        email: "yadavdileep557@gmail.com"
    

    }
});

export default UserContext;