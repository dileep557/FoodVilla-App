import { useState } from "react";
import { restaurantList } from "./constant";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

//******** Add filter function to filter restraunts ***************** */
function filterData(searchText, Restaurant){

 const data=   Restaurant.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
    
    
    )
    return data;
}

const Body= ()=>{

    // <- useState returns variable name and function to change the variable -> // 
    const [searchText, setsearchText]= useState();
    
    const [Restaurant, setRestaurants]= useState(restaurantList);
    //********* */ <- SearchText is state variable -> ***********************//
    //************<-  State keeps trsck of variable in react*****************//

    //
    return(
        <>
        <div className="search-container">
            <input type="text"
              placeholder="Search"
              className="search-input"
              value={searchText}
              onChange={(e)=>{
                setsearchText(e.target.value)
              }}
              ></input>

              <button 
              
              className="search-btn"
              onClick={()=>{

                 const Data= filterData(searchText, Restaurant)
                 setRestaurants(Data);

               } }

             >Search</button>


        </div>
        
        <div  className="restraunt-List">
         {
            Restaurant.map((restaurant)=>{
                return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
            })
         }
        
        </div>

        </>
        
        

    )
};

export default Body;