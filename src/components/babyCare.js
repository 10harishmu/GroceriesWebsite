import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "../styles/babyCare.css";

const BabyCare = () => {

let location = useLocation()
let [Babycare, setBabycare] = useState([]);

useEffect(()=>{
    let fetchBabycare = async () => {
        let responce = await fetch("http://localhost:8000/Babycare")
        let data= await responce.json();
        setBabycare(data);
    };
    fetchBabycare();
}, []);

let handleSubmit = ((id) => {
    fetch(`http://localhost:8000/Babycare/${id}`,{
        method: 'POST',
        body: JSON.stringify(Babycare)
    });
    window.location.reload("")
    alert("Added to Cart ");
})
    return (  
        <section className="werty">
            <div className="asdfg">
                <h1>Babycare <br /> No.of Items:{Babycare.length} </h1></div>
                <div className="zxcvb">
                    {Babycare.map((data)=>{
                return (
              <div className="list">
                <h2>Name:{data.name}</h2>
                <h4>Quality:{data.quality}</h4>
                <h4>Quantity:{data.quantity}</h4>
                <h4>Price:{data.price}</h4>
                <p>Id:{data.id}</p>
               {/* {location.pathname === '/admin-portal/babycare' &&  <button onClick={()=> handleSubmit(data.id)}>Add to Cart</button>}
               {location.pathname === '/user-portal/babycare' &&  <button onClick={()=> handleSubmit(data.id)}>Add to Cart</button>}
                */}
              </div>
            );

             })}    

            </div>
        </section>
        )
   }
 
export default BabyCare;