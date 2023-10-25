import { Link } from "react-router-dom";
import { LOGO_URL } from "../constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = ()=>(

    <a href="/">    
     <img  className="h-28 m-1 p-1" alt="Food villa" src={LOGO_URL}></img>
     
    </a>
 
    );
  
       
 // <- Create Header Component ->  
 //const color1= {backgroundColor:"gray"} ; 
 const Header = ()=>{
    const {user}= useContext(UserContext);

   // useSelector hook used to subscribe cartSlice that help to read the cart value //
    const cartItem= useSelector((store)=>store.cart.item);

  
     return(
         <div className="flex space justify-between bg-pink-200 border-double border-2 border-black">
             <Title />
             <div className="nav-items">
                 <ul className="flex py-10">
                     <li className="px-3"><Link to="/">Home</Link></li>
                     <li className="px-3"><Link to="/about">about</Link></li>
                     <li className="px-3"><Link to="/contact">contact</Link></li>
                     <li className="px-3"><Link to="/cart">cart -{cartItem.length}items</Link></li>
                     <li className="px-3"><Link to="/instamart">instamart</Link></li>
                     
                     
                  </ul>
                </div>
             <h1 className="font-bold p-10">{user.name}</h1>
             
           </div>
         
     );
 
 };
// <- Header Component default exprort -> //
 export  default Header;