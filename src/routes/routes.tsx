import Home from "../pages/home";

let publicRoutes: any[] = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
];
let privateRoutes: any[] = [
  //   {
  //     path: "/collections",
  //     component: OpenCollection,
  //     name: "Open Collectin",
  //   },
];
export { publicRoutes, privateRoutes };
