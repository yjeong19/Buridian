import React from 'react';

var {ScrollView} = require('react-native');
import styles from "../styles"

export default class AuthContainer extends React.Component {
    render() {
        return (
            <ScrollView style={{flex: 1,
            backgroundColor: '#e35141',
            // alignItems: 'center',
            // justifyContent: 'center'
            }}>
                {this.props.children}
            </ScrollView>
        );
    }
}
