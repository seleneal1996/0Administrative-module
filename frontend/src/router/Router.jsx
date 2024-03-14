import { Route, Routes } from "react-router-dom";
import { lazy, memo, Suspense } from "react";
import CONSTANTS from "../config/constants.js";

const { ROUTES } = CONSTANTS;

// Root routes
const LoginPage = lazy(() => import("../pages/public/Login/Login.jsx"));
const PanelPage = lazy(() => import("../pages/private/Panel/Panel.jsx"));

const Router = () => {
  const noAuthRoutes = () => {
    return (
      <>
        <Route path={ROUTES.PUBLIC.SIGN_USER.to} element={<LoginPage />} />
        {/*  <Route path="*" element={<FourZeroFour />} /> */}
      </>
    );
  };

  const userRoutes = () => {
    return (
      <>
        <Route path={ROUTES.PRIVATE.PANEL_ADMIN.to} element={<PanelPage />} />
      </>
    );
  };

  /*  const adminRoutes = () => {
    return (
      <>
        <Route path={ROUTES.PUBLIC.SIGN_USER} element={<LoginPage />} />
      </>
    );
  }; */

  return (
    <Suspense>
      {/*  <Suspense fallback={<Backdrop isLoading={true} />}> */}
      <Routes>
        {noAuthRoutes()}
        {userRoutes()}
        {/* 
        {adminRoutes()}
        {userRoutes()}
         */}
      </Routes>
    </Suspense>
  );
};

export default memo(Router);
