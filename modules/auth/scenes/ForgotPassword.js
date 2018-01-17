import React from 'react';

var {View, Alert} = require('react-native');

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import { actions as auth } from "../"
const { resetPassword } = auth;

import Form from "../components/Form"
import AuthContainer from "../components/AuthContainer"

const fields = [
    {
        key:'email',
        label: "Email Address",
        placeholder:"Email",
        autoFocus:false,
        secureTextEntry:false,
        value: "",
        type: "email"
    }
];

class ForgotPassword extends React.Component {
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
        this.props.resetPassword(data, this.onSuccess, this.onError)
    }

    onForgotPassword() {
        Actions.ForgotPassword()
    }

    onSuccess() {
        Alert.alert('Sent');
        Actions.pop();
    }

    onError(error) {
        this.setState({error:error.message});
    }

    render() {
        return (
            <AuthContainer>
                <Form fields={fields} onSubmit={this.onSubmit} buttonTitle={"Submit"} error={this.state.error}/>
            </AuthContainer>
        );
    }
}

export default connect(null, { resetPassword })(ForgotPassword);
