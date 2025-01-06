import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
