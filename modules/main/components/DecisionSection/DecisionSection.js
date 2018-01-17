import React, {Component} from 'react';
import {Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Title,Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class DecisionSection extends Component{
    render(){
        return(
            <Container>
            {/* <Header /> */}
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://picsum.photos/200/300/?random'}} />
                                <Body>
                                    {/* THIS IS WHERE THE RESTAURANT NAME SHOULD GO */}
                                    <Text>NativeBase</Text>
                                    {/* THIS IS WHRERE MAYBE RESTAURAND LOCATION? */}
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://picsum.photos/200/300/?random'}} style={{height: 200, width: null, flex: 1}}/>
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
                                    <Icon active name="chatbubbles" />
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