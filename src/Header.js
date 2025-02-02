import { useState , useContext } from "react";
import { Link } from "react-router";
import useOnlinestatus from "./useOnlinestatus";
import UserContext from "./UserContext";

const Header = () => {
    const [btnname,setbtnname]=useState("Login");
    const Onlinestatus = useOnlinestatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser)
    
    return(
    <div className="flex justify-between bg-gray-100  ">
        <div className="w-24 flex items-center ">
             <img  className="items-center  border border-black rounded-md w-20" src="https://img.freepik.com/premium-vector/cutlery-smartphone-digital-food-logo-design_92167-747.jpg"/>

        </div>
        <div className="flex items-centers">
            <ul className="flex p-4 m-10">
                <li className="px-4">Online Status:{Onlinestatus?"😁":"😪"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"> <Link to="/contact">Contact US</Link></li>
                <li>Cart </li>
               
                <button className="log px-4" onClick={()=>{
                 btnname=="Login" ? setbtnname("Logout"):setbtnname("Login");

                }}> {btnname}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
                
            </ul>
        </div>
    </div>);
};

export default Header;
