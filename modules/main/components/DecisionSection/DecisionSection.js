import React, {Component} from 'react';
import {Image, StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Title,Text, Button, Icon, Left, Body, Right } from 'native-base';
import API from '../../../../Utils/API'
// import ImageSlider from 'react-native-image-slider'



export default class DecisionSection extends Component{
  render(){
    const styles = StyleSheet.create({
      image: {
        flex: 1,
        width: 320,
      }
    });

        return(
          <Container style={{flex: -1, alignItems: "center", justifyContent: "center"}}>
            <Content>
              <Card style={styles.image}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: this.props.image}} />
                    <Body>
                      <Text>{this.props.restaurantName}</Text>
                        <Text note>{this.props.address}</Text>
                        <Text note>{this.props.phone}</Text>
                        <Text note>{this.props.website}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                  source={{uri: this.props.image}}
                  style={{height: 200, width: 200, flex: -1}}
                  onPress={this.props.handleImagePress}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button style={{backgroundColor: "red"}} onPress={this.props.randomized}>
                      <Icon name='thumbs-down' />
                    </Button>
                  </Left>
                <Body>
                  <Text>Do you want to eat here?</Text>
                </Body>
                <Right>
                  <Button style={{backgroundColor: "green"}} onPress={this.props.fourSquarePage}>
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
