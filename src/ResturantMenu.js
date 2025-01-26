 import { useEffect,useState } from "react";
import { useParams } from "react-router";
// import useResturantMenu from "./useResturantMenu";
import Resturantcategory from "./Restcategory";


const ResturantMenu = ()=>{
     const[resInfo,setresInfo]=useState(null);
    const {resId} = useParams();
     useEffect(()=>{
         fetchMenu();
     })
     const fetchMenu = async ()=>{
         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.15190&lng=87.51620&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
         const json =  await data.json()
         console.log(json);


         setresInfo(json.data);
         
    }
    //  const  resInfo = useResturantMenu(resId);
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);
    return(
        <div className="text-center m-auto">
            { <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[2]?.card?.card?.info?.name}</h1> }
            <p className="font-bold m-2">{resInfo?.cards[2]?.card?.card?.info?.cuisines} </p> 
            <p className="m-2">{"Cost for two"+" "+resInfo?.cards[2]?.card?.card?.info?.costForTwo}</p>
            <h2>Menu </h2>
            {/* {
            categories.map((category) => (
                <Resturantcategory data={category?.card?.card}/> 
            ))
        } */}
        {
            categories.map((category) =>(
                <Resturantcategory data={category.card.card}/>
            ))
        }
             
            <ul>
                {/* {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>)}
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</li>
                {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>)}
                {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards.map((item=><li key ={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>))}
                
                <li>Bevrages</li> */}
            </ul>
        </div>
    );
};
export default ResturantMenu;