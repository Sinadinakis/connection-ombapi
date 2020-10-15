import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SeriesView from "./containers/SeriesView/View";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SeriesView} />
          <Route exact path="/episode/:id" component={SeriesView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
