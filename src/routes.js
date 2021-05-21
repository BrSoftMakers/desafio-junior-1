import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import NewPet from './pages/pet/newPet.js';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route path="/newPet" component= {NewPet} />   
            </Switch>
        </BrowserRouter>
    )
}