import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PetCreatePage from "./pages/PetCreatePage";

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <HomePage />
        </Route>
        <Route exact path = {"/create"}>
          <PetCreatePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

export default Routes;
