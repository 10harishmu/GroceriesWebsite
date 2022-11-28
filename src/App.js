 import {BrowserRouter,Routes,Route} from "react-router-dom";
 import "bootstrap/dist/css/bootstrap.min.css";
 import "./App.css";
 import Home from "./components/home.js"
 import AdminLogin from "./components/adminLogin.js";
 import UserLogin from "./components/userLogin";
 import AdminPortal from "./components/adminPortal.js";
 import UserPortal from "./components/userPortal.js";
 import NotFound from "./components/404.js";


 function App() {
 let email="grocery@gmail.com"; 
 let user="user@gmail.com";
  return (
   
    <div className="App">
    <BrowserRouter>  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="admin-login" element={<AdminLogin data={email} />}/>
      <Route path="user-login" element={<UserLogin data={user}/>}/>
      <Route path="admin-portal/*" element={<AdminPortal data={email} />}/>
      <Route path="user-portal/*" element={<UserPortal data={user}/>}/>
      <Route path="*" element={<NotFound/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  );
 }

export default App;
