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
                <Button rounded dark>
                  <Text style={{color:'white'}}>Login</Text>
                </Button>
                <Button rounded light>
                  <Text style={{color:'black'}}>Sign Up</Text>
                </Button>
              </View>
            </Container>
        )
    }
}
