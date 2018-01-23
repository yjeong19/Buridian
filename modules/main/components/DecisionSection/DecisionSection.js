import React, {Component} from 'react';
import {Linking, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import { View, DeckSwiper, Container, Header, Content, Card, CardItem, Thumbnail, Title,Text, Button, Icon, Left, Body, Right } from 'native-base';
import API from '../../../../Utils/API'
// import ImageSlider from 'react-native-image-slider'


let counter = 1;
export default class DecisionSection extends Component{
  state={
    counter: 1,
    imageUrl: '',
    restaurantName: "",
    address: "",
    phone: "",
    website: "",
    restaurantId: '',
    fourSquarePage: "https://foursquare.com/",
    numOptions: "",
    categoryId: [],
    objArr: [],
  }
  // componentDidMount(){
  //   // var counter = this.props.
  //   this.setState({counter: this.props.counter});
  //   console.log(this.props.counter);
  // }
  
  componentDidMount(){
    this.handleRandomizeButton()
    // const counter = this.props.counter
    // this.setState({counter})
    counter = this.props.counter
    console.log(counter, '-------------DS 30')
  }

  componentDidUpdate(){
    // console.log(counter)
    // console.log(this.state, '=================' , counter)
    console.log(this.state);
  }


  handleSwipeRight(){
    Alert.alert(
      "You are Buridian's Ass!!!",
      'Pay $1,000,000 to unlock feature',
      [
        {text: 'I am sorry', onPress: () => console.log('Ask me later pressed')},
        {text: 'I Know', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        // {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    // alert("You are Buridian's Ass\n Pay $1,000,000")
  }


  handleRandomizeButton = ()=>{
    const categories = []
    this.props.objArr.map(category=>{
      categories.push(category.categoryID);
    })
    console.log(categories, 'map category')

  if(counter > 0){    
    // console.log(this.props.categoryObj[0].categoryID, this.props.location)
    API.getRestaurant(categories.join(), this.props.location)
    .then((response)=> response.json())
    .then((data)=>{
      // console.log(data.response.venues, '------------line 46', data.response.venues.length)

      // this.setState({objArr: data.response.venues})
      // // let data = JSON.parse(response._bodyInit);
      let i = Math.floor((Math.random() * data.response.venues.length) + 1);
      this.setState({restaurantName: data.response.venues[i].name});
      this.setState({address: data.response.venues[i].location.formattedAddress[0]});
      this.setState({phone: data.response.venues[i].contact.formattedPhone});
      this.setState({website: data.response.venues[i].url });
      //operator below needs to be changed for else
      this.setState({restaurantId: data.response.venues[i].id});
      this.setState({fourSquarePage: data.response.venues[i].menu.url ===undefined ? 'https://foursquare.com/' : data.response.venues[i].menu.url});
      // console.log(data.response.venues[i]);
      // console.log("4sq url" + data.response.venues[i].menu.url);
    })
    .then(()=>{
      this.handlePhoto();

    })
      
    // console.log('line 68 ===================', this.state, 'end ==========')
    // console.log(this.props);
    // alert('fuck dude')
    // let counter = this.state.counter
    // this.setState({counter: counter --});
    counter --
  }
  else{
    Alert.alert(
      "Go on Yelp",
      "You're defeating the purpose of the App!",
      [
        // {text: 'I am sorry', onPress: () => console.log('Ask me later pressed')},
        {text: "I'm Sorry", onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
        // {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}

  handlePhoto=()=>{
    // console.log("this.props.placeholderImage: " + this.props.placeholderImage);
    // this.setState({imageUrl: this.props.placeholderImage})
    API.getPhoto(this.state.restaurantId)
    .then((response)=> response.json())
    .then((responseJson)=>{
          // let imageUrl = photoObject.map(photos =>{
      //   return photos.prefix + '300x500' + photos.suffix;
      // })
      /// this gives an array of links
      // console.log("responseJson: " + responseJson.response.photos.items[0]);
      const photoObject = responseJson.response.photos.items[0];
      let imageUrl = photoObject.prefix + '300x500' + photoObject.suffix;
      
      // responseJson.response.photos.items[0] ? this.setState({imageUrl}) : this.setState({imageUrl: 'http://lorempicsum.com/futurama/350/200/1'})
      this.setState({imageUrl: imageUrl === '' || imageUrl === this.state.imageUrl || imageUrl===undefined ? 'http://lorempicsum.com/futurama/350/200/1' : imageUrl})
    })
    console.log(this.state);
    console.log("this.placeholderImage: " + imageUrl);
  }

  handleYesButton = () => {
    Linking.openURL(this.state.fourSquarePage).catch(err => console.error('An error occurred', err));
  }

  render(){
    const styles = StyleSheet.create({
      image: {
        flex: 1,
        width: 320,
      }
    });

        return(

          <Container>
          <View style={styles.image}>
            <DeckSwiper
              dataSource={[this.state]} 
              onSwipeLeft={this.handleRandomizeButton}
              onSwipeRight={this.handleSwipeRight}              
              renderItem={item =>
                <Card style={{ elevation: 3 }} style={{justifyContent: 'center', alignItems: 'center'}}>
                  <CardItem style={{justifyContent: 'center', alignItems: 'center'}}
                  >
                    <Left>
                      <Thumbnail source={{uri: this.state.imageUrl}} />
                      <Body>
                        <Text>{this.state.restaurantName}</Text>
                        <Text note>{this.state.address}</Text>
                        <Text note>{this.state.phone}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={{uri: this.state.imageUrl}} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button style={{backgroundColor: "red"}} onPress={this.handleRandomizeButton}>
                        <Icon name='thumbs-down' />
                      </Button>
                    </Left>
                  <Body>
                    <Text>Do you want to eat here?</Text>
                  </Body>
                  <Right>
                    <Button style={{backgroundColor: "green"}} onPress={this.handleYesButton}>
                      <Icon name='thumbs-up' />
                    </Button>
                  </Right>
                  </CardItem>
                </Card>
              }
            />
          </View>
        </Container>
        )
    }
}
