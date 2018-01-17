import React from 'react';
import { View } from 'react-native';
import { Container, Button } from 'native-base';
import HeaderComponent from './src/Components/HeaderComponent'
import LandingPage from './src/Components/LandingPage'

export default class App extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#e35141' }}>
        <HeaderComponent />
        <LandingPage />
      </Container>
    );
  }
}
