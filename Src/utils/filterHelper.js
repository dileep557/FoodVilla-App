/******** Add filter function to filter restraunts ******************/
 export function filterData(searchText, Restaurant){

    const data= Restaurant.filter((restaurant)=>
       restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
       
       
       )
       return data;
   }