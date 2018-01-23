import React, {Component} from 'react';
import {Container, Content, Button, Icon } from 'native-base';
import {Text} from 'react-native'

export default class YesOrNoButtons extends Component {
  render (){
    // console.log(this)
    return(
      <Container>
        <Content>
          <Button>
            <Icon name='thumbs-down' />
          </Button><Button>
            <Icon name='thumbs-up' />
          </Button>
        </Content>
      </Container>
    )
  }
}
