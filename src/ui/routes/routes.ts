import AuthPage from "../pages/auth.page";

const routes = [
  {
    path: "/",
    component: AuthPage,
  },
  {
    path: "/register",
    component: AuthPage,
  },
  {
    path: "/login",
    component: AuthPage,
  },
  {
    path: "/:socialauth",
    component: AuthPage,
  },
  {
    path: "*",
    component: AuthPage,
  },
];

export default routes;
