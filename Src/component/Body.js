import { restaurantList } from "./constant";
import RestrauntCard from "./RestrauntCard";
const Body= ()=>{
    return(
        
        <div  className="restraunt-List">
         {
            restaurantList.map((restaurant)=>{
                return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
            })
         }
        
        </div>
        
        

    )
};

export default Body;