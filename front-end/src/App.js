import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainRegisterForm from "./components/register_form/MainRegisterForm";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/users/register" Component={MainRegisterForm} />
      </Routes>
    </div>
  );
}

export default App;
