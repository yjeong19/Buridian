import React from 'react';
import { View } from 'react-native';
import { Container, Button } from 'native-base';
import HeaderComponent from './src/Components/HeaderComponent'
import LandingPage from './src/Components/LandingPage'
import DecisionSection from './src/Components/DecisionSection'

export default class App extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#e35141' }}>
        <HeaderComponent />
<<<<<<< HEAD
        {/* <LandingPage /> */}
        {/* <DecisionSection /> */}
=======
        <LandingPage />
        {/*<DecisionSection />*/}
>>>>>>> 9d8866fed3e1186ced90b65e61329aea27275132
      </Container>
    );
  }
}
