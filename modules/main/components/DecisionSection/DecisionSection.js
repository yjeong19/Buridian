import React, {Component} from 'react';
import {ScrollView, Image, StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Title,Text, Button, Icon, Left, Body, Right } from 'native-base';
import API from '../../../../Utils/API'
// import ImageSlider from 'react-native-image-slider'



export default class DecisionSection extends Component{
  state={
    counter: 0
  }
  // componentDidMount(){
  //   // var counter = this.props.
  //   this.setState({counter: this.props.counter});
  //   console.log(this.props.counter);
  // }

  render(){
    const styles = StyleSheet.create({
      image: {
        flex: 1,
        width: 320,
      }
    });


        // console.log(this.props.image,"line 31 ====================================");
        return(
          <Container style={{ justifyContent: 'center', alignItems: 'center'}}>  
            <Content>
          <ScrollView>          
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
                  <Image source={{uri: this.props.image}} style={{height: 200, width: 200, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button style={{backgroundColor: "red"}} onPress={console.log(this.props.api)}>
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
              <Button onPress={this.props.randomized}>
                <Icon name='shuffle' />
              </Button>
            </ScrollView>
            </Content>
          </Container>
        )
    }
}
