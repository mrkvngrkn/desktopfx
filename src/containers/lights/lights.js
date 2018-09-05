import React from 'react';
import { connect } from 'react-redux';
import { allLights } from '../../store/lifx/lifx.selectors';

class Lights extends React.Component {
    render() {
        const { lights } = this.props;
        return this.props.children(lights);
    }
}

const mapStateToProps = (state) => ({
    lights: allLights(state),
});

export default connect(mapStateToProps)(Lights);