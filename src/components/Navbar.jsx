import React, { useState } from "react";
import { Link ,useLocation,useNavigate} from "react-router-dom";
import { items } from "./Data";
import { FaShoppingCart } from "react-icons/fa";
function Navbar({setData,cart})
{     const location=useLocation();
      console.log(location); 
      const navigate=useNavigate();
      const filterbycategory=(category)=>{
      const elem=items.filter((product)=>product.category===category)
      setData(elem);
      };
      const [search,searchData]=useState("");
      const filterbyPrice=(price)=>{

         const elem=items.filter((product)=>product.price==price);
         setData(elem);
         
      }
     const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(search);
        navigate(`/search/${search}`);
      }
    
   return(
    <>
    <header>
        <div className="nav-bar">
          <Link to={"/"}className="brand">E-COMMERCE</Link>
           <form onSubmit={handleSubmit}><input type="text" placeholder="Enter the product name" onChange={(e)=>{searchData(e.target.value)}}/></form>
          <Link to={"/cart"} className="cart"><button type="button" class="btn btn-primary position-relative">
          <FaShoppingCart/>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button></Link>
        </div>
        {
          location.pathname=='/' && (
            <div className="nav-bar-wrapper">
            <ul>
                <li>Filter by-</li>
                <li onClick={()=>{setData(items)}}>No filter</li>
                <li onClick={()=>filterbycategory('mobiles')}>Mobiles</li>
                <li onClick={()=>filterbycategory('laptops')}>Laptops</li>
                <li onClick={()=>filterbycategory('tablets')}>Tablets</li>
                <li onClick={()=>filterbyPrice(29999)}>{">="}29999</li>
                <li onClick={()=>filterbyPrice(49999)}>{">="}49999</li>
                <li onClick={()=>filterbyPrice(69999)}>{">="}69999</li>
                <li onClick={()=>filterbyPrice(89999)}>{">="}89999</li>
            </ul>
        </div>
          )
        }
        
    </header>
    </>
   )  
}
export default Navbar;
