
import ResturantCard from "./ResturantCard";
import {useState ,useEffect} from "react";
import {Link} from "react-router"
import useOnlinestatus from "./useOnlinestatus";
import { Withavail } from "./ResturantCard";

   
const Body = ()=>{
  

    
    const [reslist,setreslist] =useState([]);
    const [searchText,setsearchText]=useState("");
       const[filteredres,setfilteredres]=useState([]);
       const Availlabel = Withavail(ResturantCard)
    
      useEffect(()=>{
        fetchData();
      },[]);

      const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.15190&lng=87.51620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();  
        setreslist(json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredres(json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants);


      }
    const Onlinestatus = useOnlinestatus();
    if (Onlinestatus==false)return(<h1>Looks Like You are Offline!!!! Please check internet</h1>)
    return(<div>
        <div className="filter flex">
           <div className="m-4 p-4" >
            <input className="border border-solid border-black " type="text" value={searchText} onChange={(e)=>{
               setsearchText(e.target.value);
            }} />
            <button className="px-5 m-5  bg-green-100 rounded-lg" onClick={()=>{
              console.log(searchText,reslist)
              const Searchres= filteredres.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase));

              setfilteredres(Searchres);
            }}>Search</button>

            </div>           
           <div className="  m-4 p-4 flex items-center ">
            <button className="filter-btn px-4 py-2 bg-green-100  rounded-2xl" id="info.id" onClick={ ()=> {const filterlist = reslist.filter((res)=>
                res.info.avgRating>4
                

            

        );
    
        setfilteredres(filterlist)      }}>Top Rated resturants</button>
        </div>
        </div>

{/* { <div className="Pocket-friendly "><button className="pocket" onClick={()=>{const filteredlist= reslist.filter((res)=>
            res.info.costForTwo<250); 
            setfilteredres(filteredlist)}}>Pocket Resturant</button></div> } */}

        <div className="resturant-container flex flex-wrap ">
          
         {/* <ResturantCard resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins" img="https://th.bing.com/th/id/OIP.vXaq7-yoF93r80urhEzgfgHaHa?rs=1&pid=ImgDetMain"/>
         <ResturantCard  resturantname="Haldiram" cuisine="North-Indian,South-Indian" rating="4.9" deliverytime="49 mins" img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard  resturantname="KFC" cuisine="Fried chiken" rating="4.8" deliverytime="450 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard  resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins" img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard  resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard  resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard  resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
         <ResturantCard resturantname="OM Sweets" cuisine="North-Indian,South-Indian" rating="4.8" deliverytime="40 mins"img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>*/ }
        {/* <ResturantCard ResturantCard resdata={reslist[0]} img="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-floral-treat-pineapple-cake-200-gm--274706-m.jpg"/>;
        <ResturantCard ResturantCard resdata={reslist[1]}/>
        <ResturantCard ResturantCard resdata={reslist[2]}/>
        <ResturantCard ResturantCard resdata={reslist[3]}/>
        <ResturantCard ResturantCard resdata={reslist[4]}/> */} 
          {/* {filteredres.map(resturant=>(<Link key={resturant.info.id} to={"/resturant"+resturant.info.id}>{resturant.info.availability ?(< Availlabel  resdata={resturant}/>):(<ResturantCard resdata={resturant}/>)}</Link>))} */}
        {filteredres.map(resturant => (<Link key={resturant.info.id}  to={"/resturant/"+resturant.info.id}><ResturantCard resdata={resturant} img="https://th.bing.com/th/id/OIP.x9OVhls3Hijhui-K3piVcgHaEr?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/></Link>) )};
       {filteredres.map(resturant => (<Link  key={resturant.info.id} to={"/resturant/"+resturant.info.id}><ResturantCard key ={resturant.id} resdata ={resturant}/></Link>))}
       {filteredres.map(resturant=>(<Link  key={resturant.info.id} to={"/resturant/"+resturant.info.id}><ResturantCard key={resturant.id} resdata={resturant}/></Link>))}

        </div>
        </div>
    );
  };
export default Body;