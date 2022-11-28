import React from "react";
import {Link} from "react-router-dom";


const NotFound = () => {
    return ( 
        <section>
        <div className="notfound">
            <h1>Ooops...! Page Not Found</h1>
        </div>
        <div>
            <button> <Link to="/"> Home Page</Link> </button>
        </div>
        </section>
     );
}
 
export default NotFound;