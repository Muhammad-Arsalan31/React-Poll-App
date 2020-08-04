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
          <Route exact path="/" component={Polls} />
          <Route path="/addnewpoll" exact component={AddNewPoll} />
        </Switch>
      </Home>
    </Router>
  );
}

export default App;
