import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const RegisteredRoute = ({ registered, component: Component, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={props =>
                registered ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/register',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

const mapStateToProps = (state) => ({
    registered: state.registration.key !== '',
});

export default connect(mapStateToProps)(RegisteredRoute);