import { useState } from "react";


const User = (props)=>{
    const [count,setcount]=useState(0);
    
return(
    <div className="User-card m-4 p-4 bg-slate-100 border border-solid border-black w-[200px] flex flex-wrap">
        <img className="photo" src="https://th.bing.com/th/id/OIP.V9BpW-wcVzSe9T_W7r17hwHaE9?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
        <h2>Count : {count}</h2>
        <button onClick={()=>{
           setcount(count+1);
        }}>Counter</button>
        <h2>Name: {props.name}</h2>
        <h3>Contact Details: 8523383345</h3>
        <h4>Location : Faridabad</h4>
    </div>
);
};

export default User;
