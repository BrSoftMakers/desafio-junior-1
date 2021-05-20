import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pet from "../pages/Pet";
import Users from "../pages/Users";
import User from "../pages/User";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pet/:id" component={Pet} />
      <Route path="/users" component={Users} />
      <Route path="/user/:id" component={User} />
    </Switch>
  );
};

export default Routes;
