import * as React from 'react';
import { Spin } from 'antd';
import './fullscreen-spinner.css';

const FullscreenSpinner = () => {
    return (
        <div className="fullscreen-spinner">
            <Spin />
        </div>
    );
};

export default FullscreenSpinner;