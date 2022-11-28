import UsersBar from "./usersBar";
import { Routes, Route } from "react-router-dom";
import AdHome from "./adHome"
import FoodGrains from "./foodGrains";
import FruitsVegetables from "./vegFruit";
import CleaningHousehold from "./houseHold";
import Babycare from "./babyCare";

const UserPortal = (props) => {
let user = props.data
  return (
    <section className="urs">
      <div className="srs">
        <UsersBar data={user}/>
        <div>
          <Routes>
            <Route path="/" element={<AdHome />} />
            <Route path="/foodgrains" element={<FoodGrains />} />
            <Route path="/vegFruit" element={<FruitsVegetables />} />
            <Route path="/household" element={<CleaningHousehold />} />
            <Route path="/babycare" element={<Babycare />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default UserPortal;
