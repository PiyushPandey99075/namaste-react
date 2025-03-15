import ItemList from "./ItemList";

const ReastaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handelClick = () => {
    setShowIndex();
  };
  return (
    <div className="">
      <div
        className="w-full bg-gray-200 flex justify-between p-3 my-3 shadow-lg rounded cursor-pointer"
        onClick={handelClick}
      >
        <span className="">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔻</span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default ReastaurantCategory;
