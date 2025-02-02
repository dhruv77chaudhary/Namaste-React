import React from "react";
import { useState } from "react";
import Itemlist from "./Itemlist";
    


const Resturantcategory=({data,showItem,setIndex})=>{
    //const[showItem,setshowItem]=useState(false);
    const handelClick=()=>{
        setIndex();
    }
return(
    <div >
        <div >
        <div className="text-center w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 cursor-pointer "> 
            <div className="  flex justify-between " onClick={handelClick}>
         
                <span className="font-bold" >{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                
               { showItem && <Itemlist  items={data.itemCards}/>}
            </div>
           
            
        </div> 
    </div>
)
}
export default Resturantcategory