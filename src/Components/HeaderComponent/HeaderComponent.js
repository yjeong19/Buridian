import React, {Component} from 'react';
import { View, Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import API from '../../Utils/API'


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
                        onPress={()=> this.props.login()}>
                    <Text style={{color:'white'}}>Login</Text>
                    </Button>
                    <Button
                        rounded
                        light
                        onPress={() => this.props.signUp()}>
                    <Text style={{color:'black'}}>Sign Up</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}
