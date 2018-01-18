import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {Text} from 'react-native'

export default class DashboardWrapper extends Component {
    render (){
        console.log(this)
        return(
            <Container>
                {this.props.children}
            </Container>
        )
    }
}
