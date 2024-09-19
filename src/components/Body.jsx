import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//state variables - super powerfull(it maintains the state )
//whenever a state varaible is updated it automatically re render the website
// use state gives u powerfull state varible

const Body = () => {
  // Local state variable
  const [listOfRestaurnts, setListOfRestaurants] = useState([]);
  const [filteredRestraunt,setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // conditional rendering --> when we want to render on basis of condition

  // Normal JS variable
  // let listOfRestaurnts = [];
  return listOfRestaurnts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restraunts..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button className="searchBtn" onClick={
            ()=>{
              //filter the restraunt cards and update in the ui
              //search text
              console.log(searchText)
             const filteredResraunt =  listOfRestaurnts.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestraunt(filteredResraunt);
           
            }
            }>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurnts.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestraunt.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        
      </div>
    </div>
  );
};
export default Body;
