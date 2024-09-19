import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId,
        name,
        avgRating,
        locality,areaName
    }=resData?.info;
   return(
         <div className="res-card" >
            <img 
            alt="res-logo" 
            className="res-logo"
            src = {CDN_URL+cloudinaryImageId}
            
            />
            <h3> {resData.info.name}</h3>
            <h4>{resData.info.locality}</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>Ratings:{resData.info.avgRating}</h4>
         </div>
    )
};
export default RestaurantCard;