import React, { useState, useEffect } from "react";
import Main from "./Main";
import ItemDetail from "./components/ItemDetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/filter/:type" exact component={Main} />
        <Route path="/filter/:type/:feed" exact component={Main} />
        <Route path="/video/:title" component={ItemDetail} />
      </Switch>
    </Router>
  );
}

export default App;
