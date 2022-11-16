//STYLES
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//COMPONENTS
import PublicNavBar from "./components/PublicNavBar";
import PrivateNavBar from "./components/PrivateNavBar";
import Footer from "./components/Footer";

//HOOKS
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

//CONTEXT
import PlantasContext from "./context/PlantasContext";
import TeamContext from "./context/TeamContext";
import UsuariosContext from "./context/UsuariosContext";
import RegisteredUserContext from "./context/RegisteredUserContext";

//VIEWS
import Home from "./Views/Home";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import Profile from "./Views/Profile";
import PlantForm from "./Views/PlantForm";
import Catalogue from "./Views/Catalogue";
import JoinCommunity from "./Views/JoinCommunity";
import OurTeam from "./Views/OurTeam";
import WorkWithUs from "./Views/WorkWithUs";
import NotFound from "./Views/NotFound";

function App() {
  const [plantasData, setPlantasData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [usuariosData, setUsuariosData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prueba, setPrueba] = useState(false);

  //función que trae los datos de la API usuarios
  const endpointUsers = "/usuarios.json";
  const fetchDataUsers = async () => {
    const response = await fetch(endpointUsers);
    let usuarios = await response.json();
    //console.log(usuarios);
    setUsuariosData(usuarios);
  };

  //renderizado
  useEffect(() => {
    fetchDataUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //función que trae los datos de la API plantas
  const endpointPlantas = "/plantas.json";
  const fetchDataPlantas = async () => {
    const response = await fetch(endpointPlantas);
    let data = await response.json();
    //console.log(data);
    setPlantasData(data);
  };

  //renderizado
  useEffect(() => {
    fetchDataPlantas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const PrivateRoute = useCallback(
    ({ children }) => {
      return prueba ? children : <Navigate to="/LogIn" />;
    },
    [prueba]
  );

  return (
    <div className="App">
      <PlantasContext.Provider
        value={{
          plantasData,
          setPlantasData,
        }}
      >
        <TeamContext.Provider
          value={{
            teamData,
            setTeamData,
          }}
        >
          <UsuariosContext.Provider
            value={{
              usuariosData,
              setUsuariosData,
            }}
          >
            <RegisteredUserContext.Provider
              value={{
                isLoggedIn,
                setIsLoggedIn,
                prueba,
                setPrueba,
              }}
            >
              <BrowserRouter>
                {prueba ? <PrivateNavBar /> : <PublicNavBar />}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<LogIn />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route
                    path="profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="plantForm"
                    element={
                      <PrivateRoute>
                        <PlantForm />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/catalogue/"
                    element={
                      <PrivateRoute>
                        <Catalogue />
                      </PrivateRoute>
                    }
                  />
                  <Route path="joincommunity" element={<JoinCommunity />} />
                  <Route path="ourteam" element={<OurTeam />} />
                  <Route path="workwithUs" element={<WorkWithUs />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </RegisteredUserContext.Provider>
          </UsuariosContext.Provider>
        </TeamContext.Provider>
      </PlantasContext.Provider>
    </div>
  );
}

export default App;