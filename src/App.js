import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ForgottenPassword from "./pages/ForgottenPassword";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SIgnUp from "./pages/SIgnUp";

function App() {
  return (
    <div className="App ">
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
            <Route path="/Offer" element={<Offer />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Sign-Up" element={<SIgnUp />} />
            <Route path="/Sign-In" element={<SignIn />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
