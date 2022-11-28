
import {Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import "../styles/userLogin.css";


const UserLogin = (props) => {
    let [user,setUser]=useState('')
    let [password,setPassword]=useState('')
    let navigate= useNavigate()

    let handleSubmit =()=>{
        if((user === props.data)&&(password==="12345")){
            navigate("/user-portal")
    }else{
        alert("Invalid Email or Password")
    }

    }
    return ( 
        <section className="usbkg">
            <div className="log">
                <form action="" onSubmit={handleSubmit}>
                    <h4>Welcome to User Login</h4>
                    <label htmlFor=""> User Email</label> <br />
                    <input type="email" name="email" id="email" placeholder="Enter User Email" value={user} onChange={(e)=>setUser(e.target.value)} /> <br />
                    <label htmlFor="">User Password</label> <br />
                    <input type="password" name="password" id="password" placeholder="Enter User Password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
                    <div className="bttns">
                        <button className="lbtn" href="">LogIn</button>
                        <button className="hbtn"> <Link to="/">Home Page</Link></button>
                    </div>
                </form>
            </div>
        </section>
     );
}
 
export default UserLogin;