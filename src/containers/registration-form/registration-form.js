import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { register } from '../../store/registration/registration.actions';
import './registration-form.css';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.register(values.key);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="registration-form">
                <FormItem>
                    {getFieldDecorator('key', {
                        rules: [{ required: true, message: 'Please input your api key!' }],
                    })(
                        <Input placeholder="API Key" className="registration-form__input" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Save key
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    register: (key) => dispatch(register(key)),
});

export default connect(null, mapDispatchToProps)(Form.create()(RegistrationForm));