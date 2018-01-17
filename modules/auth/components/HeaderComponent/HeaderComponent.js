import React, {Component} from 'react';
import { View, Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';


export default class HeaderComponent extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Buridian</Title>
                    </Body>
                </Header>
              <View style={{flexDirection: "row", justifyContent: 'center'}}>
                <Button
                  rounded
                  dark
                  onPress={() => alert('You pressed the Login button')}>
                  <Text style={{color:'white'}}>Login</Text>
                </Button>
                <Button
                  rounded
                  light
                  onPress={() => alert('You pressed the Sign Up button')}>
                  <Text style={{color:'black'}}>Sign Up</Text>
                </Button>
              </View>
            </Container>
        )
    }
}
