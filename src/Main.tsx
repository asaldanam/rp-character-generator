import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from "./routes";

function Main() {
  return (
    <Router>
      <Routes>
        {Object.entries(routes).map(([path, config]) => (
          <Route path={path} element={<config.component />} key={path} />
        ))}
      </Routes>
    </Router>
  );
}

export default Main;
