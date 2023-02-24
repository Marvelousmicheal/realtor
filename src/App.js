import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import ForgottenPassword from "./pages/ForgottenPassword";
import PRoute from "./components/PRoute";
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
            <Route path="/Profile" element={<PRoute />}>
              <Route path="/Profile" element={<Profile />} />
            </Route>
            <Route path="/Sign-Up" element={<SIgnUp />} />
            <Route path="/Sign-In" element={<SignIn />} />
          </Routes>
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
