// import { useEffect } from "react"
// import { useState } from "react"
// const useResturantMenu =(resId)=>{
//     const {resInfo,setresInfo} = useState(null);

//     useEffect(()=>{
//      fetchData();
//     },[]);
//     const fetchData = async ()=>{
//         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.15190&lng=87.51620&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
//        const json = await data.json();
//        setresInfo(json.data);
//     }
//     return resInfo;
    
// }
// export default useResturantMenu;