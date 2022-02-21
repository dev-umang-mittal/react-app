import "./App.css";
import NavBar from "./components/navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <LoginForm></LoginForm> */}
      {/* <SignupForm></SignupForm> */}
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
