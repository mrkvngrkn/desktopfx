import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Switch, Divider } from 'antd';
import { allLights, allGroups } from '../../store/lifx/lifx.selectors';
import { getLights } from '../../store/lifx/lifx.actions';
import FullscreenSpinner from '../../components/fullscreen-spinner/fullscreen-spinner';
import './lights.css';
import Light from '../../components/light/light';

class Lights extends React.Component {
    componentDidMount() {
        if (!this.props.lights.length) {
            this.props.getLights();
        }
    }

    toggleAll = () => {
        console.log('toggle all');
    }

    render() {
        const { lights, groups } = this.props;
        console.log(groups);
        if (!lights.length) {
            return (<FullscreenSpinner />);
        }
        const isAnyLightOn = lights.some(light => light.power === 'on');
        return (
            <div className="lights">
                <Row>
                    <Col span={2}>
                        <Switch checked={isAnyLightOn} onChange={this.toggleAll} />
                    </Col>
                    <Col>
                        <h1>All lights</h1>
                    </Col>
                </Row>
                <Row type="flex">
                    {lights.map(light => (
                        <Col xs={24} sm={8} md={4} key={light.id}>
                            <Light
                                label={light.label}
                                isOn={light.power === 'on'}
                            />
                        </Col>
                    ))}
                </Row>
                <Divider />
                <h1>Groups</h1>
                <Row>
                    {groups.map(group => (
                        <Col xs={24} sm={8} md={4} key={group.id}>
                            <Light
                                label={group.name}
                                isOn={group.lights.some(light => light.isOn)}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    lights: allLights(state),
    groups: allGroups(state),
});

const mapDispatchToProps = (dispatch) => ({
    getLights: () => dispatch(getLights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lights);