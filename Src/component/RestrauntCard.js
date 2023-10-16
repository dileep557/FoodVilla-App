// <- Named import IMG_CDN_URL FROM CONSTANT FILE -> //
import { IMG_CDN_URL } from "../constant";

// <- Restrauntcard Component -> //
const RestrauntCard = ({name, cuisines, cloudinaryImageId , avgRatingString})=>{
    return (
        
        <div   className="card w-[200px] h-56 m-2 p-2 border-solid border-2 border-black overflow-hidden" >
            <img 
            src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h2 className="font-bold">{name}</h2>
            <h3>{cuisines?.join(" ,")}</h3>
            <h4>{avgRatingString}</h4>
            
            
        </div>
        
    );
}

export default RestrauntCard;