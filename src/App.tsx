import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import Activity from "./screens/Activity";
import ConnectWallet from "./screens/ConnectWallet";
import DiscoverMain from "./screens/Discover/DiscoverMain";
import Faq from "./screens/Faq";
import Home from "./screens/Home";
import Item from "./screens/Item";
import PageList from "./screens/PageList";
import Profile from "./screens/Profile";
import ProfileEdit from "./screens/Profile/ProfileEdit";
import SearchNotFound from "./screens/SearchNotFound";

import UploadVariants from "./screens/UploadVariants";
import UploadDetails from "./screens/UploadVariants/UploadDetails";
import "./styles/app.sass";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          path="/upload-variants"
          element={
            <Page>
              <UploadVariants />
            </Page>
          }
        />
        <Route
          path="/upload-variants"
          element={
            <Page>
              <UploadVariants />
            </Page>
          }
        />

        <Route
          path="/upload-details"
          element={
            <Page>
              <UploadDetails />
            </Page>
          }
        />

        <Route
          path="/connect-wallet"
          element={
            <Page>
              <ConnectWallet />
            </Page>
          }
        />

        <Route
          path="/faq"
          element={
            <Page>
              <Faq />
            </Page>
          }
        />

        <Route
          path="/activity"
          element={
            <Page>
              <Activity />
            </Page>
          }
        />

        <Route
          path="/discover"
          element={
            <Page>
              <DiscoverMain />
            </Page>
          }
        />

        <Route
          path="/not-found"
          element={
            <Page>
              <SearchNotFound />
            </Page>
          }
        />

        <Route
          path="/profile"
          element={
            <Page>
              <Profile />
            </Page>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <Page>
              <ProfileEdit />
            </Page>
          }
        />

        <Route
          path="/item"
          element={
            <Page>
              <Item />
            </Page>
          }
        />

        <Route
          path="/pagelist"
          element={
            <Page>
              <PageList />
            </Page>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
