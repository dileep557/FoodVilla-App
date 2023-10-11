import { Link } from "react-router-dom";

const Title = ()=>(

    <a href="/">    
     <img  className="logo" alt="Food villa" src="https://th.bing.com/th/id/OIP.TIX4gD8UPaw4UwNhjTX5pgHaHa?pid=ImgDet&rs=1"></img>
     
     </a>
 
     );
  
       
 // <- Create Header Component ->  
 const color1= {backgroundColor:"gray"} ; 
 const Header = ()=>{
     return(
         <div style={color1}  className="header">
             <Title />
             <div className="nav-items">
                 <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/about">about</Link></li>
                     <li><Link to="/contact">contact</Link></li>
                     <li><Link to="/cart">cart</Link></li>
                     <li><Link to="/instamart">instamart</Link></li>
                     
                     
                 </ul>
             </div>
         </div>
     );
 
 };
// <- Header Component default exprort -> //
 export  default Header;