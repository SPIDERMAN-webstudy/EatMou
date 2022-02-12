import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App";
import KitchenInfo from "./components/Info/KitchenInfo";
import Search from "./components/Search/Search";
import Location from "./components/Location/Location";
function RouterBase() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/location" element={<Location />} />
        <Route path="/kitchen/:id" element={<KitchenInfo />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default RouterBase;
