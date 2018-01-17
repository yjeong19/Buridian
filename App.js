import React, {Component} from 'react';
import { View } from 'react-native';
import { Container, Button } from 'native-base';
import LandingPage from './modules/auth/components/LandingPage';
import { Provider } from 'react-redux';
import Router from './config/routes';
import store from './redux/store';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
