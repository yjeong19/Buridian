import React, {Component} from 'react';

var { View } = require('react-native');

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { isEmpty } from '../utils/validate'
import styles from "../styles"

export default class AuthTextInput extends Component {
    render() {
        return (
                <View>
                    <FormLabel>{this.props.label}</FormLabel>
                    <FormInput
                        autoCapitalize='none'
                        clearButtonMode='while-editing'
                        underlineColorAndroid={"#fff"}
                        placeholder={this.props.placeholder}
                        autoFocus={this.props.autoFocus}
                        onChangeText={this.props.onChangeText}
                        secureTextEntry={this.props.secureTextEntry}
                        inputStyle={styles.inputContainer}

                        value={this.props.value}/>
                    {
                        (!isEmpty(this.props.error)) &&
                        <FormValidationMessage
                            containerStyle={{}}>
                            {this.props.error}
                        </FormValidationMessage>
                    }
                </View>
        );
    }
}
