import React, {Component} from 'react';
import {Image, StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Title,Text, Button, Icon, Left, Body, Right } from 'native-base';
import API from '../../../../Utils/API'
import ImageSlider from 'react-native-image-slider'



export default class DecisionSection extends Component{
    render(){
      const styles = StyleSheet.create({
        image: {
          flex: 1,
            // NEED TO FIND A WAY TO MAKE WIDTH 100% SCREEN
            width: 320,
            }
        });
      const DecisionImage = ()=>{
          // if (!this.props.image){
    
          //             return 
          //     'http://lorempicsum.com/futurama/350/200/1'  
          // }
          // else{
          //       return this.props.image[0]
          //   }

          return this.props.image

          }
       

        console.log(this.props.image,"line 31 ====================================");
        return(
          <Container>
            <Content>
              <Card style={styles.image}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: this.props.image}} />
                    <Body>
                        {/* THIS IS WHERE THE RESTAURANT NAME SHOULD GO */}
                        <Text>{this.props.restaurantName}</Text>
                        {/* THIS IS WHRERE MAYBE RESTAURAND LOCATION? */}
                        <Text note>{this.props.address}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: this.props.image}} style={{height: 200, width: 200, flex: 1}}/>
                  {/* {this.DecisionImage} */}
                </CardItem>
                <CardItem>
                  <Left>
                    <Button style={{backgroundColor: "red"}} onPress={()=> alert('NO')}>
                      <Icon name='thumbs-down' />
                    </Button>
                  </Left>
                <Body>
                  <Text>Do you want to eat here?</Text>
                </Body>
                <Right>
                  <Button style={{backgroundColor: "green"}} onPress={()=> Alert.alert("YES!")}>
                    <Icon name='thumbs-up' />
                  </Button>
                </Right>
                </CardItem>
              </Card>
              <Button onPress={this.props.randomized}>
                <Icon name='shuffle' />
              </Button>
            </Content>
          </Container>
        )
    }
}
