import React from 'react';
import classnames from 'classnames';
import { Card, Icon } from 'antd';
import './light.css';

const { Meta } = Card;

const Light = ({ label, isOn, onClick, loading }) => {
    const classes = classnames('light', isOn && 'light--on');
    return (
        <Card loading={loading} className={classes}  onClick={onClick}>
            <Icon type="poweroff" theme="outlined" className="light__icon" />
            <Meta
                title={label}
            />
        </Card>
    );
};

export default Light;