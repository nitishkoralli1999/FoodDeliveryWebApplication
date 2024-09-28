import { useEffect, useState } from "react";

const RestaurantMenu = () => {
    const [resInfo , setResInfo] = useState(null)
    useEffect(() => {
     fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=432976&catalog_qa=undefined&submitAction=ENTER")
         const json = await data.json();
         console.log(json);
         setResInfo(json.data)
    }


return  (
<>
<div className="menu">
<h1>
{resInfo?.cards[2]?.card?.card?.info.name}
</h1>
<h2>Menu</h2>
<ul>
<li>{resInfo?.cards[2]?.card?.card?.info.city}</li>
<li>{resInfo?.cards[2]?.card?.card?.info.locality}</li>
<li>{resInfo?.cards[2]?.card?.card?.info.areaName}</li>
<li>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</li>
</ul>
</div>



</>

)
}
export default RestaurantMenu;
