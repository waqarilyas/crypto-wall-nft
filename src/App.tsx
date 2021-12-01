import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
