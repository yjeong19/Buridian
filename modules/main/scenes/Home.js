import React from 'react';
var { View, StyleSheet, Alert } = require('react-native');

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import { color } from "../../../styles/Theme"

import { actions as auth } from "../../auth"
var { signOut } = auth;

class Home extends React.Component {
    constructor(){
        super();
        this.state = { }
    }

    onSignOut() {
        this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess() {
        Actions.replace("Auth")
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    raised
                    title={'LOG OUT'}
                    borderRadius={4}
                    backgroundColor={color.main}
                    containerViewStyle={styles.buttonContainer}
                    buttonStyle={{}} //optional
                    textStyle={styles.buttonText}
                    onPress={this.onSignOut.bind(this)}/>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        user:  state.authReducer.user
    }
}

export default connect(mapStateToProps, { signOut })(Home);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },

    buttonContainer:{
        marginVertical:0, marginHorizontal:0
    },

    buttonText:{
        fontWeight:"500"
    }
});
