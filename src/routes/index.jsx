import { Route, Routes } from "react-router-dom";
import { Dashboard, Wallets } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wallets" element={<Wallets />} />
    </Routes>
  );
};
export default AppRoutes;
