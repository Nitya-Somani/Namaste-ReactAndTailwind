
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowindex})=>{

  const handleClick =() =>{
    setShowindex();
  };
   

return(
    <div>
    <div className="w-6/12 mx-auto my-4 shadow-lg p-4 text-center  font-bold text-lg bg-slate-200">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <header>{data.title} ({data.itemCards.length})</header>
        <span>⬇️</span>
        
        </div>
        {showItems && <ItemList items ={ data.itemCards}/>}
    </div>
  

</div>
)
}


export default RestaurantCategory;