import { useState } from "react";
import { restaurantList } from "./constant";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//******** Add filter function to filter restraunts ***************** */
function filterData(searchText, Restaurant){

 const data= Restaurant.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    
    
    )
    return data;
}

const Body= ()=>{

    // <- useState returns variable name and function to change the variable -> // 
    const [searchText, setsearchText]= useState('');
    
    const [AllRestaurant, setAllRestaurant]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);


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
   
   setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   console.log(restaurants1);
  
   
 }
//if (!AllRestaurant) return null;
//if(filteredRestaurant.length===0) return <h1>Restaurant Not Found !</h1>
 
 

  
    return (AllRestaurant.length===0)? <Shimmer/>:  (
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

                 const Data= filterData(searchText, AllRestaurant)
                 setFilteredRestaurant(Data);

               } }

             >Search</button>


        </div>
        
        <div  className="restraunt-List">
         {
            filteredRestaurant.map((restaurant)=>{

                return (
                  <Link  to={"/restraunt/"+restaurant?.info?.id} key={restaurant?.info?.id} >
                  <RestrauntCard {...restaurant.info}  />
                  </Link>
                )
                
            })
         }
        
        </div>

        </>
        
        

    )
};

export default Body;

