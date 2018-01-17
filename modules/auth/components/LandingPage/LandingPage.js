import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Button } from 'native-base';
import styles from '../../styles';

export default class LandingPage extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Welcome to Buridian</Text>
        <Image style={{
          height: 135,
          width: 230,
          marginLeft: 'auto',
          marginRight: 'auto'
        }} source={require('./img/donkey.png')} />
        <Text style={{
          fontFamily: 'Baskerville',
          fontSize: 20
          }}>In Philosophy, "Buridian's Ass" is a thought experiment about a hungry donkey.</Text>
        <Image style={{
          height: 130,
          width: 230,
          marginLeft: 'auto',
          marginRight: 'auto'
        }} source={require('./img/hay.png')} />
        <Text style={{
          fontFamily: 'Baskerville',
          fontSize: 20
        }}>The donkey was exactly halfway between two identical bales of hay.  Because it couldn't choose which one to eat, it starved to death.</Text>
        <Image style={{
          height: 175,
          width: 450,
          marginLeft: 'auto',
          marginRight: 'auto'
        }} source={require('./img/bottom.png')} />
        <Text style={{
          fontFamily: 'Baskerville',
          fontSize: 20
          }}>Don't be an ass...let Buridian choose where you eat your next meal.
        </Text>
      </Container>
    );
  }
}
