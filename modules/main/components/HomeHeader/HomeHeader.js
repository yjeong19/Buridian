import { Container, Header, Title, Button, Left, Right, Body, Icon, TextInput } from 'native-base';
import React, {Component} from 'react';
import {Text} from 'react-native'
import Picker from '../Picker';


export default class HomeHeader extends Component {

  constructor(props) {
    super(props);
  }

    render (){
      return(
      <Container style={{flex: .3,}}>
          <Picker />
      </Container>

      )
    }
}
