import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ReastaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Custome hooks - Restaurant data fatching
  const menuItems = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (menuItems === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuItems?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => {
        return (
          cat?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="w-6/12 m-auto my-5">
      <div className="my-2 font-bold text-lg">{name}</div>
      <p className="text-gray-500">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((cetegory, index) => {
        return (
          <ReastaurantCategory
            key={cetegory.card.card.title}
            data={cetegory?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
