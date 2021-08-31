import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../_helpers';
import { alertActions } from '../../_actions';
import { PrivateRoute, PublicRoute } from '../../_components';
//////////Sayfalar ////////////////////
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { KullaniciPage } from "../KullaniciPage";
import { KullaniciDetayPage } from "../KullaniciDetayPage";
////////////////Layout/////////////////
import Navigation from "../../_components/Layout/Navigation.js";
import Footer from "../../_components/Layout/Footer";
//////////////Action///////////////////
import { userActions } from '../../_actions';
//////////////Template/////////////////
import { Container } from 'react-bootstrap';
///////////////////////////////////////
class App extends Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert, kullanici } = this.props;
        return (
            <Container>
                <Navigation kullanici={ kullanici } />
                <div className="col-md-12 p-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Switch>
                        <Route exact path="/"><HomePage /></Route>
                        <Route path="/KullaniciDetayPage/:ID_KULLANICI" extact strict component={ KullaniciDetayPage } ></Route>
                        <Route path="/kullanicipage"> <KullaniciPage />   </Route>
                        <Route path="/login">  <LoginPage/> </Route>
                        <Redirect  from="/" to="/*" />
                    </Switch>
                </div>
                <Footer />
            </Container>
        );
    }
}

function mapState(state) {
    const { alert, users, authentication } = state;
    const { kullanici } = authentication;
    return { alert, kullanici, users };
}

const actionCreators = {
    clearAlerts: alertActions.clear,
    getUsers: userActions.getAll
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };