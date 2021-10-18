import React from "react";
import Header from "../components/header";

import Layout from "./layout";
import { publicRoutes, privateRoutes } from "./routes";
import { Redirect, Route, useLocation, useParams } from "react-router-dom";

const Routes = () => {
  //   const { user, loader } = useSelector((state:) => state.root);
  const location = useLocation();
  const param = useParams();
  const isLoggedIn = false;

  //   let path = [`/openCollection`, `/openArt/${param?.id}`];
  return (
    <div style={{ position: "relative" }}>
      {/* {loader?.Loader && <Loader />} */}

      <Header />

      {isLoggedIn
        ? privateRoutes.map((route, inx) => {
            return (
              <Route
                key={inx}
                path={route.path}
                exact={true}
                render={props => {
                  return <Layout {...props} {...route} />;
                }}
              />
            );
          })
        : publicRoutes.map((route, inx) => {
            return (
              <Route
                key={inx}
                path={route.path}
                exact={true}
                render={props => {
                  return <Layout {...props} {...route} />;
                }}
              />
            );
          })}
      {/* <Redirect path="/" /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Routes;
