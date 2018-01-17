import React from 'react';
import {Text, View} from 'react-native';
import LandingPage from '../components/LandingPage';

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "../styles"
import AuthContainer from "../components/AuthContainer"

class Welcome extends React.Component {
  render() {
    return (
      <AuthContainer>
          <LandingPage />
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
      </AuthContainer>
        );
    }
}


export default connect(null, {})(Welcome);
