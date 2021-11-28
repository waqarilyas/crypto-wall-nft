import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Page>
              <Home />
            </Page>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
