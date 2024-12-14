import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Home/Homepage'
import NavbarArea from "./components/common/NavbarArea";
function App() {
  return (
    <BrowserRouter>
    <NavbarArea/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
