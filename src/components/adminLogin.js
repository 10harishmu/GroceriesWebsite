import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import "../styles/adminLogin.css";


const AdminLogin = (props) => {
    let[email,setEmail]= useState('')
    let[password,setPassword]= useState('')
    let navigate = useNavigate()

    let handleSubmit=()=>{
        if((email == props.data) && (password === "12345")){
            navigate("/admin-portal")
        }else{
            alert("Invalid email or password")
        }
    }
    return ( 
        <section className="adbkg">
            <div className="logg">
                <form action="" onSubmit={handleSubmit}>
                    <h4>Welcome to Admin Login </h4>
                <label htmlFor="">Admin Email</label> <br />
                <input type="email" name="email" id="email" placeholder="Enter Admin Email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
                <label htmlFor="">Admin Password</label> <br />
                <input type="password" name="password" id="password" placeholder="Enter Admin Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <div className="btns">
                <button type="submit" className="bttn">LogIn</button>
                <button className="btnn" > <Link to="/">Home Page</Link></button>
                </div>
                </form>
                </div>
        </section>
     );
}
 
export default AdminLogin;