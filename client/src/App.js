import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddNewPoll } from "./components/AddNewPoll";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/addnewpoll" component={<AddNewPoll />} />
      </Switch>
    </Router>
  );
}

export default App;
