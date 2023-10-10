import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
const RestrauntMenu= ()=>{

   //*** <- useParams is hooks that is use to read the dynamic Url params -> ****//
    const params= useParams();
    const {id}= params;
    //const [Restaurant, setRestaurant]= useState(null);
    const Restaurant= useRestraunt(id);

    // useEffect(()=>{
    //     getRestaurantInfo();
    // }, []);

    // async function getRestaurantInfo(){
    //     const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4687823&lng=81.8585495&restaurantId="+id);
    //     const json= await data.json();
    //     console.log(json.data);
    //     setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    //     console.log(json.data.cards[0].card.card.info);
    // } 

    return !Restaurant? <Shimmer/>: (
        <div className="menu">
         <h1>{Restaurant.name}</h1>
         <img src={IMG_CDN_URL+Restaurant?.cloudinaryImageId}></img>

         <h3>{Restaurant.cuisines?.join(",")}</h3>
         <h4>{Restaurant.menu}</h4>
         <h4>{Restaurant.costForTwoMessage} </h4>
         <h4>{"City :"+Restaurant.city}</h4>
         <h4>{"locality :"+Restaurant.locality}</h4>
         <h4>{"TotalRating :"+Restaurant.totalRatingsString}</h4>
         <h4>{"Restaurant id :"+Restaurant.id}</h4>

         <div className="RestroMenu">
         <h1>Restaurant Menu</h1>
    <ol>
        <li>
            <h2>Appetizers</h2>
            <ul>
                <li>Garlic Parmesan Wings</li>
                <li>Spinach and Artichoke Dip</li>
                <li>Bruschetta</li>
                <li>Crispy Calamari</li>
            </ul>
        </li>
        <li>
            <h2>Soups and Salads</h2>
            <ul>
                <li>Caesar Salad</li>
                <li>Tomato Basil Soup</li>
                <li>Garden Salad</li>
                <li>Lobster Bisque</li>
            </ul>
        </li>
        <li>
            <h2>Burgers</h2>
            <ul>
                <li>Classic Cheeseburger</li>
                <li>BBQ Bacon Burger</li>
                <li>Veggie Burger</li>
                <li>Mushroom Swiss Burger</li>
            </ul>
        </li>
        <li>
            <h2>Pasta</h2>
            <ul>
                <li>Spaghetti Carbonara</li>
                <li>Fettuccine Alfredo</li>
                <li>Shrimp Scampi</li>
                <li>Penne alla Vodka</li>
            </ul>
        </li>
        <li>
            <h2>Main Courses</h2>
            <ul>
                <li>Grilled Salmon</li>
                <li>New York Strip Steak</li>
                <li>Chicken Marsala</li>
                <li>Vegetarian Stir-Fry</li>
            </ul>
        </li>
    </ol>
    </div>


</div>


    )



}
export default RestrauntMenu;