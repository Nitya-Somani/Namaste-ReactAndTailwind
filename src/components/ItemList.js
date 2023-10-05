import { addItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/commonLinks";
import {useDispatch} from "react-redux";
const ItemList = ({ items }) => {
  console.log(items);

const dispatch = useDispatch();

 const  handleAddItem = (item)=>{  
  
  dispatch(addItem(item));
  
 }


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
              <button className="bg-green-500 hover:bg-green-400 text-white font-bold px-4  border-b-4 border-green-700 hover:border-green-500 rounded mt-1" 
              onClick={()=>handleAddItem(item)}
              /**
               *     onClick={handleAddItem}
               * 
              
              onClick={handleAddItem(item)}
               * onClick={handleAddItem}

               This code assigns the handleAddItem function as the click event handler. When the element with this onClick attribute is clicked, the handleAddItem function will be executed without passing any arguments.
                onClick={() => handleAddItem(item)}

               This code assigns an anonymous arrow function as the click event handler. When the element is clicked, the arrow function is executed, and it calls handleAddItem(item) with the item variable as an argument. This allows you to pass the item to the handleAddItem function.
                onClick={handleAddItem(item)}

                This code, if used directly, would call the handleAddItem function immediately when the component renders (not when clicked), and it would pass item as an argument. This is not what you typically want for a click event. If you want to pass an argument to the handleAddItem function when the click event occurs, you should use the second approach (onClick={() => handleAddItem(item)}) instead.
               */
              >
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
