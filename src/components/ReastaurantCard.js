import { CDN_URL } from "../utils/constants";

const ReastaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.card?.card?.info;

  return (
    <div className="res-card w-[290px] m-[25px]" style={{}}>
      <img
        alt="res-logo"
        className="res-logo w-[280px] rounded-2xl my-1 h-[187] object-cover"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <p className="text-lg mt-1 font-semibold">{name}</p>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {avgRating} Star <span>{costForTwo}</span>
      </h4>
      {/* <h4>{costForTwo}</h4> */}
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default ReastaurantCard;

export const withPromotedLabel = (ReastaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-black text-white m-2 p-2 rounded-lg font-bold">
          Promoted
        </div>
        <ReastaurantCard {...props} />
      </div>
    );
  };
};
