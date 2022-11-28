import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addBabyCare.css";


const AddBabyCare = () => {

    let [name, setname] = useState("");
    let [quality, setquality] = useState("");
    let [quantity, setquantity] = useState("");
    let [price, setprice] = useState("");
    let navigate = useNavigate();
  
    let handleSubmit = (e) => {
      e.preventDefault()
          let data={
              name:name,
              quality:quality,
              quantity:quantity,
              price:price,
          }
          fetch("http://localhost:8000/Babycare",{
            method: "POST",
            headers:{'Content-Type':"application/json"},
            body: JSON.stringify(data)
          });
          alert("Added to List")
          navigate("/admin-portal/babycare")
      };
      let reset=()=>{
          setname('');
          setquality('');
          setquantity('');
          setprice('');
      }
    return (
        <section className="addclq">
        <div className="adsf">
          <h1>Add BabyCare </h1>
        </div>
        <div className="qazx">
          <form action="" id="asdz" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label> <br />
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)} /> <br />
            <label htmlFor="quality">Quality</label> <br />
            <input type="text" placeholder="Enter Quality" value={quality} onChange={(e)=>setquality(e.target.value)}  /> <br />
            <label htmlFor="quantity">Quantity (in NO.S)</label> <br />
            <input type="number" placeholder="Enter Quantity" value={quantity} min="1" onChange={(e)=>setquantity(e.target.value)} /><br />
            <label htmlFor="">Price</label> <br />
            <input type="number" placeholder="Enter Price" value={price} min="1" onChange={(e)=>setprice(e.target.value)} /> <br />
            <div className="adbk">
              <button className="addbk" onClick="">
                Submit
              </button>
              <button className="rest" onClick={reset}> Reset</button>
            </div>
          </form>
        </div>
     
    </section>
    );
}
 
export default AddBabyCare;