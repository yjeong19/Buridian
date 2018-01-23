import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Button } from 'native-base';
import styles from '../../styles';

export default class LandingPage extends React.Component {


  render() {
    return (
      <Container style={{marginTop: 200}}>
        <Image style={{
          height: 250,
          width: 230,
          marginLeft: 'auto',
          marginRight: 'auto'
        }} source={require('./img/donkey.png')} />
        <Text style={{
          fontFamily: 'Baskerville',
          fontSize: 18
          }}>In Philosophy, "Buridian's Ass" is a thought experiment about a hungry donkey.</Text>
        <Image style={{
          height: 125,
          width: 230,
          marginLeft: 'auto',
          marginRight: 'auto'
        }} source={require('./img/hay.png')} />
        <Text style={{
          fontFamily: 'Baskerville',
          fontSize: 18
        }}>The donkey was exactly halfway between two identical bales of hay.  Because it couldn't choose which one to eat, it starved to death.</Text>
        <Image style={{
          height: 145,
          width: 330,
          marginLeft: 'auto',
          marginRight: 'auto'
        }} source={require('./img/bottom.png')} />
        <Text style={{
          fontFamily: 'Baskerville',
          fontSize: 18
          }}>Don't be an ass...let Buridian choose where you eat your next meal.
        </Text>
      </Container>
    );
  }
}
