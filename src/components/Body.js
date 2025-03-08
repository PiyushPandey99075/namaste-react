import ReastaurantCard from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_API } from "../utils/constants";

const Body = () => {
  let [listOfResturants, SetlistOfResturants] = useState([]);
  let [resfilteredList, SetResfilteredList] = useState([]);
  let [searchText, setSearchText] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    SetlistOfResturants(json?.data?.cards);
  };

  // Conditional Rendering!
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-[85rem] m-auto mt-5">
      <div className="m-3">
        <button
          className="Filter-btn bg-amber-200 rounded-sm p-2 decoration-black"
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
          className="search-text border-solid border-black border-1 m-1.5"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-amber-200 rounded-sm p-2 decoration-black"
          onClick={() => {
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
      <div className="res-container flex flex-wrap">
        {resfilteredList.length === 0
          ? listOfResturants.slice(3).map((Restaurant) => (
              <Link
                className=""
                key={Restaurant?.card?.card?.info?.id}
                to={/restaurant/ + Restaurant?.card?.card?.info?.id}
              >
                <ReastaurantCard resData={Restaurant} />
              </Link>
            ))
          : resfilteredList.map((Restaurant) => (
              <Link
                className=""
                key={Restaurant?.card?.card?.info?.id}
                to={/restaurant/ + Restaurant?.card?.card?.info?.id}
              >
                <ReastaurantCard resData={Restaurant} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
