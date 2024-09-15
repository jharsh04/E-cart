import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Product from "./Product";
import { items } from "./Data";

function ProductDetails({cart,setCart}) {
        const { id } = useParams();
        const [product, Setproduct] = useState({});
        const [relatedProduct,SetRelatedProduct]=useState([]);
        const f=()=>{
                console.log("function is called");
        }
        useEffect(() => {
                const filterproduct = items.filter((p) => p.id == id);
                console.log(filterproduct);
                Setproduct(filterproduct[0]);//for rendering the specific product
                const relatedProduct=items.filter((p)=>p.category===product.category && product.id!=p.id);
                SetRelatedProduct(relatedProduct);
                console.log(relatedProduct);

        }, [id,product.category]);
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
        return (<>
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
                <div className="Container ">
                        <div className="img" style={{marginLeft:"70px"}}>
                                <img src={product.imgSrc} alt="" />
                        </div>
                        <div className="card-body" style={{padding:"120px"}}>
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <button className='btn btn-primary' style={{ marginRight: "8px" }}>₹{product.price}</button>
                                <button className='btn btn-primary bg-warning' onClick={()=>{addtoCart(product.id,product.price,product.title,product.description,product.imgSrc)}}>Add to cart</button>
                        </div>
                </div>
                <h1>Related Products</h1>
                <Product cart={cart} setCart={setCart} items={relatedProduct}/>
                
                </>)
}
export default ProductDetails;