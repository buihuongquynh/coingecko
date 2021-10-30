import React from "react";
import Header from "./components/header/header";
import Login from "./Page/Login";
import Home from "./Page/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router basename="/coingecko">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" exact component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
