import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuItems = useRestaurantMenu(resId);

  if (menuItems === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuItems?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items) => {
          return (
            <li key={items?.card?.info?.id}>
              {items?.card?.info?.name} - Rs.
              {items?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
