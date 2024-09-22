import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Ambulance from "./Components/Ambulance";
import Infomation from "./Components/Infomation";
import RouteLocation from "./Components/RouteLocation";
import "./Components/css/DriverFK.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Infomation />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/route" element={<RouteLocation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
