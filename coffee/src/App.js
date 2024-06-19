import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Subscribe} from "./pages/Subscribe/Subscribe";
import {SharedLayout} from "../src/components/SharedLayout/SharedLayout"


function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index  element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="subscribe" element={<Subscribe />} />
        </Route>
        <Route path="*" element={<p>Печаль</p>} />
      </Routes>
  );
}

export default App;
