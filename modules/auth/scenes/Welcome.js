import React from 'react';
import {Text, View} from 'react-native';

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "../styles"
import AuthContainer from "../components/AuthContainer"

class Welcome extends React.Component {
    render() {
        return (
            <AuthContainer>
                <View style={styles.wrapper}>
                    <Text style={styles.appTitle}>APP Name</Text>
                </View>
                <View>
                    {/*<SocialIcon
                        raised
                        button
                        type='facebook'
                        title='Sign in with Facebook'
                        iconSize={19}
                        style={styles.fbButton}
                        onPress={this.onSignInWithFacebook}/>*/}

                    <View style={styles.bottomContainer}>
                        <Button
                            raised
                            title={'Sign up'}
                            borderRadius={4}
                            containerViewStyle={styles.buttonContainer}
                            buttonStyle={{}}
                            textStyle={styles.buttonText}
                            onPress={Actions.Register}/>
                        <Button
                            raised
                            title={'Login'}
                            borderRadius={4}
                            containerViewStyle={[styles.buttonContainer]}
                            buttonStyle={{}}
                            textStyle={styles.buttonText}
                            onPress={Actions.Login}/>
                    </View>
                </View>
            </AuthContainer>
        );
    }
}


export default connect(null, {})(Welcome);
