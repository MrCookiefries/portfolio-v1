import { Routes, Route } from "react-router";
import App from "./components/App";
import Home from "./components/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<p>not found</p>} />
    </Routes>
  );
};

export default AppRoutes;
