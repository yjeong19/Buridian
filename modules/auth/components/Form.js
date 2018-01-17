import React from 'react';

var {View, Text} = require('react-native');
import {Button} from 'react-native-elements'

import { validate, isEmpty } from '../utils/validate'

import styles from "../styles"


import AuthTextInput from "../components/AuthTextInput"

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        const fields = props.fields;
        const state = {};
        const error = {};

        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            var {key, type, value} = field;
            state[key] = {type: type, value: value};
            error[key] = ""
        }

        state["error"] = error;

        this.state = state;

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        var data = this.state;
        const result = validate(data);

        if (!result.success) this.setState({error: result.error});
        else this.props.onSubmit(this.extractData(data));
    }

    extractData(data){
        var retData = {};

        Object.keys(data).forEach(function(key) {
            if (key !== "error"){
                var { value } = data[key];
                retData[key] = value;
            }
        });

        return retData;
    }

    onChange(key, text) {
        let state = this.state;
        state[key]['value'] = text;
        this.setState(state);
    }

    render() {
        const fields = this.props.fields;
        const buttonTitle = this.props.buttonTitle;

        return (
            <View>
                {
                    (!isEmpty(this.props.error)) &&
                    <Text style={styles.errorText}>{this.props.error}</Text>
                }

                {
                    fields.map((data, idx) => {
                        var {key, label, placeholder, autoFocus, secureTextEntry} = data;
                        return (
                            <AuthTextInput key={key}
                                           label={label}
                                           placeholder={placeholder}
                                           autoFocus={autoFocus}
                                           onChangeText={(text) => this.onChange(key, text)}
                                           secureTextEntry={secureTextEntry}
                                           value={this.state[key]['value']}
                                           error={this.state.error[key]}/>
                        )
                    })
                }

                <Button
                    raised
                    title={buttonTitle}
                    borderRadius={4}
                    containerViewStyle={styles.formBtn}
                    buttonStyle={{}}
                    textStyle={{}}
                    onPress={this.onSubmit}/>
            </View>
        );
    }
}
