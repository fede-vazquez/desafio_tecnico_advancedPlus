import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainRegisterForm from "./components/register_form/MainRegisterForm";
import MainLoginForm from "./components/login_form/MainLoginForm";
import { UserProvider } from "./context/UserContext";
import HomePage from "./components/home/HomePage";
import MainProfile from "./components/profile/MainProfile";

function App() {
  return (
    <UserProvider>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/users/register" Component={MainRegisterForm} />
        <Route exact path="/users/login" Component={MainLoginForm} />
        <Route exact path="/users/profile" Component={MainProfile} />
      </Routes>
    </UserProvider>
  );
}

export default App;
