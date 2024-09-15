import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product({cart,setCart,items}) {
     const addtoCart=(id,price,title,description,imgSrc)=>{
          const obj={
               id,price,title,description,imgSrc
          }
          setCart([...cart,obj]);
          console.log(cart);
          toast.success('Item added on cart!', {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               });
     }
     return (
          <> 
                <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
               <div className="container">
                    <div className="row " style={{ margin: "10px" }}>
                         {
                              items.map((product) => (
                                   <div className="card" style={{ width: "18rem", margin: "5px" ,border:"1px solid black"}}>
                                        <Link to={`/product/${product.id}`}><img src={product.imgSrc} className="card-img-top" alt="..." /></Link>
                                        <div className="card-body">
                                             <h5 className="card-title">{product.title}</h5>
                                             <p className="card-text">{product.description}</p>
                                             <button className='btn btn-primary' style={{ marginRight: "8px" }}>₹{product.price}</button>
                                             <button className='btn btn-primary bg-warning' onClick={()=>{addtoCart(product.id,product.price,product.title,product.description,product.imgSrc)}}>Add to cart</button>
                                        </div>
                                   </div>

                              ))
                         }
                    </div>
               </div>
          </>
     )
}
export default Product;