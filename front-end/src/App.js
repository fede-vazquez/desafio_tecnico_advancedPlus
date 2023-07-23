import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route exact path="/" />
      </Routes>
    </div>
  );
}

export default App;
