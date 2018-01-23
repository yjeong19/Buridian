import React from 'react';
import { View, Image } from 'react-native';

import {Scene, Router, ActionConst, Stack} from 'react-native-router-flux';

import Splash from '../modules/splash/Splash';
import Results from '../modules/main/scenes/Results';
import Form from '../modules/main/scenes/Form';

import Welcome from '../modules/auth/scenes/Welcome';
import Register from '../modules/auth/scenes/Register';
import Login from '../modules/auth/scenes/Login';
import ForgotPassword from '../modules/auth/scenes/ForgotPassword';
import ImageSlider from "../modules/main/scenes/ImageSlider";

import firebase from "../config/firebase"

const headerImage = require('./logo.png');

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        this.checkToken();
    }

    checkToken() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.setState({isReady: true, isLoggedIn: true})
            else this.setState({isReady: true, isLoggedIn: false})
        });
    }

    render() {
      if (!this.state.isReady)
          return <Splash/>

      return (
        <Router>
          <Scene key="root" hideNavBar>
            <Stack key="Auth" initial={!this.state.isLoggedIn}>
              <Scene key="Welcome" component={Welcome} renderTitle={() => (
                <View>
                  <Image style={{width: 165, height: 30}} source={headerImage} />
                </View>
              )} initial={true} />
              <Scene key="Register" component={Register} title="Register"/>
              <Scene key="Login" component={Login} title="Login"/>
              <Scene key="ForgotPassword" component={ForgotPassword} title="ForgotPassword"/>
            </Stack>

            <Stack key="Main" initial={this.state.isLoggedIn}>
              <Scene key="Search" component={Form} title="Restaurant Search" initial={true} type={ActionConst.REPLACE}/>
              <Scene key="Results" component={Results} title="Results"/>
              <Scene key="ImageSlider" component={ImageSlider} title="Image Slider"/>

            </Stack>
          </Scene>
        </Router>
      )
    }
}
