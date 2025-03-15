import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="border-b-1 py-5 flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <span className="font-bold">{item.card.info.name}</span>
            <span className=""> - ₹{item.card.info.price / 100}</span>

            <p>{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <img
              className="h-[144] w-[156] rounded-lg object-cover border-none gap-x-2"
              alt=""
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
