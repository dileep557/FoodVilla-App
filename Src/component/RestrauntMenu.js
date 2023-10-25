import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestrauntMenu= ()=>{

   //*** <- useParams is hooks that is use to read the dynamic Url params -> ****//
    const params= useParams();
    const {id}= params;
   
//*****<- create own hooks useRestraunt inside (utils/useRestraunt) and call it here ->*****/    
    const Restaurant= useRestraunt(id);

    const dispatch= useDispatch();
    const handleitem= ( item)=>{
        dispatch(addItem(item));
    };



    return !Restaurant? <Shimmer/>: (
        <div className="Menu flex">
        <div className=" my-5  ">
         
         <img src={IMG_CDN_URL+Restaurant?.cloudinaryImageId} className="border-solid border-2 border-black "></img>
         <h1 className=" font-bold">{Restaurant.name}</h1>

         <h3>{Restaurant?.cuisines?.join(",")}</h3>
         <h4>{Restaurant?.menu}</h4>
         <h4>{Restaurant?.costForTwoMessage} </h4>
         <h4>{"City :"+Restaurant?.city}</h4>
         <h4>{"locality :"+Restaurant?.locality}</h4>
         <h4>{"TotalRating :"+Restaurant?.totalRatingsString}</h4>
         <h4>{"Restaurant id :"+Restaurant?.id}</h4>
        </div> 

    
    <ol className=" p-2 mx-5 ">
        <h1 className="font-bold">RestrauntMenu :</h1>
        <li>
            <h2>Appetizers</h2>
            <ul>
                <li>Garlic Parmesan Wings <button className="font-bold bg-green-700 border-solid border-2 border-black " onClick={()=>handleitem("Garlic Parmesan Wings")}>Add</button> </li>
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
)}

export default RestrauntMenu;