import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import "../styles/vegFruit.css";

const FruitsVegetables = () => {

    let location = useLocation()
    let [vegfruit, setvegfruit] = useState([]);
  
    useEffect(() => {
      let fetchVegFruit = async () => {
        let response = await fetch("http://localhost:8000/FruitsVegetables");
        let data = await response.json();
        setvegfruit(data);
      };
      fetchVegFruit();
    }, []);    
    
    let handleSubmit = ((id)=>{
      fetch(`https://localhost:8000/FruitsVegetables/${id}`,{
        method: 'POST',
        body: JSON.stringify(vegfruit)
      });
      window.location.reload("")
      alert("Added to Cart");
     
    })
    return (
      <section className="bkbkg">
        <div className="bkrhd"><h1>FruitsVegetables<br />No.of Items:{vegfruit.length}</h1></div>
          <div className="bkcard">  
          {vegfruit.map((data) => {
            return (
              <div className="bklist">
                <h2>Name:{data.name}</h2>
                <h4>Quality:{data.quality}</h4>
                <h4>Quantity:{data.quantity}</h4>
                <h4>Price:{data.price}</h4>
                <p>Id:{data.id}</p>
               {/* {location.pathname === '/admin-portal/vegfruit' &&  <button onClick={()=> handleSubmit(data.id)}>Add to Cart</button>}
               {location.pathname === '/user-portal/vegfruit' &&  <button onClick={()=> handleSubmit(data.id)}>Add to Cart</button>}
                */}
              </div>
            );
          })}
        </div>
         </section>
    )
}
 
export default FruitsVegetables;