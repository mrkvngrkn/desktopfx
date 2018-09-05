import React from 'react';
import { Menu, Icon } from 'antd';

class MainMenu extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                mode="horizontal"
                theme="dark"
                defaultSelectedKeys={['lights']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="lights"><Icon type="bulb" theme="outlined" /> Lights</Menu.Item>
                <Menu.Item key="settings"><Icon type="setting" theme="outlined" /> Settings</Menu.Item>
            </Menu>
        );
    }
}

export default MainMenu;