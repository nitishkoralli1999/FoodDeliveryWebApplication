import { useEffect } from "react";
const RestaurantMenu =  () => {

 useEffect(() =>{
fetchData();
 });
 const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = data.json();
    console.log(json);
}
    return(
        <>
        <div className="menu">
            <h1>Name of the restaurant</h1>
            <h2>menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Coke</li>
            </ul>
        </div>
        </>
    )
}

export default RestaurantMenu;