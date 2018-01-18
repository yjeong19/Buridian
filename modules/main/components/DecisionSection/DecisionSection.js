import React, {Component} from 'react';
import {Image, StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Title,Text, Button, Icon, Left, Body, Right } from 'native-base';
import API from '../../../../Utils/API'



export default class DecisionSection extends Component{

    render(){

        const styles = StyleSheet.create({
            image: {
                flex: 1,
                // NEED TO FIND A WAY TO MAKE WIDTH 100% SCREEN
                width: 320,
            }
        });
        const test = API.getRestaurant;
        const DecisionImage = this.props.image
        console.log(test,"right here");
        return(
          <Container>
            <Content>
              <Card style={styles.image}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: DecisionImage}} />
                    <Body>
                        {/* THIS IS WHERE THE RESTAURANT NAME SHOULD GO */}
                        <Text>Restaurant Name</Text>
                        {/* THIS IS WHRERE MAYBE RESTAURAND LOCATION? */}
                        <Text note>GeekyAnts</Text>
                    </Body>
                  </Left>
              </CardItem>
              <CardItem cardBody>
                  <Image source={{uri: DecisionImage}} style={{height: 200, width: 200, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button style={{backgroundColor: "red"}} onPress={()=>alert('fuck')}>
                    <Icon name='thumbs-down' />
                  </Button>

                </Left>
                <Body>
                  <Text>Do you want to eat here?</Text>
                </Body>
                <Right>
                  <Button style={{backgroundColor: "green"}} onPress={this.props.like}>
                    <Icon name='thumbs-up' />
                  </Button>
                </Right>
                </CardItem>
              </Card>
            </Content>
          </Container>
        )
    }
}
