import React from 'react';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

const loaderHandler = require('react-native-busy-indicator/LoaderHandler');

import { actions as auth } from "../"
const { register } = auth;

import Form from "../components/Form"
import AuthContainer from "../components/AuthContainer"

const fields = [
    {
        key:'username',
        label: "Username",
        placeholder:"Username",
        autoFocus:false,
        secureTextEntry:false,
        value: "",
        type: "text"
    },
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
    },
    {
        key:'confirm_password',
        label: "Confirm Password",
        placeholder:"Confirm Password",
        autoFocus:false,
        secureTextEntry:true,
        value: "",
        type: "confirm_password"
    }
];

class Register extends React.Component {
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

        this.props.register(data, this.onSuccess, this.onError)
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
                <Form fields={fields} onSubmit={this.onSubmit} buttonTitle={"Register"} error={this.state.error}/>
            </AuthContainer>
        );
    }
}

export default connect(null, { register })(Register);
