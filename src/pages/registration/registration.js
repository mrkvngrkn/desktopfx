import React from 'react';
import { Layout } from 'antd';

import RegistrationForm from '../../containers/registration-form/registration-form';
import './registration.css';

const { Content } = Layout;

class RegistrationPage extends React.Component {
    render() {
        return (
            <Layout className="registration">
                <Content className="registration__content">
                    <h1>Welcome</h1>
                    <p>To proceed you need to enter your API Key to connect to your lights.</p>
                    <RegistrationForm />
                </Content>
            </Layout>
        );
    }
}

export default RegistrationPage;