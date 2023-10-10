import { FETCH_MENU_URL } from "../constant";
import { useState, useEffect } from "react";

const useRestraunt= (resId)=>{
    const [Restaurant, setRestaurant]= useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data= await fetch(FETCH_MENU_URL+resId);
        const json= await data.json();
        console.log(json.data);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        console.log(json.data.cards[0].card.card.info);
    } 
    return Restaurant

}
export default useRestraunt;