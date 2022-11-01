//STYLES
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTS
import PublicNavBar from "./components/PublicNavBar";
//se deberá agregar navbar privado
import PublicFooter from "./components/PublicFooter";

//HOOKS
import { BrowserRouter, Route, Routes } from "react-router-dom";


//CONTEXT
//se deberá agregar el context

//VIEWS
import Home from "./Views/Home";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import Profile from "./Views/Profile";
import PlantForm from "./Views/PlantForm";
import Catalogue from "./Views/Catalogue";
import PlantDetails from "./Views/PlantDetails";
import JoinCommunity from "./Views/JoinCommunity";
import OurTeam from "./Views/OurTeam";
import WorkWithUs from "./Views/WorkWithUs";
import NotFound from "./Views/NotFound";
import PlantasContext from "./context/PlantasContext";
import { useState } from "react";
import TeamContext from "./context/TeamContext";

function App() {
  const [plantasData, setPlantasData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  
  return (
    <div className="App">
      <PlantasContext.Provider
      value={{
        plantasData,
        setPlantasData,
      }}>
        <TeamContext.Provider
        value={{
          teamData,
          setTeamData,
        }}>
      <BrowserRouter>
        <PublicNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="form" element={<PlantForm />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="/catalogue/:id/details" element={<PlantDetails />} />
          <Route path="joincommunity" element={<JoinCommunity />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="workwithUs" element={<WorkWithUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PublicFooter />
      </BrowserRouter>
      </TeamContext.Provider>
      </PlantasContext.Provider>
    </div>
  );
}

export default App;
