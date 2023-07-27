import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainRegisterForm from "./components/register_form/MainRegisterForm";
import MainLoginForm from "./components/login_form/MainLoginForm";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/users/register" Component={MainRegisterForm} />
        <Route exact path="/users/login" Component={MainLoginForm} />
      </Routes>
    </div>
  );
}

export default App;
