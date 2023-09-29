import { useState } from "react";
import { restaurantList } from "./constant";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//******** Add filter function to filter restraunts ***************** */
function filterData(searchText, Restaurant){

 const data= Restaurant.filter((restaurant)=>
    restaurant.info.name.includes(searchText)
    
    
    )
    return data;
}

const Body= ()=>{

    // <- useState returns variable name and function to change the variable -> // 
    const [searchText, setsearchText]= useState();
    
    const [Restaurant, setRestaurant]= useState([]);
    //********* */ <- SearchText is state variable -> ***********************//
    //************<-  State keeps track of variable in react*****************//

    // <- useEffect first accept one callback function and depedency array  -> //

    useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   
   const restaurants1 = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   
  setRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
   
 }
// if (!Restaurant) return null;
console.log(Restaurant);
 
 

  
    return (Restaurant.length===0)? <Shimmer/>:  (
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
                return <RestrauntCard {...restaurant.info} key={restaurant?.info?.id} />
            })
         }
        
        </div>

        </>
        
        

    )
};

export default Body;

