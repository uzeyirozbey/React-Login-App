import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('kullanici')
            ? <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            : <Component {...props} />
    )} />
)