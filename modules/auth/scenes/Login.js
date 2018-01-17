import React from 'react';

var {Text, StyleSheet} = require('react-native');

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import { actions as auth } from "../"
const { login, resetPassword } = auth;

import Form from "../components/Form"
import AuthContainer from "../components/AuthContainer"
import styles from "../styles"

const fields = [
    {
        key:'email',
        label: "Email Address",
        placeholder:"Email",
        autoFocus:false,
        secureTextEntry:false,
        value: "",
        type: "email"
    },
    {
        key:'password',
        label: "Password",
        placeholder:"Password",
        autoFocus:false,
        secureTextEntry:true,
        value: "",
        type: "password"
    }
];

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            error: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    onSubmit(data) {
        this.setState({error: ""});
        this.props.login(data, this.onSuccess, this.onError)
    }

    onForgotPassword() {
        Actions.ForgotPassword()
    }

    onSuccess() {
        Actions.Main()
    }

    onError(error) {
        this.setState({error:error.message});
    }

    render() {
        return (
            <AuthContainer>
                <Form fields={fields} onSubmit={this.onSubmit} buttonTitle={"Login"} error={this.state.error}/>
                <Text style={styles.forgotText} onPress={this.onForgotPassword}>Forgot password?</Text>
            </AuthContainer>
        );
    }
}

export default connect(null, { login, resetPassword })(Login);
