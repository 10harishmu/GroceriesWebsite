import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "../styles/houseHold.css";

const CleaningHousehold = () => {

let location = useLocation()
let [houseHolds, sethouseHolds] = useState([]);

useEffect(()=>{
    let fetchHouseHold = async () => {
        let responce = await fetch("http://localhost:8000/Cleaning")
        let data= await responce.json();
        sethouseHolds(data);
    };
    fetchHouseHold();
}, []);

let handleSubmit = ((id) => {
    fetch(`http://localhost:8000/Cleaning/${id}`,{
        method: 'POST',
        body: JSON.stringify(houseHolds)
    });
    window.location.reload("")
    alert("Added to Cart");
})
    return (  
        <section className="wert">
            <div className="asdf">
                <h1>Cleaning Household <br /> No.of Items:{houseHolds.length} </h1></div>
                <div className="zxcv">
                    {houseHolds.map((data)=>{
                return (
              <div className="list">
                <h2>Name:{data.name}</h2>
                <h4>Quality:{data.quality}</h4>
                <h4>Quantity:{data.quantity}</h4>
                <h4>Price:{data.price}</h4>
                <p>Id:{data.id}</p>
               {/* {location.pathname === '/admin-portal/household' &&  <button onClick={()=> handleSubmit(data.id)}>Add to Cart</button>}
               {location.pathname === '/user-portal/household' &&  <button onClick={()=> handleSubmit(data.id)}>Add to Cart</button>}
                */}
              </div>
            );

             })}    

            </div>
        </section>
        )
   }
 
export default CleaningHousehold;