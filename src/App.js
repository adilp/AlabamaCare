import React, { useEffect } from "react";
import Main from "./Main";
import ItemDetail from "./components/ItemDetail";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga";
import env from "react-dotenv";
import useGoogleAnalytics from "./utils/useGoogleAnalytics";

const Routes = () => {
  useGoogleAnalytics();
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/filter/:type" exact component={Main} />
      <Route path="/filter/:type/:feed" exact component={Main} />
      <Route path="/video/:title" component={ItemDetail} />
    </Switch>
  );
};

function App() {
  // useEffect(() => {
  //   ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
  //   console.log(process.env.REACT_APP_GA_TRACKING_CODE);
  //   console.log(process.env.REACT_APP_DATASET);
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
