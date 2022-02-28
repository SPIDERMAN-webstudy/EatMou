import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App";
import KitchenInfo from "./components/Info/KitchenInfo";
import Search from "./components/Search/Search";
import Location from "./components/Location/Location";
import KitchenAdd from "./components/Add/KitchenAdd";
import KitchenEdit from "./components/Edit/KitchenEdit";
function RouterBase() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/location" element={<Location />} />
        <Route path="/KitchenAdd" element={<KitchenAdd />} />
        <Route path="/kitchen/:id" element={<KitchenInfo />} />
        <Route path="/kitchen/:id/edit" element={<KitchenEdit />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default RouterBase;
