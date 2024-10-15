//my name is harsh jain 
function Cart({cart,setCart})
{    let deletedelements;
    const deleted=(id)=>{
         deletedelements=cart.filter((g)=> g.id!==id)
         if(deletedelements)
         {
           setCart(deletedelements);
         }
         else{
           deletedelements="No element is present";
           setCart(deletedelements);
         }
         
    }
    return(<>
    
        <div className="container Cart">
        {  
      
           cart.map((p)=>{
            return(<>
             <div className="card mb-3" style={{width:"540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={p.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{p.title}</h5>
        <p className="card-text">{p.description}</p>
        <p>₹{p.price}</p>
        <button className='btn btn-primary' style={{marginRight:"5px"}}>Buy Now</button>
        <button className='btn btn-primary bg-warning' onClick={()=>{deleted(p.id)}}>Remove item</button>
      </div>
    </div>
  </div>
</div>
             </>)
         }
        )

      }
     
      </div>
    </>)  
}
export default Cart;
