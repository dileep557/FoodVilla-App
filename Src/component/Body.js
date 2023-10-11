import { useState } from "react";
import { restaurantList } from "../constant";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterHelper";
import { GET_RESTRAUNTS_URL } from "../constant";
import useOnline from "../utils/useOnline";

const Body= ()=>{

    // <- useState returns variable name and function to change the variable -> // 
    const [searchText, setsearchText]= useState('');
    
    const [AllRestaurant, setAllRestaurant]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);


    //********* */ <- SearchText is state variable -> ***********************//
    //************<-  State keeps track of variable in react*****************//
    // <- useEffect is REact hooks that are imported in react ****************//
    // <- useEffect first accept one callback function and depedency array  -> //
    // <- useEffect call after the component render if dependency array is empty ->
    // <- then its call only one time after Component  initial render if dependency ->
    // <- array have variable then its call everytime when the variable change after rendering the commponent -> //

    useEffect(() => {
    getRestaurants();
    }, []);

  async function getRestaurants() {
    const data = await fetch(GET_RESTRAUNTS_URL);
    const json = await data.json();
   
   const restaurants1 = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   
   setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   console.log(restaurants1);
  
   
 }
if (!AllRestaurant) return null;
//if(filteredRestaurant.length===0) return <h1>Restaurant Not Found !</h1>

 const status= useOnline();
 if(!status) return (
  <>
 <h1> OOPs ,Offline! </h1>
 <h1> Check your internet connection ! </h1>

 </>)

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

