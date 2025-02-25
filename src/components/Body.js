import ReastaurantCard from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfResturants, SetlistOfResturants] = useState([]);
  let [resfilteredList, SetResfilteredList] = useState([]);
  let [searchText, setSearchText] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8452145&lng=77.6601695&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
    SetlistOfResturants(json?.data?.cards);
  };

  // Conditional Rendering!
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="Search">
        <button
          className="Filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.card.card.info?.avgRating > 4
            );
            SetResfilteredList(filteredList);
            console.log(filteredList);
          }}
        >
          Top Restaurant
        </button>
        <input
          type="text"
          className="search-text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            // const list = listOfResturants.slice(3);
            // console.log(list?.card);
            console.log(listOfResturants.slice(3));
            const filList = listOfResturants.slice(3).filter((resto) => {
              return resto?.card?.card?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase());
            });
            SetResfilteredList(filList);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {resfilteredList.length === 0
          ? listOfResturants
              .slice(3)
              .map((Restaurant) => (
                <ReastaurantCard
                  key={Restaurant?.card?.card?.info?.id}
                  resData={Restaurant}
                />
              ))
          : resfilteredList.map((Restaurant) => (
              <ReastaurantCard
                key={Restaurant?.card?.card?.info?.id}
                resData={Restaurant}
              />
            ))}
      </div>
    </div>
  );
};

export default Body;
