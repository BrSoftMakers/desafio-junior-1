import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import NewPet from "../pages/NewPet";
import UpdatePet from "../pages/UpdatePet";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pets/new" component={NewPet} />
        <Route path="/pets/update/:id" component={UpdatePet} />
      </Switch>
    </Router>
  );
}

export default Routes;
