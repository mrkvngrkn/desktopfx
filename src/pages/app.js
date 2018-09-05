import React from 'react';
import { Layout } from 'antd';
import Routes from './routes';
import Logo from '../components/logo/logo';
import MainMenu from '../components/main-menu/main-menu';
import './app.css';

const { Header, Content } = Layout;

const App = () => {
    return (
        <Layout className="app">
            <Header>
                <Logo />
                <MainMenu />
            </Header>
            <Content>
                <Routes />
            </Content>
        </Layout>
    );
};

export default App;