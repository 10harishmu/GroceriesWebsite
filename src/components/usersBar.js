import {Link} from "react-router-dom";
import "../styles/usersBar.css";
 

const UsersBar = () => {
    return ( 
        <section className="usrcat">
            <div className="usrbar">
            <img src="https://cdn.icon-icons.com/icons2/1539/PNG/96/3289576-individual-man-people-person_107097.png" alt="" />
                <h1>User<h5>user@gmail.com</h5></h1>
            </div>
            <div className="usritem">
                <Link to="/user-portal/">Home</Link>
                <Link to="vegfruit/">Fruits & Vegetables</Link>
                <Link to="foodgrains/">Foodgrains, oil & Masala</Link>
                <Link to="household/">Cleaning & Household</Link>
                <Link to="babycare/">Baby Care</Link>
                <button className="btnn1"> <Link to="/user-login">Log Out</Link></button>

            </div>
        </section>
     );
}
 
export default UsersBar;