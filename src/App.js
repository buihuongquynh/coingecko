import React from "react";
import Header from "./components/header/header";
import Login from "./Page/Login";
import Home from "./Page/Home"
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/coingecko" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
