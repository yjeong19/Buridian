import React from 'react';
import { View, StyleSheet, Alert, Text, Linking, ScrollView } from 'react-native';
import {Container} from 'native-base';

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

//import Checkbox
import { color } from "../../../styles/Theme";
import Picker from "../components/Picker";
import DecisionSection from "../components/DecisionSection";
import YesOrNoButtons from "../components/YesOrNoButtons";
import API from '../../../Utils/API'
import { actions as auth } from "../../auth"
import PickerExample from '../components/Picker/Picker';
import Home from './Form'

var { signOut } = auth;

class Results extends React.Component {
    state={
        imageUrl: '',
        restaurantName: "",
        address: "",
        phone: "",
        website: "",
        restaurantId: '',
        fourSquarePage: "",
        numOptions: "",
        categoryId: [],
        images: ["https://media.boingboing.net/wp-content/uploads/2017/03/surprised-cat-04.jpg", "https://www.hobartcity.com.au/files/assets/public/emergency-management/cat_and_dog-1024x899.jpg?w=1200"]
      }

      componentDidMount(){
        this.handleRandomizeButton();
        // this.handlePhoto();
      }

      handlePhoto=()=>{
        console.log("Restaurant ID from handlePhoto: " + this.state.restaurantId)
        API.getPhoto(this.state.restaurantId)
        .then((response)=> response.json())
        .then((responseJson)=>{
              // let imageUrl = photoObject.map(photos =>{
          //   return photos.prefix + '300x500' + photos.suffix;
          // })
          /// this gives an array of links
          const photoObject = responseJson.response.photos.items[0];
          let imageUrl = photoObject.prefix + '300x500' + photoObject.suffix;
          if (responseJson.response.photos===!null) {
            this.setState({images: imageUrl})
          }
        })
      }

          // if(!responseJson.response.photos.items){
          //   this.setState({imageUrl: 'http://lorempicsum.com/futurama/350/200/1'})
      //     //   console.log(this.state.url)
      //     // }
      //     // else{
      //       // let imageUrl = photoObject.map(photos =>{
      //       //   return photos.prefix + '300x500' + photos.suffix;
      //       // })
      //       /// this gives an array of links



      //       console.log(imageUrl)
      //     }
      //   })
      // }

      handleAPI = ()=>{
        API.getRestaurant()
        .then((res)=> res.json())
        .then((resJson)=>{
          // console.log(resJson);
        })

      }

      handleSettingsPress = ()=>{
        Alert.alert("settings");
      }

      handleRandomizeButton = ()=>{
        console.log(this.props.categoryObj[0].categoryID, this.props.location)
        API.getRestaurant(this.props.categoryObj[0].categoryID, this.props.location)
        .then((response)=> response.json())
        .then((data)=>{
          // let data = JSON.parse(response._bodyInit);
          let i = Math.floor((Math.random() * data.response.venues.length) + 1);
          this.setState({restaurantName: data.response.venues[i].name});
          this.setState({address: data.response.venues[i].location.formattedAddress[0]});
          this.setState({phone: data.response.venues[i].contact.formattedPhone});
          this.setState({website: data.response.venues[i].url});
          this.setState({restaurantId: data.response.venues[i].id});
          this.setState({fourSquarePage: data.response.venues[i].menu.url});
          // console.log(data.response.venues[i]);
          // console.log("4sq url" + data.response.venues[i].menu.url);
          this.handlePhoto();
          console.log(this.props)
        });
        console.log(this.props);
      }

      handleYesButton = () => {
        Linking.openURL(this.state.fourSquarePage).catch(err => console.error('An error occurred', err));
      }

      handleImagePress = () => {
        Actions.ImageSlider();
      }


    onSignOut() {
      this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess() {
      Actions.replace("Auth")
    }

    onError(error) {
      Alert.alert('Oops!', error.message);
    }

    render() {

      return (
        <Container style={{
            flex: 0,
          backgroundColor: '#e35141',
          justifyContent: "center",
          alignItems: "center"}}>
        <ScrollView style={{flex:0}}>
          <DecisionSection
            image={this.state.imageUrl}
            style={{flex: -1}}
            randomized={this.handleRandomizeButton}
            restaurantName={this.state.restaurantName}
            address={this.state.address}
            phone={this.state.phone}
            website={this.state.website}
            fourSquarePage={this.handleYesButton}
            ImageSlider={this.handleImagePress}
            />
            <Button
              raised
              title={'LOG OUT'}
              borderRadius={4}
              backgroundColor={color.main}
              containerViewStyle={{marginVertical:0, marginHorizontal:0}}
              buttonStyle={{}} //optional
              textStyle={{fontWeight: "500"}}
              onPress={this.onSignOut.bind(this)}/>
            </ScrollView>
        </Container>
      );
    }
}

function mapStateToProps(state, props) {
    return {
        user:  state.authReducer.user
    }
}

export default connect(mapStateToProps, { signOut })(Results);
