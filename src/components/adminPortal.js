import "../styles/adminPortal.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./sidebar";
import AdHome from "./adHome"
import FoodGrains from "./foodGrains";
import FruitsVegetables from "./vegFruit";
import CleaningHousehold from "./houseHold";
import Babycare from "./babyCare";
import AddFruitsVegetables from "./addFruitsVegetables";
import AddFoodGrains from "./addFoodGrains";
import AddCleaningHousehold from "./addHouseHold";
import AddBabyCare from "./addBabyCare";

const AdminPortal = (props) => {
  let email = props.data;
  return (
    <section className="adp">
      <div className="sdb">
        <SideBar data={email} />
        <div>
          <Routes>
          <Route path="/" element={<AdHome />} />
            <Route path="/foodgrains" element={<FoodGrains />} />
            <Route path="/vegFruit" element={<FruitsVegetables />} />
            <Route path="/household" element={<CleaningHousehold />} />
            <Route path="/babycare" element={<Babycare />} />
            <Route path="/add-vegfruit" element={<AddFruitsVegetables />} />
            <Route path="/add-foodgrains" element={<AddFoodGrains/>} />
            <Route path="/add-household" element={<AddCleaningHousehold/>}/>
            <Route path="/add-babycare" element={<AddBabyCare/>} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default AdminPortal;
