import React from 'react';
import { connect } from 'react-redux';
import { getLights } from '../../store/lifx/lifx.actions';
import { allGroups, allLights, allLocations } from '../../store/lifx/lifx.selectors';
import Sider from '../../components/sider/sider';

class Navigation extends React.Component {
    componentDidMount() {
        this.props.getAllLights();
    }

    render() {
        const { lights, groups, locations } = this.props;
        return (
            <Sider
                lights={lights}
                groups={groups}
                locations={locations}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    lights: allLights(state),
    groups: allGroups(state),
    locations: allLocations(state),
});

const mapDispatchToProps = (dispatch) => ({
    getAllLights: () => dispatch(getLights())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);