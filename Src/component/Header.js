const Title = ()=>(

    <a href="/">    
     <img  className="logo" alt="Food villa" src="https://th.bing.com/th/id/OIP.TIX4gD8UPaw4UwNhjTX5pgHaHa?pid=ImgDet&rs=1"></img>
     
     </a>
 
     );
  
       
 // <- Create Header Component ->    
 const Header = ()=>{
     return(
         <div className="header">
             <Title />
             <div className="nav-items">
                 <ul>
                     <li>Home</li>
                     <li>About</li>
                     <li>Contact</li>
                     <li>Cart</li>
                 </ul>
             </div>
         </div>
     );
 
 };
// <- Header Component default exprort -> //
 export  default Header;