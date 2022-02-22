import "./App.css";
import NavBar from "./components/navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/dashboard";
import Homepage from "./components/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path={"/signup"} element={<SignupForm />}></Route>
          <Route path={"/dashboard"} element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
