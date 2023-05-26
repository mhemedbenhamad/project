import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  User,
  Acceuil,
  Travaux,
  AjouterTravaux,
  AjouterUser,
  ModifierTravaux,
  ModifierUser,
  Apropos,
  Navbar,
} from "./pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/User" element={<User />} />
          <Route exact path="Acceuil" element={<Acceuil />} />
          <Route exact path="Travaux" element={<Travaux />} />
          <Route exact path="AjouterTravaux" element={<AjouterTravaux />} />
          <Route exact path="AjouterUser" element={<AjouterUser />} />
          <Route
            exact
            path="ModifierTravaux/:id"
            element={<ModifierTravaux />}
          />
          <Route exact path="ModifierUser/:id" element={<ModifierUser />} />

          <Route exact path="Apropos" element={<Apropos />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
