
import {Link} from "react-router-dom"
 import "../styles/sidebar.css";
 
const SideBar = () => {
    return ( 
        <section className="categ">
            <div className="sidebar">
                <img src="https://cdn.icon-icons.com/icons2/1539/PNG/96/3289576-individual-man-people-person_107097.png" alt="" />
                <h1>Admin <h5>grocery@gmail.com</h5></h1>
            </div>
            <div>
                <div className="catiem">
                <Link to="/admin-portal/"> Home</Link>
                <Link to="/admin-portal/vegfruit">Fruits & Vegetables</Link>
                <Link to="/admin-portal/foodgrains">Foodgrains, oil & Masala</Link>
                <Link to="/admin-portal/household">Cleaning & Household</Link>
                <Link to="/admin-portal/babycare">Baby Care </Link>
                <Link to="/admin-portal/add-vegfruit">Add Fruits & Vegetables</Link>
                <Link to="/admin-portal/add-foodgrains">Add Foodgrains, oil & Masala</Link>
                <Link to="/admin-portal/add-household">Add Cleaning & Household</Link>
                <Link to="/admin-portal/add-babycare">Add Baby Care </Link>

                <button className="btn1"> <Link to="/admin-login">Log Out</Link></button>
            </div>
            </div>
        </section>
     );
}
 
export default SideBar;