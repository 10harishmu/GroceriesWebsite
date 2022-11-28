import '../styles/foodGrains.css';
import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";

const FoodGrains = () => {

  let location = useLocation()
  let [foodGrains, setfoodGrains] = useState([]);

  useEffect(() => {
    let fetchFoodGrains = async () => {
      let response = await fetch("http://localhost:8000/Foodgrains");
      let data = await response.json();
      setfoodGrains(data);
    };
    fetchFoodGrains();
  }, []);    
  
  let handleSubmit = ((id)=>{
    fetch(`https://localhost:8000/Foodgrains/${id}`,{
      method: 'POST',
      body: JSON.stringify(foodGrains)
    });
    window.location.reload("Deleted Successfully")
    alert("Added to Cart");
   
  })
  return (
    <section className="bkbkg">
      <div className="bkrhd"><h1>FoodGrains<br />No.of Items:{foodGrains.length}</h1></div>
        <div className="bkcard">  
        {foodGrains.map((data) => {
          return (
            <div className="bklist">
              <h2>Name:{data.name}</h2>
              <h4>Quality:{data.quality}</h4>
              <h4>Quantity:{data.quantity}</h4>
              <h4>Price:{data.price}</h4>
              <p>Id:{data.id}</p>
             {/* {location.pathname === '/admin-portal/foodgrains' &&  <button onClick={()=> handleSubmit(data.id)}>Add to Cart</button>}
             {location.pathname === '/user-portal/foodgrains' &&  <button onClick={()=> handleSubmit(data.id)}>Add to Cart</button>}
              */}
            </div>
          );
        })}
      </div>
       </section>
  );
};

export default FoodGrains;
