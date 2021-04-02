import React, { lazy, Suspense, useEffect } from 'react';
import { Route, withRouter, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import actioncreators from '../Actions/ActionCreators'
import Components from '../Container/ComponentWrapper';

const HomeContainer = lazy(() => import('../Component/HomeComponent'))


const AppRoute = props => {
    useEffect(() => {
        console.log('props', props)
    }, []);

    let _routes = (
        <Router>
            <Components>
                <Switch>
                    <Route path="/" exact render={() => <HomeContainer testMsg={'Premji'} />} />
                </Switch>
            </Components>
        </Router>
    );

    return (
        <div><Suspense fallback={<Components><p>Loading</p></Components>}>{_routes}</Suspense></div>
    );
}



const mapStateToProps = (state) => ({
    testState: state.testReducer,
})

const mapDispatchToProps = (dispatch) => ({
    testAuth: (values) => dispatch(actioncreators.UserLogin(values)),
})

const MainRoute = connect(mapStateToProps, mapDispatchToProps)(AppRoute);
export default withRouter(MainRoute);