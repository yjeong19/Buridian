import React from 'react';

var {ScrollView} = require('react-native');
import styles from "../styles"

export default class AuthContainer extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.props.children}
            </ScrollView>
        );
    }
}
