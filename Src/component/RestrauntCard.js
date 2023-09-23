// <- Named import IMG_CDN_URL FROM CONSTANT FILE -> //
import { IMG_CDN_URL } from "./constant";

// <- Restrauntcard Component -> //
const RestrauntCard = ({name, cuisines,cloudinaryImageId , lastMileTravelString})=>{
    return (
        
        <div   className="card">
            <img 
            src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(" ,")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
        
    );
}

export default RestrauntCard;