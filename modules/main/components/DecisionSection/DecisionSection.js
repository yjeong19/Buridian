import React, {Component} from 'react';
import {ScrollView, Image, StyleSheet, Alert } from 'react-native';
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
    fourSquarePage: "",
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
      this.setState({address: data.response.venues[i].location.formattedAddress[0] ? data.response.venues[i].location.formattedAddress[0] : 'testing' });
      this.setState({phone: data.response.venues[i].contact.formattedPhone});
      this.setState({website: data.response.venues[i].url ===undefined ? 'https://www.fousquare.com' : data.response.venues[i].url});
      //operator below needs to be changed for else
      this.setState({restaurantId: data.response.venues[i].id ? data.response.venues[i].id :'4b0df699f964a520345323e3' });
      this.setState({fourSquarePage: data.response.venues[i].menu.url ==='' ? data.response.venues[i].menu.url : 'https://www.foursquare.com'});
      // console.log(data.response.venues[i]);
      // console.log("4sq url" + data.response.venues[i].menu.url);
      this.handlePhoto();
      
    });
    // console.log('line 68 ===================', this.state, 'end ==========')
    // console.log(this.props);
    // alert('fuck dude')
    // let counter = this.state.counter
    // this.setState({counter: counter --});
    counter --
  }
  else{
    alert('GO ON YELP DUDE')
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
      this.setState({imageUrl: imageUrl===''? 'http://lorempicsum.com/futurama/350/200/1': imageUrl})
    })
    console.log(this.state);
    console.log("this.placeholderImage: " + imageUrl);
  }

  render(){
    const styles = StyleSheet.create({
      image: {
        flex: 1,
        width: 320,
      }
    });


    const cards = 
  [ 
       {
      text: 'card one',
      name: 'one',
      image: require('../CheckBox/checked.png')
    },
    {
      text: 'card one',
      name: 'one',
      image: require('../CheckBox/checked.png')
    }
  ]
  

  const cards2 = this.props.objArr
  // console.log(cards2, '--------------------116')
        return(
          // <Container style={{ justifyContent: 'center', alignItems: 'center'}}>  

          //   <Content>
          // <ScrollView>          
          //     <Card style={styles.image}>
          //       <CardItem>
          //         <Left>
          //           <Thumbnail source={{uri: this.props.image}} />
          //           <Body>
          //             <Text>{this.props.restaurantName}</Text>
          //               <Text note>{this.props.address}</Text>
          //               <Text note>{this.props.phone}</Text>
          //               <Text note>{this.props.website}</Text>
          //           </Body>
          //         </Left>
          //       </CardItem>
          //       <CardItem cardBody
          //         style={{justifyContent: 'center', alignItems: 'center'}}
          //         onPress={this.props.handleImagePress}
          //         >
          //         <Image
          //         source={{uri: this.props.image}}
          //         style={{height: 200, width: 200, flex: -1}}
          //         />
          //       </CardItem>
          //       <CardItem>
          //         <Left>
          //           <Button style={{backgroundColor: "red"}} onPress={this.props.randomized}>
          //             <Icon name='thumbs-down' />
          //           </Button>
          //         </Left>
          //       <Body>
          //         <Text>Do you want to eat here?</Text>
          //       </Body>
          //       <Right>
          //         <Button style={{backgroundColor: "green"}} onPress={this.props.fourSquarePage}>
          //           <Icon name='thumbs-up' />
          //         </Button>
          //       </Right>
          //       </CardItem>
          //     </Card>

          //     <Button onPress={this.props.randomized}>
          //       <Icon name='shuffle' />
          //     </Button>
          //   </ScrollView>

          //   </Content>
          // {/* </Container> */}


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
                      <Thumbnail source={{uri: this.state.imageUrl ==='' ? 'http://lorempicsum.com/futurama/350/200/1' : this.state.imageUrl}} />
                      <Body>
                        <Text>{this.state.restaurantName}</Text>
                        <Text note>{this.state.address}</Text>
                        <Text note>{this.state.phone}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={{uri: this.state.imageUrl === ''? 'http://lorempicsum.com/futurama/350/200/1': this.state.imageUrl}} />
                  </CardItem>
                  <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.name}</Text>
                  </CardItem>
                </Card>
              }
            />
          </View>
        </Container>
        )
    }
}
