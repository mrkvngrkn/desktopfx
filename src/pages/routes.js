import React from 'react';
import { Switch, Route } from 'react-router';
import { URL } from '../constants/url';
import RegisteredRoute from '../containers/registered-route/registered-route';
import Lights from './lights/lights';
import Registration from './registration/registration';
import Fallback from './fallback/fallback';

export default () => (
    <Switch>
        <RegisteredRoute path={URL.LIGHTS} component={Lights} />
        <Route exact path={URL.REGISTER} component={Registration} />
        <Route path="*" component={Fallback} />
    </Switch>
)