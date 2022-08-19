import Character from "./modules/character";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default Main;
