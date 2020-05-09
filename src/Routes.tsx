import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Sample = lazy(() => import("./pages/Sample"));

//TODO: Implement proper loading
const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sample" component={Sample} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
