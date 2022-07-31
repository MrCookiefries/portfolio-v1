import { Routes, Route } from "react-router";
import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="*" element={<p>not found</p>} />
    </Routes>
  );
};

export default AppRoutes;
