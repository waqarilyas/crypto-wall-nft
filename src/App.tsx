import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import UploadVariants from "./screens/UploadVariants";

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
        <Route
          path='/upload-variants'
          element={
            <Page>
              <UploadVariants />
            </Page>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
