import { IMG_URL } from "../utils/commonLinks";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-6 m-6   border-b-2 border-gray-400 text-left"
        >
          <div className="flex justify-between">
            <div className="py-2">
              <span> {item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <br />
              <br />
              <p>{item.card.info.description}</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <img
                src={IMG_URL + item.card.info.imageId}
                className="w-40 border-r-2"
                alt="img"
              />
              <button className="bg-green-500 hover:bg-green-400 text-white font-bold px-4  border-b-4 border-green-700 hover:border-green-500 rounded mt-1">
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
