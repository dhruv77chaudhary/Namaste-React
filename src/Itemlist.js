
const Itemlist=({items})=>{
    //console.log(items)

    return(
    
        <div>
         
        {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border bottom-2 ">
<div className="flex flex-wrap">
                <img  className ="w-1/4    "src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}/>
                <button className="p-2 bg-black text-white  shadow-lg absolute m-auto rounded-lg">Add+</button>
                </div>
                <div className="p-2 "> <span>{item.card.info.name} </span>

                    <span> - ₹{item.card.info.price/100}  </span>
                </div>
                <p>{item?.card?.info?.description}</p>
                 </div>

        ))}
        </div>
      
    );

}
export default Itemlist;