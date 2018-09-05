import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { URL } from '../../constants/url';
import { generateLightsURL } from '../../helpers/url.helper';
import './fallback.css';

const Fallback = ({ registered }) => {
    return !registered ? (
        <Redirect to={URL.REGISTER} />
    ) : (
        <Redirect to={generateLightsURL()} />
    );

};

const mapStateToProps = (state) => ({
    registered: state.registration.key !== '',
});

export default connect(mapStateToProps)(Fallback);