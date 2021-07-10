import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PetsList from '../pages/PetsList';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PetsList} />
    <Route path="/register/:petId" component={Register} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
