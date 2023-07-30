import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainRegisterForm from "./components/register_form/MainRegisterForm";
import MainLoginForm from "./components/login_form/MainLoginForm";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <NavBar />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/users/register" Component={MainRegisterForm} />
        <Route exact path="/users/login" Component={MainLoginForm} />
      </Routes>
    </UserProvider>
  );
}

export default App;
