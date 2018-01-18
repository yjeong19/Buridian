import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
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
        console.log(test,"righht here");
        return(
            <Container>
                <Content>
                    <Card style={styles.image}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: DecisionImage}} />
                                <Body>
                                    {/* THIS IS WHERE THE RESTAURANT NAME SHOULD GO */}
                                    <Text>NativeBase</Text>
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
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    {/* this might be state */}
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name='chevron-thin-down' />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                {/* what do we want here*/}
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}