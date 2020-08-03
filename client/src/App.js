import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddNewPoll } from "./components/AddNewPoll";
import { Polls } from "./components/Polls";

function App() {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/" exact component={Polls} />
          <Route path="/addnewpoll" component={AddNewPoll} />
        </Switch>
      </Home>
    </Router>
  );
}

export default App;
