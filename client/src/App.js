import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddNewPoll } from "./components/AddNewPoll";
import { Polls } from "./components/Polls";
import { PollContextProvider } from "./context/PollContext";

function App() {
  return (
    <Router>
      <PollContextProvider>
        <Home>
          <Switch>
            <Route exact path="/" component={Polls} />
            <Route path="/addnewpoll" exact component={AddNewPoll} />
          </Switch>
        </Home>
      </PollContextProvider>
    </Router>
  );
}

export default App;
